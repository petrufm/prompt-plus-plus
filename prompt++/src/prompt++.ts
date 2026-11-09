#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import { interpret, ModuleResolver } from "./core";

function createModuleSearchHandler(templateRoots: string[]): ModuleResolver {
  const roots = templateRoots.length > 0 ? templateRoots : [process.cwd()];
  return async (module: string): Promise<string | null> => {
    if (module.length === 0) {
      return null;
    }
    const moduleFilePath = `${module}.prompt++`;
    for (const root of roots) {
      let isUrl = true;
      try {
        new URL(root);
      } catch {
        isUrl = false;
      }

      if (isUrl) {
        try {
          const rootUrl = root.endsWith("/") ? root : `${root}/`;
          const url = new URL(moduleFilePath, rootUrl);
          const response = await fetch(url.href);
          if (response.ok) {
            return await response.text();
          }
        } catch {
          // Try the next module root.
        }
      } else {
        const absFilePath = path.isAbsolute(root)
          ? path.join(root, moduleFilePath)
          : path.resolve(process.cwd(), root, moduleFilePath);
        if (fs.existsSync(absFilePath) && fs.statSync(absFilePath).isFile()) {
          return fs.readFileSync(absFilePath, "utf-8");
        }
      }
    }
    return null;
  };
}

function parseArgs(rawArgs: string[]): { moduleRoots: string[]; inputFiles: string[] } {
  const inputFiles: string[] = [];
  const moduleRoots: string[] = [];
  let filePathSeen = false;

  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === "-ptp") {
      if (filePathSeen) {
        throw new Error("-ptp must appear before any input file paths");
      }
      if (i + 1 >= rawArgs.length) {
        throw new Error("Missing value for -ptp");
      }
      const moduleRoot = rawArgs[++i].trim();
      if (moduleRoot.length === 0) {
        throw new Error("Missing value for -ptp");
      }
      moduleRoots.push(moduleRoot);
    } else {
      filePathSeen = true;
      inputFiles.push(arg);
    }
  }

  return { moduleRoots, inputFiles };
}

export async function main(rawArgs = process.argv.slice(2)): Promise<void> {
  const { moduleRoots, inputFiles } = parseArgs(rawArgs);
  const moduleSearchHandler = createModuleSearchHandler(moduleRoots);

  if (inputFiles.length > 0) {
    for (const filePath of inputFiles) {
      const input = fs.readFileSync(filePath, "utf-8");
      process.stdout.write(await interpret(input, moduleSearchHandler, filePath));
    }
  } else {
    const input = fs.readFileSync(0, "utf-8");
    process.stdout.write(await interpret(input, moduleSearchHandler, "stdin"));
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}

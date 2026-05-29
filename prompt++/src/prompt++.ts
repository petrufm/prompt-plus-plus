import * as fs from "fs";
import * as path from "path";

import { CharStream, CommonTokenStream } from "antlr4ng";
import { prompt_plus_plus_lexer } from "./parser/prompt_plus_plus_lexer";
import { prompt_plus_plus_parser } from "./parser/prompt_plus_plus_parser";
import { PromptPlusPlusInterpreter, InterpretationError } from "./interpreter/prompt_plus_plus_interpreter";
import { CountingErrorHandler } from "./parser/prompt_error_handler";

function splitTemplatePaths(value: string): string[] {
  return value
    .split(";")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

function createModuleSearchHandler(templateRoots: string[]) {
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
          // Ignore fetch failures
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

function parseArgs(rawArgs: string[]): { moduleRoots: string[]; inFilePath: string[] } {
  const inFilePath: string[] = [];
  let moduleRoots: string[] = [];
  let ptpSeen = false;
  let filePathSeen = false;

  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === "-ptp") {
      if (filePathSeen) {
        throw new Error("-ptp must appear before any input file paths");
      }
      if (ptpSeen) {
        throw new Error("-ptp may be specified at most once");
      }
      if (i + 1 >= rawArgs.length) {
        throw new Error("Missing value for -ptp");
      }
      ptpSeen = true;
      moduleRoots = splitTemplatePaths(rawArgs[++i]);
    } else {
      filePathSeen = true;
      inFilePath.push(arg);
    }
  }
  return { moduleRoots, inFilePath };
}

async function interprete(
  fileInput: string,
  input: string,
  moduleSearchHandler: (module: string) => Promise<string | null>
): Promise<string> {
  try {
    const charStream = CharStream.fromString(input);
    const lexer = new prompt_plus_plus_lexer(charStream);
    const errorCounter = new CountingErrorHandler();
    lexer.addErrorListener(errorCounter);
    const tokens = new CommonTokenStream(lexer);
    const parser = new prompt_plus_plus_parser(tokens);
    const tree = parser.prompt_plus_plus();
    if (parser.numberOfSyntaxErrors == 0 && !errorCounter.hasErrors()) {
      const interpreter = new PromptPlusPlusInterpreter(moduleSearchHandler);
      return (await tree.accept(interpreter) as string[])[0];
    } else {
        throw new InterpretationError(`Syntax errors in prompt template module: ${fileInput}`);
    }
  } catch (error: any) {
    console.error("Error processing ", fileInput, ":", error.message);
  }
  return "";
}

async function main() {
  try {
    const { moduleRoots, inFilePath } = parseArgs(process.argv.slice(2));
    const moduleSearchHandler = createModuleSearchHandler(moduleRoots);
    if (inFilePath.length > 0) {
      for (const filePath of inFilePath) {
        const input = fs.readFileSync(filePath, "utf-8");
        console.log(await interprete(filePath, input, moduleSearchHandler));
      }
    } else {
      const input = fs.readFileSync(0, "utf-8");
      console.log(await interprete("stdin", input, moduleSearchHandler));
    }
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
}

main();

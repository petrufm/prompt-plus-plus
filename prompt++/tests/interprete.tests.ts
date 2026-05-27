import * as fs from "fs";
import path from "path";

import { describe, it, expect } from '@jest/globals';

import { CharStream, CommonTokenStream } from "antlr4ng";
import { prompt_plus_plus_lexer, prompt_plus_plus_parser, PromptPlusPlusInterpreter } from "../src";

describe.each([
  { input: 't0.prompt++', expected: 't0.expected.txt' },
  { input: 't1.prompt++', expected: 't1.expected.txt' },
  { input: 't2.prompt++', expected: 't2.expected.txt' }
])('interpretation', ({ input, expected }) => {
  it(`should interpret ${input} as ${expected}`, async () => {
        const content = fs.readFileSync("tests/testData/" + input, "utf-8");
        const charStream = CharStream.fromString(content);
        const lexer = new prompt_plus_plus_lexer(charStream);
        const tokens = new CommonTokenStream(lexer);
        const parser = new prompt_plus_plus_parser(tokens);
        const tree = parser.prompt_plus_plus();
        expect(parser.numberOfSyntaxErrors).toBe(0);
        const interpreter = new PromptPlusPlusInterpreter(async (module: string): Promise<string | null> => {
          const moduleFilePath = `${module}.prompt++`;
          const roots = [process.cwd() + "/tests/testData"];
          for (const root of roots) {
            const absFilePath = path.isAbsolute(root) 
              ? path.join(root, moduleFilePath)
              : path.resolve(process.cwd(), root, moduleFilePath);
            if (fs.existsSync(absFilePath) && fs.statSync(absFilePath).isFile()) {
              return fs.readFileSync(absFilePath, "utf-8");
            }
          }
          return null;
        });
        let result = (await tree.accept(interpreter) as string[])[0];
        const expectedInput = fs.readFileSync("tests/testData/" + expected, "utf-8");
        expect(result).toBe(expectedInput);
  });
});
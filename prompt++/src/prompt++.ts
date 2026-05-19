import * as fs from "fs";

import { CharStream, CommonTokenStream } from "antlr4ng";
import { prompt_plus_plus_lexer } from "./parser/prompt_plus_plus_lexer";
import { prompt_plus_plus_parser } from "./parser/prompt_plus_plus_parser";
import { PromptPlusPlusInterpreter } from "./interpreter/prompt_plus_plus_interpreter";

function interprete(fileInput: string, input: string): string {
  try {
    const charStream = CharStream.fromString(input);
    const lexer = new prompt_plus_plus_lexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new prompt_plus_plus_parser(tokens);
    const tree = parser.prompt_plus_plus();
    if (parser.numberOfSyntaxErrors == 0) {
      const interpreter = new PromptPlusPlusInterpreter((module: string) : string | null => {
          const fullFilePath = process.cwd() + "/" + module.concat(".prompt++");
          if (fs.existsSync(fullFilePath) && fs.statSync(fullFilePath).isFile()) {
            return fs.readFileSync(fullFilePath, "utf-8");
          }
          return null;
      });
      return (tree.accept(interpreter) as string[])[0];
    }
  } catch (error : any) {
    console.error("Error processing ", fileInput, ":", error.message);
  }
  return ""
}

function main() {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    for (const filePath of args) {
        let input = fs.readFileSync(filePath, "utf-8");
        console.log(interprete(filePath, input));
    }
  } else {
        let input = fs.readFileSync(0, "utf-8");
        console.log(interprete("stdin", input));
  }
}

main();

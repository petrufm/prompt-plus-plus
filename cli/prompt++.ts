import { CharStreams, CommonTokenStream } from "antlr4ts";
import { prompt_plus_plus_lexer } from "../core/parser/prompt_plus_plus_lexer";
import { prompt_plus_plus_parser } from "../core/parser/prompt_plus_plus_parser";
import { PromptPlusPlusInterpreter } from "../core/interpreter/prompt_plus_plus_interpreter";
import * as fs from "fs";

function interprete(input: string): string {
  try {
    const charStream = CharStreams.fromString(input);
    const lexer = new prompt_plus_plus_lexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new prompt_plus_plus_parser(tokens);
    const tree = parser.prompt_plus_plus();
    if (parser.numberOfSyntaxErrors == 0) {
      const interpreter = new PromptPlusPlusInterpreter();
      return interpreter.visitPrompt_plus_plus(tree)[0];
    }
  } catch (error) {
    console.error("Error processing input:", error);
  }
  return ""
}

function main() {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    for (const filePath of args) {
        let input = fs.readFileSync(filePath, "utf-8");
        console.log(interprete(input));
    }
  } else {
        let input = fs.readFileSync(0, "utf-8");
        console.log(interprete(input));
  }
}

main();

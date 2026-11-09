import { CharStream, CommonTokenStream } from "antlr4ng";
import { prompt_plus_plus_lexer } from "./parser/prompt_plus_plus_lexer";
import { prompt_plus_plus_parser } from "./parser/prompt_plus_plus_parser";
import { PromptPlusPlusInterpreter, InterpretationError } from "./interpreter/prompt_plus_plus_interpreter";
import { CountingErrorHandler, SyntaxErrorCallback } from "./parser/prompt_error_handler";

export type ModuleResolver = (module: string) => Promise<string | null>;

export interface InterpretOptions {
  onSyntaxError?: SyntaxErrorCallback;
  removeDefaultErrorListeners?: boolean;
}

export async function interpret(
  input: string,
  moduleResolver: ModuleResolver = async () => null,
  sourceName = "input",
  options: InterpretOptions = {}
): Promise<string> {
  // Normalize input by removing BOM and converting CRLF to LF
  input = input
    .replace(/^\uFEFF/, "")
    .replace(/\r\n?/g, "\n");
  const charStream = CharStream.fromString(input);
  const lexer = new prompt_plus_plus_lexer(charStream);
  if (options.removeDefaultErrorListeners) {
    lexer.removeErrorListeners();
  }
  const errorCounter = new CountingErrorHandler(sourceName, options.onSyntaxError);
  lexer.addErrorListener(errorCounter);
  const tokens = new CommonTokenStream(lexer);
  const parser = new prompt_plus_plus_parser(tokens);
  if (options.removeDefaultErrorListeners) {
    parser.removeErrorListeners();
  }
  parser.addErrorListener(errorCounter);
  const tree = parser.prompt_plus_plus();
  if (parser.numberOfSyntaxErrors !== 0 || errorCounter.hasErrors()) {
    throw new InterpretationError(`Syntax errors in prompt template module: ${sourceName}`);
  }
  const interpreter = new PromptPlusPlusInterpreter(
    moduleResolver,
    options.onSyntaxError,
    options.removeDefaultErrorListeners
  );
  return (await tree.accept(interpreter) as string[])[0];
}

import { ANTLRErrorListener, ATNConfigSet, ATNSimulator, BitSet, DFA, Parser, RecognitionException, Recognizer, Token } from "antlr4ng";

export interface SyntaxErrorDetails {
    line: number;
    column: number;
    message: string;
    sourceName: string;
}

export type SyntaxErrorCallback = (error: SyntaxErrorDetails) => void;

export class CountingErrorHandler implements ANTLRErrorListener {

    private count : number = 0;

    constructor(
      private readonly sourceName = "input",
      private readonly onError?: SyntaxErrorCallback
    ) {}

    public hasErrors() : boolean {
      return this.count != 0;
    }

    syntaxError<S extends Token, T extends ATNSimulator>(recognizer: Recognizer<T>, offendingSymbol: S | null, line: number, charPositionInLine: number, msg: string, e: RecognitionException | null): void {
      this.count++;
      this.onError?.({
        line,
        column: charPositionInLine,
        message: msg,
        sourceName: this.sourceName
      });
    }
    
    reportAmbiguity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet): void {
    }
    
    reportAttemptingFullContext(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, configs: ATNConfigSet): void {
    }
    
    reportContextSensitivity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: ATNConfigSet): void {
    }
}

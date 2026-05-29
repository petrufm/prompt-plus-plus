import { ANTLRErrorListener, ATNConfigSet, ATNSimulator, BitSet, DFA, Parser, RecognitionException, Recognizer, Token } from "antlr4ng";

export class CountingErrorHandler implements ANTLRErrorListener {

    private count : number = 0;

    public hasErrors() : boolean {
      return this.count != 0;
    }

    syntaxError<S extends Token, T extends ATNSimulator>(recognizer: Recognizer<T>, offendingSymbol: S | null, line: number, charPositionInLine: number, msg: string, e: RecognitionException | null): void {
      const customMessage = `Syntax error at line ${line}, column ${charPositionInLine}: ${msg}`;        
      this.count++;
    }
    
    reportAmbiguity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet): void {
    }
    
    reportAttemptingFullContext(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, configs: ATNConfigSet): void {
    }
    
    reportContextSensitivity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: ATNConfigSet): void {
    }
}
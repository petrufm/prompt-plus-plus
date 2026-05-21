
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { prompt_plus_plus_parserListener } from "./prompt_plus_plus_parserListener.js";
import { prompt_plus_plus_parserVisitor } from "./prompt_plus_plus_parserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class prompt_plus_plus_parser extends antlr.Parser {
    public static readonly Natural_language_text_fragment = 1;
    public static readonly Prompt_template_substitution_operator = 2;
    public static readonly Prompt_template_definition_operator = 3;
    public static readonly Template_identifier = 4;
    public static readonly Prompt_template_substitution_resolution_operator = 5;
    public static readonly Arg_list_begin = 6;
    public static readonly Prompt_template_substitution_template_ws = 7;
    public static readonly Arg_list_end = 8;
    public static readonly Arg_list_separator = 9;
    public static readonly Prompt_template_definition_body_end = 10;
    public static readonly RULE_prompt_plus_plus = 0;
    public static readonly RULE_prompt_template = 1;
    public static readonly RULE_prompt_template_substitution = 2;
    public static readonly RULE_prompt_template_substitution_arg_list = 3;
    public static readonly RULE_prompt_template_substitution_actual_argument = 4;
    public static readonly RULE_named_prompt_template_definition = 5;
    public static readonly RULE_prompt_template_definition_arg_list = 6;

    public static readonly literalNames = [
        null, null, null, null, null, "':'"
    ];

    public static readonly symbolicNames = [
        null, "Natural_language_text_fragment", "Prompt_template_substitution_operator", 
        "Prompt_template_definition_operator", "Template_identifier", "Prompt_template_substitution_resolution_operator", 
        "Arg_list_begin", "Prompt_template_substitution_template_ws", "Arg_list_end", 
        "Arg_list_separator", "Prompt_template_definition_body_end"
    ];
    public static readonly ruleNames = [
        "prompt_plus_plus", "prompt_template", "prompt_template_substitution", 
        "prompt_template_substitution_arg_list", "prompt_template_substitution_actual_argument", 
        "named_prompt_template_definition", "prompt_template_definition_arg_list",
    ];

    public get grammarFileName(): string { return "prompt_plus_plus_parser.g4"; }
    public get literalNames(): (string | null)[] { return prompt_plus_plus_parser.literalNames; }
    public get symbolicNames(): (string | null)[] { return prompt_plus_plus_parser.symbolicNames; }
    public get ruleNames(): string[] { return prompt_plus_plus_parser.ruleNames; }
    public get serializedATN(): number[] { return prompt_plus_plus_parser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, prompt_plus_plus_parser._ATN, prompt_plus_plus_parser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prompt_plus_plus(): Prompt_plus_plusContext {
        let localContext = new Prompt_plus_plusContext(this.context, this.state);
        this.enterRule(localContext, 0, prompt_plus_plus_parser.RULE_prompt_plus_plus);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 17;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 14;
                this.named_prompt_template_definition();
                }
                }
                this.state = 19;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 21;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || _la === 2) {
                {
                this.state = 20;
                this.prompt_template();
                }
            }

            this.state = 23;
            this.match(prompt_plus_plus_parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prompt_template(): Prompt_templateContext {
        let localContext = new Prompt_templateContext(this.context, this.state);
        this.enterRule(localContext, 2, prompt_plus_plus_parser.RULE_prompt_template);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 27;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 27;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case prompt_plus_plus_parser.Natural_language_text_fragment:
                    {
                    this.state = 25;
                    this.match(prompt_plus_plus_parser.Natural_language_text_fragment);
                    }
                    break;
                case prompt_plus_plus_parser.Prompt_template_substitution_operator:
                    {
                    this.state = 26;
                    this.prompt_template_substitution();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 29;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 1 || _la === 2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prompt_template_substitution(): Prompt_template_substitutionContext {
        let localContext = new Prompt_template_substitutionContext(this.context, this.state);
        this.enterRule(localContext, 4, prompt_plus_plus_parser.RULE_prompt_template_substitution);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 31;
            this.match(prompt_plus_plus_parser.Prompt_template_substitution_operator);
            this.state = 36;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 32;
                    this.match(prompt_plus_plus_parser.Template_identifier);
                    this.state = 33;
                    this.match(prompt_plus_plus_parser.Prompt_template_substitution_resolution_operator);
                    }
                    }
                }
                this.state = 38;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            this.state = 39;
            this.match(prompt_plus_plus_parser.Template_identifier);
            this.state = 40;
            this.match(prompt_plus_plus_parser.Arg_list_begin);
            this.state = 42;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || _la === 2) {
                {
                this.state = 41;
                this.prompt_template_substitution_arg_list();
                }
            }

            this.state = 44;
            this.match(prompt_plus_plus_parser.Arg_list_end);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prompt_template_substitution_arg_list(): Prompt_template_substitution_arg_listContext {
        let localContext = new Prompt_template_substitution_arg_listContext(this.context, this.state);
        this.enterRule(localContext, 6, prompt_plus_plus_parser.RULE_prompt_template_substitution_arg_list);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 46;
            this.prompt_template_substitution_actual_argument();
            this.state = 51;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 47;
                    this.match(prompt_plus_plus_parser.Arg_list_separator);
                    this.state = 48;
                    this.prompt_template_substitution_arg_list();
                    }
                    }
                }
                this.state = 53;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prompt_template_substitution_actual_argument(): Prompt_template_substitution_actual_argumentContext {
        let localContext = new Prompt_template_substitution_actual_argumentContext(this.context, this.state);
        this.enterRule(localContext, 8, prompt_plus_plus_parser.RULE_prompt_template_substitution_actual_argument);
        try {
            this.state = 56;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case prompt_plus_plus_parser.Natural_language_text_fragment:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 54;
                this.match(prompt_plus_plus_parser.Natural_language_text_fragment);
                }
                break;
            case prompt_plus_plus_parser.Prompt_template_substitution_operator:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 55;
                this.prompt_template_substitution();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public named_prompt_template_definition(): Named_prompt_template_definitionContext {
        let localContext = new Named_prompt_template_definitionContext(this.context, this.state);
        this.enterRule(localContext, 10, prompt_plus_plus_parser.RULE_named_prompt_template_definition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 58;
            this.match(prompt_plus_plus_parser.Prompt_template_definition_operator);
            this.state = 59;
            this.match(prompt_plus_plus_parser.Template_identifier);
            this.state = 60;
            this.match(prompt_plus_plus_parser.Arg_list_begin);
            this.state = 62;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 61;
                this.prompt_template_definition_arg_list();
                }
            }

            this.state = 64;
            this.match(prompt_plus_plus_parser.Arg_list_end);
            this.state = 65;
            this.prompt_template();
            this.state = 66;
            this.match(prompt_plus_plus_parser.Prompt_template_definition_body_end);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prompt_template_definition_arg_list(): Prompt_template_definition_arg_listContext {
        let localContext = new Prompt_template_definition_arg_listContext(this.context, this.state);
        this.enterRule(localContext, 12, prompt_plus_plus_parser.RULE_prompt_template_definition_arg_list);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 68;
            this.match(prompt_plus_plus_parser.Template_identifier);
            this.state = 73;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 69;
                    this.match(prompt_plus_plus_parser.Arg_list_separator);
                    this.state = 70;
                    this.prompt_template_definition_arg_list();
                    }
                    }
                }
                this.state = 75;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,10,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,3,0,22,8,0,1,0,1,0,1,1,1,1,
        4,1,28,8,1,11,1,12,1,29,1,2,1,2,1,2,5,2,35,8,2,10,2,12,2,38,9,2,
        1,2,1,2,1,2,3,2,43,8,2,1,2,1,2,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,
        53,9,3,1,4,1,4,3,4,57,8,4,1,5,1,5,1,5,1,5,3,5,63,8,5,1,5,1,5,1,5,
        1,5,1,6,1,6,1,6,5,6,72,8,6,10,6,12,6,75,9,6,1,6,0,0,7,0,2,4,6,8,
        10,12,0,0,79,0,17,1,0,0,0,2,27,1,0,0,0,4,31,1,0,0,0,6,46,1,0,0,0,
        8,56,1,0,0,0,10,58,1,0,0,0,12,68,1,0,0,0,14,16,3,10,5,0,15,14,1,
        0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,21,1,0,0,0,19,
        17,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,
        0,23,24,5,0,0,1,24,1,1,0,0,0,25,28,5,1,0,0,26,28,3,4,2,0,27,25,1,
        0,0,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,
        3,1,0,0,0,31,36,5,2,0,0,32,33,5,4,0,0,33,35,5,5,0,0,34,32,1,0,0,
        0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,36,
        1,0,0,0,39,40,5,4,0,0,40,42,5,6,0,0,41,43,3,6,3,0,42,41,1,0,0,0,
        42,43,1,0,0,0,43,44,1,0,0,0,44,45,5,8,0,0,45,5,1,0,0,0,46,51,3,8,
        4,0,47,48,5,9,0,0,48,50,3,6,3,0,49,47,1,0,0,0,50,53,1,0,0,0,51,49,
        1,0,0,0,51,52,1,0,0,0,52,7,1,0,0,0,53,51,1,0,0,0,54,57,5,1,0,0,55,
        57,3,4,2,0,56,54,1,0,0,0,56,55,1,0,0,0,57,9,1,0,0,0,58,59,5,3,0,
        0,59,60,5,4,0,0,60,62,5,6,0,0,61,63,3,12,6,0,62,61,1,0,0,0,62,63,
        1,0,0,0,63,64,1,0,0,0,64,65,5,8,0,0,65,66,3,2,1,0,66,67,5,10,0,0,
        67,11,1,0,0,0,68,73,5,4,0,0,69,70,5,9,0,0,70,72,3,12,6,0,71,69,1,
        0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,13,1,0,0,0,75,
        73,1,0,0,0,10,17,21,27,29,36,42,51,56,62,73
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!prompt_plus_plus_parser.__ATN) {
            prompt_plus_plus_parser.__ATN = new antlr.ATNDeserializer().deserialize(prompt_plus_plus_parser._serializedATN);
        }

        return prompt_plus_plus_parser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(prompt_plus_plus_parser.literalNames, prompt_plus_plus_parser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return prompt_plus_plus_parser.vocabulary;
    }

    private static readonly decisionsToDFA = prompt_plus_plus_parser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class Prompt_plus_plusContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.EOF, 0)!;
    }
    public named_prompt_template_definition(): Named_prompt_template_definitionContext[];
    public named_prompt_template_definition(i: number): Named_prompt_template_definitionContext | null;
    public named_prompt_template_definition(i?: number): Named_prompt_template_definitionContext[] | Named_prompt_template_definitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Named_prompt_template_definitionContext);
        }

        return this.getRuleContext(i, Named_prompt_template_definitionContext);
    }
    public prompt_template(): Prompt_templateContext | null {
        return this.getRuleContext(0, Prompt_templateContext);
    }
    public override get ruleIndex(): number {
        return prompt_plus_plus_parser.RULE_prompt_plus_plus;
    }
    public override enterRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.enterPrompt_plus_plus) {
             listener.enterPrompt_plus_plus(this);
        }
    }
    public override exitRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.exitPrompt_plus_plus) {
             listener.exitPrompt_plus_plus(this);
        }
    }
    public override accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result | null {
        if (visitor.visitPrompt_plus_plus) {
            return visitor.visitPrompt_plus_plus(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Prompt_templateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Natural_language_text_fragment(): antlr.TerminalNode[];
    public Natural_language_text_fragment(i: number): antlr.TerminalNode | null;
    public Natural_language_text_fragment(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(prompt_plus_plus_parser.Natural_language_text_fragment);
    	} else {
    		return this.getToken(prompt_plus_plus_parser.Natural_language_text_fragment, i);
    	}
    }
    public prompt_template_substitution(): Prompt_template_substitutionContext[];
    public prompt_template_substitution(i: number): Prompt_template_substitutionContext | null;
    public prompt_template_substitution(i?: number): Prompt_template_substitutionContext[] | Prompt_template_substitutionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Prompt_template_substitutionContext);
        }

        return this.getRuleContext(i, Prompt_template_substitutionContext);
    }
    public override get ruleIndex(): number {
        return prompt_plus_plus_parser.RULE_prompt_template;
    }
    public override enterRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.enterPrompt_template) {
             listener.enterPrompt_template(this);
        }
    }
    public override exitRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.exitPrompt_template) {
             listener.exitPrompt_template(this);
        }
    }
    public override accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result | null {
        if (visitor.visitPrompt_template) {
            return visitor.visitPrompt_template(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Prompt_template_substitutionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Prompt_template_substitution_operator(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Prompt_template_substitution_operator, 0)!;
    }
    public Template_identifier(): antlr.TerminalNode[];
    public Template_identifier(i: number): antlr.TerminalNode | null;
    public Template_identifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(prompt_plus_plus_parser.Template_identifier);
    	} else {
    		return this.getToken(prompt_plus_plus_parser.Template_identifier, i);
    	}
    }
    public Arg_list_begin(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Arg_list_begin, 0)!;
    }
    public Arg_list_end(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Arg_list_end, 0)!;
    }
    public Prompt_template_substitution_resolution_operator(): antlr.TerminalNode[];
    public Prompt_template_substitution_resolution_operator(i: number): antlr.TerminalNode | null;
    public Prompt_template_substitution_resolution_operator(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(prompt_plus_plus_parser.Prompt_template_substitution_resolution_operator);
    	} else {
    		return this.getToken(prompt_plus_plus_parser.Prompt_template_substitution_resolution_operator, i);
    	}
    }
    public prompt_template_substitution_arg_list(): Prompt_template_substitution_arg_listContext | null {
        return this.getRuleContext(0, Prompt_template_substitution_arg_listContext);
    }
    public override get ruleIndex(): number {
        return prompt_plus_plus_parser.RULE_prompt_template_substitution;
    }
    public override enterRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.enterPrompt_template_substitution) {
             listener.enterPrompt_template_substitution(this);
        }
    }
    public override exitRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.exitPrompt_template_substitution) {
             listener.exitPrompt_template_substitution(this);
        }
    }
    public override accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result | null {
        if (visitor.visitPrompt_template_substitution) {
            return visitor.visitPrompt_template_substitution(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Prompt_template_substitution_arg_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public prompt_template_substitution_actual_argument(): Prompt_template_substitution_actual_argumentContext {
        return this.getRuleContext(0, Prompt_template_substitution_actual_argumentContext)!;
    }
    public Arg_list_separator(): antlr.TerminalNode[];
    public Arg_list_separator(i: number): antlr.TerminalNode | null;
    public Arg_list_separator(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(prompt_plus_plus_parser.Arg_list_separator);
    	} else {
    		return this.getToken(prompt_plus_plus_parser.Arg_list_separator, i);
    	}
    }
    public prompt_template_substitution_arg_list(): Prompt_template_substitution_arg_listContext[];
    public prompt_template_substitution_arg_list(i: number): Prompt_template_substitution_arg_listContext | null;
    public prompt_template_substitution_arg_list(i?: number): Prompt_template_substitution_arg_listContext[] | Prompt_template_substitution_arg_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Prompt_template_substitution_arg_listContext);
        }

        return this.getRuleContext(i, Prompt_template_substitution_arg_listContext);
    }
    public override get ruleIndex(): number {
        return prompt_plus_plus_parser.RULE_prompt_template_substitution_arg_list;
    }
    public override enterRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.enterPrompt_template_substitution_arg_list) {
             listener.enterPrompt_template_substitution_arg_list(this);
        }
    }
    public override exitRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.exitPrompt_template_substitution_arg_list) {
             listener.exitPrompt_template_substitution_arg_list(this);
        }
    }
    public override accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result | null {
        if (visitor.visitPrompt_template_substitution_arg_list) {
            return visitor.visitPrompt_template_substitution_arg_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Prompt_template_substitution_actual_argumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Natural_language_text_fragment(): antlr.TerminalNode | null {
        return this.getToken(prompt_plus_plus_parser.Natural_language_text_fragment, 0);
    }
    public prompt_template_substitution(): Prompt_template_substitutionContext | null {
        return this.getRuleContext(0, Prompt_template_substitutionContext);
    }
    public override get ruleIndex(): number {
        return prompt_plus_plus_parser.RULE_prompt_template_substitution_actual_argument;
    }
    public override enterRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.enterPrompt_template_substitution_actual_argument) {
             listener.enterPrompt_template_substitution_actual_argument(this);
        }
    }
    public override exitRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.exitPrompt_template_substitution_actual_argument) {
             listener.exitPrompt_template_substitution_actual_argument(this);
        }
    }
    public override accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result | null {
        if (visitor.visitPrompt_template_substitution_actual_argument) {
            return visitor.visitPrompt_template_substitution_actual_argument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Named_prompt_template_definitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Prompt_template_definition_operator(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Prompt_template_definition_operator, 0)!;
    }
    public Template_identifier(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Template_identifier, 0)!;
    }
    public Arg_list_begin(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Arg_list_begin, 0)!;
    }
    public Arg_list_end(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Arg_list_end, 0)!;
    }
    public prompt_template(): Prompt_templateContext {
        return this.getRuleContext(0, Prompt_templateContext)!;
    }
    public Prompt_template_definition_body_end(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Prompt_template_definition_body_end, 0)!;
    }
    public prompt_template_definition_arg_list(): Prompt_template_definition_arg_listContext | null {
        return this.getRuleContext(0, Prompt_template_definition_arg_listContext);
    }
    public override get ruleIndex(): number {
        return prompt_plus_plus_parser.RULE_named_prompt_template_definition;
    }
    public override enterRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.enterNamed_prompt_template_definition) {
             listener.enterNamed_prompt_template_definition(this);
        }
    }
    public override exitRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.exitNamed_prompt_template_definition) {
             listener.exitNamed_prompt_template_definition(this);
        }
    }
    public override accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result | null {
        if (visitor.visitNamed_prompt_template_definition) {
            return visitor.visitNamed_prompt_template_definition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Prompt_template_definition_arg_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Template_identifier(): antlr.TerminalNode {
        return this.getToken(prompt_plus_plus_parser.Template_identifier, 0)!;
    }
    public Arg_list_separator(): antlr.TerminalNode[];
    public Arg_list_separator(i: number): antlr.TerminalNode | null;
    public Arg_list_separator(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(prompt_plus_plus_parser.Arg_list_separator);
    	} else {
    		return this.getToken(prompt_plus_plus_parser.Arg_list_separator, i);
    	}
    }
    public prompt_template_definition_arg_list(): Prompt_template_definition_arg_listContext[];
    public prompt_template_definition_arg_list(i: number): Prompt_template_definition_arg_listContext | null;
    public prompt_template_definition_arg_list(i?: number): Prompt_template_definition_arg_listContext[] | Prompt_template_definition_arg_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Prompt_template_definition_arg_listContext);
        }

        return this.getRuleContext(i, Prompt_template_definition_arg_listContext);
    }
    public override get ruleIndex(): number {
        return prompt_plus_plus_parser.RULE_prompt_template_definition_arg_list;
    }
    public override enterRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.enterPrompt_template_definition_arg_list) {
             listener.enterPrompt_template_definition_arg_list(this);
        }
    }
    public override exitRule(listener: prompt_plus_plus_parserListener): void {
        if(listener.exitPrompt_template_definition_arg_list) {
             listener.exitPrompt_template_definition_arg_list(this);
        }
    }
    public override accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result | null {
        if (visitor.visitPrompt_template_definition_arg_list) {
            return visitor.visitPrompt_template_definition_arg_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

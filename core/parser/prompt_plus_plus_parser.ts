// Generated from core/grammar/prompt_plus_plus_parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { prompt_plus_plus_parserListener } from "./prompt_plus_plus_parserListener";
import { prompt_plus_plus_parserVisitor } from "./prompt_plus_plus_parserVisitor";


export class prompt_plus_plus_parser extends Parser {
	public static readonly Natural_language_text_fragment = 1;
	public static readonly Prompt_template_substitution_operator = 2;
	public static readonly Prompt_template_definition_operator = 3;
	public static readonly Template_identifier = 4;
	public static readonly Prompt_template_substitution_resolution_operator = 5;
	public static readonly Arg_list_begin = 6;
	public static readonly Prompt_template_substitution_template_ws = 7;
	public static readonly Prompt_template_substitution_arg_list_natural_language_text_fragment = 8;
	public static readonly Arg_list_end = 9;
	public static readonly Arg_list_separator = 10;
	public static readonly Prompt_template_definition_body_end = 11;
	public static readonly RULE_prompt_plus_plus = 0;
	public static readonly RULE_prompt_template = 1;
	public static readonly RULE_prompt_template_substitution = 2;
	public static readonly RULE_prompt_template_substitution_arg_list = 3;
	public static readonly RULE_prompt_template_substitution_actual_argument = 4;
	public static readonly RULE_named_prompt_template_definition = 5;
	public static readonly RULE_prompt_template_definition_arg_list = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prompt_plus_plus", "prompt_template", "prompt_template_substitution", 
		"prompt_template_substitution_arg_list", "prompt_template_substitution_actual_argument", 
		"named_prompt_template_definition", "prompt_template_definition_arg_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Natural_language_text_fragment", "Prompt_template_substitution_operator", 
		"Prompt_template_definition_operator", "Template_identifier", "Prompt_template_substitution_resolution_operator", 
		"Arg_list_begin", "Prompt_template_substitution_template_ws", "Prompt_template_substitution_arg_list_natural_language_text_fragment", 
		"Arg_list_end", "Arg_list_separator", "Prompt_template_definition_body_end",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(prompt_plus_plus_parser._LITERAL_NAMES, prompt_plus_plus_parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return prompt_plus_plus_parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "prompt_plus_plus_parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return prompt_plus_plus_parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return prompt_plus_plus_parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(prompt_plus_plus_parser._ATN, this);
	}
	// @RuleVersion(0)
	public prompt_plus_plus(): Prompt_plus_plusContext {
		let _localctx: Prompt_plus_plusContext = new Prompt_plus_plusContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, prompt_plus_plus_parser.RULE_prompt_plus_plus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === prompt_plus_plus_parser.Prompt_template_definition_operator) {
				{
				{
				this.state = 14;
				this.named_prompt_template_definition();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === prompt_plus_plus_parser.Natural_language_text_fragment || _la === prompt_plus_plus_parser.Prompt_template_substitution_operator) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prompt_template(): Prompt_templateContext {
		let _localctx: Prompt_templateContext = new Prompt_templateContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, prompt_plus_plus_parser.RULE_prompt_template);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 27;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
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
					throw new NoViableAltException(this);
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === prompt_plus_plus_parser.Natural_language_text_fragment || _la === prompt_plus_plus_parser.Prompt_template_substitution_operator);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prompt_template_substitution(): Prompt_template_substitutionContext {
		let _localctx: Prompt_template_substitutionContext = new Prompt_template_substitutionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, prompt_plus_plus_parser.RULE_prompt_template_substitution);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.match(prompt_plus_plus_parser.Prompt_template_substitution_operator);
			this.state = 36;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
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
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 39;
			this.match(prompt_plus_plus_parser.Template_identifier);
			this.state = 40;
			this.match(prompt_plus_plus_parser.Arg_list_begin);
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === prompt_plus_plus_parser.Prompt_template_substitution_operator || _la === prompt_plus_plus_parser.Prompt_template_substitution_arg_list_natural_language_text_fragment) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prompt_template_substitution_arg_list(): Prompt_template_substitution_arg_listContext {
		let _localctx: Prompt_template_substitution_arg_listContext = new Prompt_template_substitution_arg_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, prompt_plus_plus_parser.RULE_prompt_template_substitution_arg_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.prompt_template_substitution_actual_argument();
			this.state = 51;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
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
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prompt_template_substitution_actual_argument(): Prompt_template_substitution_actual_argumentContext {
		let _localctx: Prompt_template_substitution_actual_argumentContext = new Prompt_template_substitution_actual_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, prompt_plus_plus_parser.RULE_prompt_template_substitution_actual_argument);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case prompt_plus_plus_parser.Prompt_template_substitution_arg_list_natural_language_text_fragment:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.match(prompt_plus_plus_parser.Prompt_template_substitution_arg_list_natural_language_text_fragment);
				}
				break;
			case prompt_plus_plus_parser.Prompt_template_substitution_operator:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.prompt_template_substitution();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public named_prompt_template_definition(): Named_prompt_template_definitionContext {
		let _localctx: Named_prompt_template_definitionContext = new Named_prompt_template_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, prompt_plus_plus_parser.RULE_named_prompt_template_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(prompt_plus_plus_parser.Prompt_template_definition_operator);
			this.state = 59;
			this.match(prompt_plus_plus_parser.Template_identifier);
			this.state = 60;
			this.match(prompt_plus_plus_parser.Arg_list_begin);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === prompt_plus_plus_parser.Template_identifier) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prompt_template_definition_arg_list(): Prompt_template_definition_arg_listContext {
		let _localctx: Prompt_template_definition_arg_listContext = new Prompt_template_definition_arg_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, prompt_plus_plus_parser.RULE_prompt_template_definition_arg_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(prompt_plus_plus_parser.Template_identifier);
			this.state = 73;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
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
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\rO\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03\x02" +
		"\x05\x02\x18\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x06\x03\x1E\n\x03\r" +
		"\x03\x0E\x03\x1F\x03\x04\x03\x04\x03\x04\x07\x04%\n\x04\f\x04\x0E\x04" +
		"(\v\x04\x03\x04\x03\x04\x03\x04\x05\x04-\n\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x07\x054\n\x05\f\x05\x0E\x057\v\x05\x03\x06\x03\x06\x05" +
		"\x06;\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07A\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\bJ\n\b\f\b\x0E\bM\v\b\x03\b" +
		"\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x02" +
		"\x02Q\x02\x13\x03\x02\x02\x02\x04\x1D\x03\x02\x02\x02\x06!\x03\x02\x02" +
		"\x02\b0\x03\x02\x02\x02\n:\x03\x02\x02\x02\f<\x03\x02\x02\x02\x0EF\x03" +
		"\x02\x02\x02\x10\x12\x05\f\x07\x02\x11\x10\x03\x02\x02\x02\x12\x15\x03" +
		"\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x17\x03" +
		"\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x18\x05\x04\x03\x02\x17\x16\x03" +
		"\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A\x07" +
		"\x02\x02\x03\x1A\x03\x03\x02\x02\x02\x1B\x1E\x07\x03\x02\x02\x1C\x1E\x05" +
		"\x06\x04\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E\x1F\x03" +
		"\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x05\x03\x02" +
		"\x02\x02!&\x07\x04\x02\x02\"#\x07\x06\x02\x02#%\x07\x07\x02\x02$\"\x03" +
		"\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'" +
		")\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07\x06\x02\x02*,\x07\b\x02\x02" +
		"+-\x05\b\x05\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x03\x02\x02\x02" +
		"./\x07\v\x02\x02/\x07\x03\x02\x02\x0205\x05\n\x06\x0212\x07\f\x02\x02" +
		"24\x05\b\x05\x0231\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x02" +
		"56\x03\x02\x02\x026\t\x03\x02\x02\x0275\x03\x02\x02\x028;\x07\n\x02\x02" +
		"9;\x05\x06\x04\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;\v\x03\x02\x02" +
		"\x02<=\x07\x05\x02\x02=>\x07\x06\x02\x02>@\x07\b\x02\x02?A\x05\x0E\b\x02" +
		"@?\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x07\v\x02\x02" +
		"CD\x05\x04\x03\x02DE\x07\r\x02\x02E\r\x03\x02\x02\x02FK\x07\x06\x02\x02" +
		"GH\x07\f\x02\x02HJ\x05\x0E\b\x02IG\x03\x02\x02\x02JM\x03\x02\x02\x02K" +
		"I\x03\x02\x02\x02KL\x03\x02\x02\x02L\x0F\x03\x02\x02\x02MK\x03\x02\x02" +
		"\x02\f\x13\x17\x1D\x1F&,5:@K";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!prompt_plus_plus_parser.__ATN) {
			prompt_plus_plus_parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(prompt_plus_plus_parser._serializedATN));
		}

		return prompt_plus_plus_parser.__ATN;
	}

}

export class Prompt_plus_plusContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(prompt_plus_plus_parser.EOF, 0); }
	public named_prompt_template_definition(): Named_prompt_template_definitionContext[];
	public named_prompt_template_definition(i: number): Named_prompt_template_definitionContext;
	public named_prompt_template_definition(i?: number): Named_prompt_template_definitionContext | Named_prompt_template_definitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Named_prompt_template_definitionContext);
		} else {
			return this.getRuleContext(i, Named_prompt_template_definitionContext);
		}
	}
	public prompt_template(): Prompt_templateContext | undefined {
		return this.tryGetRuleContext(0, Prompt_templateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prompt_plus_plus_parser.RULE_prompt_plus_plus; }
	// @Override
	public enterRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.enterPrompt_plus_plus) {
			listener.enterPrompt_plus_plus(this);
		}
	}
	// @Override
	public exitRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.exitPrompt_plus_plus) {
			listener.exitPrompt_plus_plus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result {
		if (visitor.visitPrompt_plus_plus) {
			return visitor.visitPrompt_plus_plus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prompt_templateContext extends ParserRuleContext {
	public Natural_language_text_fragment(): TerminalNode[];
	public Natural_language_text_fragment(i: number): TerminalNode;
	public Natural_language_text_fragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(prompt_plus_plus_parser.Natural_language_text_fragment);
		} else {
			return this.getToken(prompt_plus_plus_parser.Natural_language_text_fragment, i);
		}
	}
	public prompt_template_substitution(): Prompt_template_substitutionContext[];
	public prompt_template_substitution(i: number): Prompt_template_substitutionContext;
	public prompt_template_substitution(i?: number): Prompt_template_substitutionContext | Prompt_template_substitutionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Prompt_template_substitutionContext);
		} else {
			return this.getRuleContext(i, Prompt_template_substitutionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prompt_plus_plus_parser.RULE_prompt_template; }
	// @Override
	public enterRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.enterPrompt_template) {
			listener.enterPrompt_template(this);
		}
	}
	// @Override
	public exitRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.exitPrompt_template) {
			listener.exitPrompt_template(this);
		}
	}
	// @Override
	public accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result {
		if (visitor.visitPrompt_template) {
			return visitor.visitPrompt_template(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prompt_template_substitutionContext extends ParserRuleContext {
	public Prompt_template_substitution_operator(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Prompt_template_substitution_operator, 0); }
	public Template_identifier(): TerminalNode[];
	public Template_identifier(i: number): TerminalNode;
	public Template_identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(prompt_plus_plus_parser.Template_identifier);
		} else {
			return this.getToken(prompt_plus_plus_parser.Template_identifier, i);
		}
	}
	public Arg_list_begin(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Arg_list_begin, 0); }
	public Arg_list_end(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Arg_list_end, 0); }
	public Prompt_template_substitution_resolution_operator(): TerminalNode[];
	public Prompt_template_substitution_resolution_operator(i: number): TerminalNode;
	public Prompt_template_substitution_resolution_operator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(prompt_plus_plus_parser.Prompt_template_substitution_resolution_operator);
		} else {
			return this.getToken(prompt_plus_plus_parser.Prompt_template_substitution_resolution_operator, i);
		}
	}
	public prompt_template_substitution_arg_list(): Prompt_template_substitution_arg_listContext | undefined {
		return this.tryGetRuleContext(0, Prompt_template_substitution_arg_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prompt_plus_plus_parser.RULE_prompt_template_substitution; }
	// @Override
	public enterRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.enterPrompt_template_substitution) {
			listener.enterPrompt_template_substitution(this);
		}
	}
	// @Override
	public exitRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.exitPrompt_template_substitution) {
			listener.exitPrompt_template_substitution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result {
		if (visitor.visitPrompt_template_substitution) {
			return visitor.visitPrompt_template_substitution(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prompt_template_substitution_arg_listContext extends ParserRuleContext {
	public prompt_template_substitution_actual_argument(): Prompt_template_substitution_actual_argumentContext {
		return this.getRuleContext(0, Prompt_template_substitution_actual_argumentContext);
	}
	public Arg_list_separator(): TerminalNode[];
	public Arg_list_separator(i: number): TerminalNode;
	public Arg_list_separator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(prompt_plus_plus_parser.Arg_list_separator);
		} else {
			return this.getToken(prompt_plus_plus_parser.Arg_list_separator, i);
		}
	}
	public prompt_template_substitution_arg_list(): Prompt_template_substitution_arg_listContext[];
	public prompt_template_substitution_arg_list(i: number): Prompt_template_substitution_arg_listContext;
	public prompt_template_substitution_arg_list(i?: number): Prompt_template_substitution_arg_listContext | Prompt_template_substitution_arg_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Prompt_template_substitution_arg_listContext);
		} else {
			return this.getRuleContext(i, Prompt_template_substitution_arg_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prompt_plus_plus_parser.RULE_prompt_template_substitution_arg_list; }
	// @Override
	public enterRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.enterPrompt_template_substitution_arg_list) {
			listener.enterPrompt_template_substitution_arg_list(this);
		}
	}
	// @Override
	public exitRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.exitPrompt_template_substitution_arg_list) {
			listener.exitPrompt_template_substitution_arg_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result {
		if (visitor.visitPrompt_template_substitution_arg_list) {
			return visitor.visitPrompt_template_substitution_arg_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prompt_template_substitution_actual_argumentContext extends ParserRuleContext {
	public Prompt_template_substitution_arg_list_natural_language_text_fragment(): TerminalNode | undefined { return this.tryGetToken(prompt_plus_plus_parser.Prompt_template_substitution_arg_list_natural_language_text_fragment, 0); }
	public prompt_template_substitution(): Prompt_template_substitutionContext | undefined {
		return this.tryGetRuleContext(0, Prompt_template_substitutionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prompt_plus_plus_parser.RULE_prompt_template_substitution_actual_argument; }
	// @Override
	public enterRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.enterPrompt_template_substitution_actual_argument) {
			listener.enterPrompt_template_substitution_actual_argument(this);
		}
	}
	// @Override
	public exitRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.exitPrompt_template_substitution_actual_argument) {
			listener.exitPrompt_template_substitution_actual_argument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result {
		if (visitor.visitPrompt_template_substitution_actual_argument) {
			return visitor.visitPrompt_template_substitution_actual_argument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Named_prompt_template_definitionContext extends ParserRuleContext {
	public Prompt_template_definition_operator(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Prompt_template_definition_operator, 0); }
	public Template_identifier(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Template_identifier, 0); }
	public Arg_list_begin(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Arg_list_begin, 0); }
	public Arg_list_end(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Arg_list_end, 0); }
	public prompt_template(): Prompt_templateContext {
		return this.getRuleContext(0, Prompt_templateContext);
	}
	public Prompt_template_definition_body_end(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Prompt_template_definition_body_end, 0); }
	public prompt_template_definition_arg_list(): Prompt_template_definition_arg_listContext | undefined {
		return this.tryGetRuleContext(0, Prompt_template_definition_arg_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prompt_plus_plus_parser.RULE_named_prompt_template_definition; }
	// @Override
	public enterRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.enterNamed_prompt_template_definition) {
			listener.enterNamed_prompt_template_definition(this);
		}
	}
	// @Override
	public exitRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.exitNamed_prompt_template_definition) {
			listener.exitNamed_prompt_template_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result {
		if (visitor.visitNamed_prompt_template_definition) {
			return visitor.visitNamed_prompt_template_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prompt_template_definition_arg_listContext extends ParserRuleContext {
	public Template_identifier(): TerminalNode { return this.getToken(prompt_plus_plus_parser.Template_identifier, 0); }
	public Arg_list_separator(): TerminalNode[];
	public Arg_list_separator(i: number): TerminalNode;
	public Arg_list_separator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(prompt_plus_plus_parser.Arg_list_separator);
		} else {
			return this.getToken(prompt_plus_plus_parser.Arg_list_separator, i);
		}
	}
	public prompt_template_definition_arg_list(): Prompt_template_definition_arg_listContext[];
	public prompt_template_definition_arg_list(i: number): Prompt_template_definition_arg_listContext;
	public prompt_template_definition_arg_list(i?: number): Prompt_template_definition_arg_listContext | Prompt_template_definition_arg_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Prompt_template_definition_arg_listContext);
		} else {
			return this.getRuleContext(i, Prompt_template_definition_arg_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prompt_plus_plus_parser.RULE_prompt_template_definition_arg_list; }
	// @Override
	public enterRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.enterPrompt_template_definition_arg_list) {
			listener.enterPrompt_template_definition_arg_list(this);
		}
	}
	// @Override
	public exitRule(listener: prompt_plus_plus_parserListener): void {
		if (listener.exitPrompt_template_definition_arg_list) {
			listener.exitPrompt_template_definition_arg_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: prompt_plus_plus_parserVisitor<Result>): Result {
		if (visitor.visitPrompt_template_definition_arg_list) {
			return visitor.visitPrompt_template_definition_arg_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



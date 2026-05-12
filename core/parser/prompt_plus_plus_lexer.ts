// Generated from core/grammar/prompt_plus_plus_lexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class prompt_plus_plus_lexer extends Lexer {
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
	public static readonly PROMPT_TEMPLATE_SUBSTITUTION = 1;
	public static readonly PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST = 2;
	public static readonly PROMPT_TEMPLATE_DEFINITION = 3;
	public static readonly PROMPT_TEMPLATE_DEFINITION_BODY = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "PROMPT_TEMPLATE_SUBSTITUTION", "PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST", 
		"PROMPT_TEMPLATE_DEFINITION", "PROMPT_TEMPLATE_DEFINITION_BODY",
	];

	public static readonly ruleNames: string[] = [
		"Fragment_template_identifier", "Fragment_arg_list_begin", "Fragment_arg_list_end", 
		"Fragment_arg_list_separator", "Fragment_substitution_operator", "Fragment_definition_operator", 
		"Natural_language_text_fragment", "Prompt_template_substitution_operator", 
		"Prompt_template_definition_operator", "Template_identifier", "Prompt_template_substitution_resolution_operator", 
		"Arg_list_begin", "Prompt_template_substitution_template_ws", "Prompt_template_substitution_arg_list_natural_language_text_fragment", 
		"Arg_list_end", "Arg_list_separator", "Prompt_template_substitution_arg_list_substitution_operator", 
		"Prompt_template_definition_template_identifier", "Prompt_template_definition_arg_list_begin", 
		"Prompt_template_definition_arg_list_end", "Prompt_template_definition_arg_list_separator", 
		"Prompt_template_definition_natural_language_text_fragment", "Prompt_template_definition_prompt_template_substitution_operator", 
		"Prompt_template_definition_body_end",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(prompt_plus_plus_lexer._LITERAL_NAMES, prompt_plus_plus_lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return prompt_plus_plus_lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(prompt_plus_plus_lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "prompt_plus_plus_lexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return prompt_plus_plus_lexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return prompt_plus_plus_lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return prompt_plus_plus_lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return prompt_plus_plus_lexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r\x96\b\x01\b" +
		"\x01\b\x01\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05" +
		"\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v" +
		"\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04" +
		"\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04" +
		"\x16\t\x16\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x03\x02\x06\x029" +
		"\n\x02\r\x02\x0E\x02:\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x06\bH\n\b\r\b\x0E\bI\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\x0E\x06\x0E]\n\x0E\r\x0E\x0E\x0E^\x03\x0F\x06\x0Fb" +
		"\n\x0F\r\x0F\x0E\x0Fc\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x06\x17" +
		"\x86\n\x17\r\x17\x0E\x17\x87\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x02\x02\x02" +
		"\x1A\x07\x02\x02\t\x02\x02\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02" +
		"\x13\x02\x03\x15\x02\x04\x17\x02\x05\x19\x02\x06\x1B\x02\x07\x1D\x02\b" +
		"\x1F\x02\t!\x02\n#\x02\v%\x02\f\'\x02\x02)\x02\x02+\x02\x02-\x02\x02/" +
		"\x02\x021\x02\x023\x02\x025\x02\r\x07\x02\x03\x04\x05\x06\b\v\x02\v\f" +
		"\x0F\x0F\"\"%%..<<>>@@bb\x04\x02%%bb\x05\x02\v\f\x0F\x0F\"\"\b\x02%%." +
		".<<>>@@bb\x03\x02\f\f\x05\x02\f\f%%bb\x02\x91\x02\x13\x03\x02\x02\x02" +
		"\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02" +
		"\x03\x1B\x03\x02\x02\x02\x03\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02" +
		"\x04!\x03\x02\x02\x02\x04#\x03\x02\x02\x02\x04%\x03\x02\x02\x02\x04\'" +
		"\x03\x02\x02\x02\x05)\x03\x02\x02\x02\x05+\x03\x02\x02\x02\x05-\x03\x02" +
		"\x02\x02\x05/\x03\x02\x02\x02\x061\x03\x02\x02\x02\x063\x03\x02\x02\x02" +
		"\x065\x03\x02\x02\x02\x078\x03\x02\x02\x02\t<\x03\x02\x02\x02\v>\x03\x02" +
		"\x02\x02\r@\x03\x02\x02\x02\x0FB\x03\x02\x02\x02\x11D\x03\x02\x02\x02" +
		"\x13G\x03\x02\x02\x02\x15K\x03\x02\x02\x02\x17O\x03\x02\x02\x02\x19S\x03" +
		"\x02\x02\x02\x1BU\x03\x02\x02\x02\x1DW\x03\x02\x02\x02\x1F\\\x03\x02\x02" +
		"\x02!a\x03\x02\x02\x02#e\x03\x02\x02\x02%j\x03\x02\x02\x02\'l\x03\x02" +
		"\x02\x02)q\x03\x02\x02\x02+u\x03\x02\x02\x02-y\x03\x02\x02\x02/~\x03\x02" +
		"\x02\x021\x85\x03\x02\x02\x023\x8B\x03\x02\x02\x025\x90\x03\x02\x02\x02" +
		"79\n\x02\x02\x0287\x03\x02\x02\x029:\x03\x02\x02\x02:8\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;\b\x03\x02\x02\x02<=\x07>\x02\x02=\n\x03\x02\x02\x02" +
		">?\x07@\x02\x02?\f\x03\x02\x02\x02@A\x07.\x02\x02A\x0E\x03\x02\x02\x02" +
		"BC\x07b\x02\x02C\x10\x03\x02\x02\x02DE\x07%\x02\x02E\x12\x03\x02\x02\x02" +
		"FH\n\x03\x02\x02GF\x03\x02\x02\x02HI\x03\x02\x02\x02IG\x03\x02\x02\x02" +
		"IJ\x03\x02\x02\x02J\x14\x03\x02\x02\x02KL\x05\x0F\x06\x02LM\x03\x02\x02" +
		"\x02MN\b\t\x02\x02N\x16\x03\x02\x02\x02OP\x05\x11\x07\x02PQ\x03\x02\x02" +
		"\x02QR\b\n\x03\x02R\x18\x03\x02\x02\x02ST\x05\x07\x02\x02T\x1A\x03\x02" +
		"\x02\x02UV\x07<\x02\x02V\x1C\x03\x02\x02\x02WX\x05\t\x03\x02XY\x03\x02" +
		"\x02\x02YZ\b\r\x04\x02Z\x1E\x03\x02\x02\x02[]\t\x04\x02\x02\\[\x03\x02" +
		"\x02\x02]^\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_ \x03" +
		"\x02\x02\x02`b\n\x05\x02\x02a`\x03\x02\x02\x02bc\x03\x02\x02\x02ca\x03" +
		"\x02\x02\x02cd\x03\x02\x02\x02d\"\x03\x02\x02\x02ef\x05\v\x04\x02fg\x03" +
		"\x02\x02\x02gh\b\x10\x05\x02hi\b\x10\x05\x02i$\x03\x02\x02\x02jk\x05\r" +
		"\x05\x02k&\x03\x02\x02\x02lm\x05\x0F\x06\x02mn\x03\x02\x02\x02no\b\x12" +
		"\x02\x02op\b\x12\x06\x02p(\x03\x02\x02\x02qr\x05\x07\x02\x02rs\x03\x02" +
		"\x02\x02st\b\x13\x07\x02t*\x03\x02\x02\x02uv\x05\t\x03\x02vw\x03\x02\x02" +
		"\x02wx\b\x14\b\x02x,\x03\x02\x02\x02yz\x05\v\x04\x02z{\x03\x02\x02\x02" +
		"{|\b\x15\t\x02|}\b\x15\n\x02}.\x03\x02\x02\x02~\x7F\x05\r\x05\x02\x7F" +
		"\x80\x03\x02\x02\x02\x80\x81\b\x16\v\x02\x810\x03\x02\x02\x02\x82\x83" +
		"\x07\f\x02\x02\x83\x86\n\x06\x02\x02\x84\x86\n\x07\x02\x02\x85\x82\x03" +
		"\x02\x02\x02\x85\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x85\x03" +
		"\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\b" +
		"\x17\f\x02\x8A2\x03\x02\x02\x02\x8B\x8C\x05\x0F\x06\x02\x8C\x8D\x03\x02" +
		"\x02\x02\x8D\x8E\b\x18\x02\x02\x8E\x8F\b\x18\x06\x02\x8F4\x03\x02\x02" +
		"\x02\x90\x91\x07\f\x02\x02\x91\x92\x07\f\x02\x02\x92\x93\x03\x02\x02\x02" +
		"\x93\x94\b\x19\x05\x02\x94\x95\b\x19\x05\x02\x956\x03\x02\x02\x02\r\x02" +
		"\x03\x04\x05\x06:I^c\x85\x87\r\x07\x03\x02\x07\x05\x02\x07\x04\x02\x06" +
		"\x02\x02\t\x04\x02\t\x06\x02\t\b\x02\x07\x06\x02\t\v\x02\t\f\x02\t\x03" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!prompt_plus_plus_lexer.__ATN) {
			prompt_plus_plus_lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(prompt_plus_plus_lexer._serializedATN));
		}

		return prompt_plus_plus_lexer.__ATN;
	}

}


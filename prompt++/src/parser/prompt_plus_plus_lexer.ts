
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class prompt_plus_plus_lexer extends antlr.Lexer {
    public static readonly Natural_language_text_fragment = 1;
    public static readonly Prompt_template_substitution_operator = 2;
    public static readonly Prompt_template_definition_operator = 3;
    public static readonly Template_identifier = 4;
    public static readonly Prompt_template_substitution_resolution_operator = 5;
    public static readonly Arg_list_begin = 6;
    public static readonly Arg_list_end = 7;
    public static readonly Arg_list_separator = 8;
    public static readonly Prompt_template_definition_body_end = 9;
    public static readonly PROMPT_TEMPLATE_SUBSTITUTION = 1;
    public static readonly PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST = 2;
    public static readonly PROMPT_TEMPLATE_DEFINITION = 3;
    public static readonly PROMPT_TEMPLATE_DEFINITION_BODY = 4;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, "'\\n\\n'"
    ];

    public static readonly symbolicNames = [
        null, "Natural_language_text_fragment", "Prompt_template_substitution_operator", 
        "Prompt_template_definition_operator", "Template_identifier", "Prompt_template_substitution_resolution_operator", 
        "Arg_list_begin", "Arg_list_end", "Arg_list_separator", "Prompt_template_definition_body_end"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "PROMPT_TEMPLATE_SUBSTITUTION", "PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST", 
        "PROMPT_TEMPLATE_DEFINITION", "PROMPT_TEMPLATE_DEFINITION_BODY",
    ];

    public static readonly ruleNames = [
        "Fragment_substitution_operator", "Fragment_definition_operator", 
        "Fragment_template_identifier", "Fragment_arg_list_begin", "Fragment_arg_list_end", 
        "Fragment_arg_list_separator", "Fragment_resolution_operator", "Natural_language_text_fragment", 
        "Prompt_template_substitution_operator", "Prompt_template_definition_operator", 
        "Template_identifier", "Prompt_template_substitution_resolution_operator", 
        "Arg_list_begin", "Anything_else", "Prompt_template_substitution_arg_list_natural_language_text_fragment", 
        "Arg_list_end", "Arg_list_separator", "Prompt_template_substitution_arg_list_substitution_operator", 
        "Prompt_template_definition_template_identifier", "Prompt_template_definition_arg_list_begin", 
        "Prompt_template_definition_arg_list_end", "Prompt_template_definition_arg_list_separator", 
        "Prompt_template_definition_natural_language_text_fragment", "Prompt_template_definition_prompt_template_substitution_operator", 
        "Prompt_template_definition_body_end",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, prompt_plus_plus_lexer._ATN, prompt_plus_plus_lexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "prompt_plus_plus_lexer.g4"; }

    public get literalNames(): (string | null)[] { return prompt_plus_plus_lexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return prompt_plus_plus_lexer.symbolicNames; }
    public get ruleNames(): string[] { return prompt_plus_plus_lexer.ruleNames; }

    public get serializedATN(): number[] { return prompt_plus_plus_lexer._serializedATN; }

    public get channelNames(): string[] { return prompt_plus_plus_lexer.channelNames; }

    public get modeNames(): string[] { return prompt_plus_plus_lexer.modeNames; }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 13:
            return this.Anything_else_sempred(localContext, predIndex);
        case 22:
            return this.Prompt_template_definition_natural_language_text_fragment_sempred(localContext, predIndex);
        }
        return true;
    }
    private Anything_else_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return true;
        }
        return true;
    }
    private Prompt_template_definition_natural_language_text_fragment_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return  this.inputStream.LA(1) !== '\n'.charCodeAt(0) || this.inputStream.LA(2) === '\n'.charCodeAt(0) ;
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,0,9,191,6,-1,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,
        3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,
        7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,
        2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
        7,24,1,0,1,0,1,1,1,1,1,2,1,2,5,2,62,8,2,10,2,12,2,65,9,2,1,3,1,3,
        1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,4,7,
        84,8,7,11,7,12,7,85,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,
        11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,
        14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,4,
        14,124,8,14,11,14,12,14,125,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,
        16,1,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,
        19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,
        22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
        22,4,22,175,8,22,11,22,12,22,176,1,22,1,22,1,23,1,23,1,23,1,23,1,
        23,1,24,1,24,1,24,1,24,1,24,1,24,0,0,25,5,0,7,0,9,0,11,0,13,0,15,
        0,17,0,19,1,21,2,23,3,25,4,27,5,29,6,31,0,33,0,35,7,37,8,39,0,41,
        0,43,0,45,0,47,0,49,0,51,0,53,9,5,0,1,2,3,4,5,2,0,65,90,97,122,3,
        0,48,57,65,90,97,122,3,0,92,92,94,94,96,96,6,0,44,44,60,60,62,62,
        92,92,94,94,96,96,4,0,10,10,92,92,94,94,96,96,201,0,19,1,0,0,0,0,
        21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,1,27,1,0,0,0,1,29,1,0,0,0,1,
        31,1,0,0,0,2,33,1,0,0,0,2,35,1,0,0,0,2,37,1,0,0,0,2,39,1,0,0,0,3,
        41,1,0,0,0,3,43,1,0,0,0,3,45,1,0,0,0,3,47,1,0,0,0,4,49,1,0,0,0,4,
        51,1,0,0,0,4,53,1,0,0,0,5,55,1,0,0,0,7,57,1,0,0,0,9,59,1,0,0,0,11,
        66,1,0,0,0,13,68,1,0,0,0,15,70,1,0,0,0,17,72,1,0,0,0,19,83,1,0,0,
        0,21,87,1,0,0,0,23,91,1,0,0,0,25,95,1,0,0,0,27,97,1,0,0,0,29,99,
        1,0,0,0,31,103,1,0,0,0,33,123,1,0,0,0,35,129,1,0,0,0,37,134,1,0,
        0,0,39,136,1,0,0,0,41,141,1,0,0,0,43,145,1,0,0,0,45,149,1,0,0,0,
        47,154,1,0,0,0,49,174,1,0,0,0,51,180,1,0,0,0,53,185,1,0,0,0,55,56,
        5,96,0,0,56,6,1,0,0,0,57,58,5,94,0,0,58,8,1,0,0,0,59,63,7,0,0,0,
        60,62,7,1,0,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,
        0,0,0,64,10,1,0,0,0,65,63,1,0,0,0,66,67,5,60,0,0,67,12,1,0,0,0,68,
        69,5,62,0,0,69,14,1,0,0,0,70,71,5,44,0,0,71,16,1,0,0,0,72,73,5,58,
        0,0,73,18,1,0,0,0,74,75,5,92,0,0,75,84,5,96,0,0,76,77,5,92,0,0,77,
        84,5,94,0,0,78,79,5,92,0,0,79,84,5,92,0,0,80,81,5,92,0,0,81,84,8,
        2,0,0,82,84,8,2,0,0,83,74,1,0,0,0,83,76,1,0,0,0,83,78,1,0,0,0,83,
        80,1,0,0,0,83,82,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,
        0,86,20,1,0,0,0,87,88,3,5,0,0,88,89,1,0,0,0,89,90,6,8,0,0,90,22,
        1,0,0,0,91,92,3,7,1,0,92,93,1,0,0,0,93,94,6,9,1,0,94,24,1,0,0,0,
        95,96,3,9,2,0,96,26,1,0,0,0,97,98,3,17,6,0,98,28,1,0,0,0,99,100,
        3,11,3,0,100,101,1,0,0,0,101,102,6,12,2,0,102,30,1,0,0,0,103,104,
        4,13,0,0,104,105,1,0,0,0,105,106,6,13,3,0,106,107,6,13,4,0,107,32,
        1,0,0,0,108,109,5,92,0,0,109,124,5,96,0,0,110,111,5,92,0,0,111,124,
        5,94,0,0,112,113,5,92,0,0,113,124,5,60,0,0,114,115,5,92,0,0,115,
        124,5,62,0,0,116,117,5,92,0,0,117,124,5,44,0,0,118,119,5,92,0,0,
        119,124,5,92,0,0,120,121,5,92,0,0,121,124,8,3,0,0,122,124,8,3,0,
        0,123,108,1,0,0,0,123,110,1,0,0,0,123,112,1,0,0,0,123,114,1,0,0,
        0,123,116,1,0,0,0,123,118,1,0,0,0,123,120,1,0,0,0,123,122,1,0,0,
        0,124,125,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,
        0,127,128,6,14,5,0,128,34,1,0,0,0,129,130,3,13,4,0,130,131,1,0,0,
        0,131,132,6,15,4,0,132,133,6,15,4,0,133,36,1,0,0,0,134,135,3,15,
        5,0,135,38,1,0,0,0,136,137,3,5,0,0,137,138,1,0,0,0,138,139,6,17,
        0,0,139,140,6,17,6,0,140,40,1,0,0,0,141,142,3,9,2,0,142,143,1,0,
        0,0,143,144,6,18,7,0,144,42,1,0,0,0,145,146,3,11,3,0,146,147,1,0,
        0,0,147,148,6,19,8,0,148,44,1,0,0,0,149,150,3,13,4,0,150,151,1,0,
        0,0,151,152,6,20,9,0,152,153,6,20,10,0,153,46,1,0,0,0,154,155,3,
        15,5,0,155,156,1,0,0,0,156,157,6,21,11,0,157,48,1,0,0,0,158,159,
        5,92,0,0,159,175,5,96,0,0,160,161,5,92,0,0,161,175,5,94,0,0,162,
        163,5,92,0,0,163,164,5,10,0,0,164,175,5,10,0,0,165,166,5,92,0,0,
        166,175,5,92,0,0,167,168,5,92,0,0,168,175,8,4,0,0,169,170,5,92,0,
        0,170,175,5,10,0,0,171,172,5,10,0,0,172,175,4,22,1,0,173,175,8,4,
        0,0,174,158,1,0,0,0,174,160,1,0,0,0,174,162,1,0,0,0,174,165,1,0,
        0,0,174,167,1,0,0,0,174,169,1,0,0,0,174,171,1,0,0,0,174,173,1,0,
        0,0,175,176,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,178,1,0,
        0,0,178,179,6,22,5,0,179,50,1,0,0,0,180,181,3,5,0,0,181,182,1,0,
        0,0,182,183,6,23,0,0,183,184,6,23,6,0,184,52,1,0,0,0,185,186,5,10,
        0,0,186,187,5,10,0,0,187,188,1,0,0,0,188,189,6,24,4,0,189,190,6,
        24,4,0,190,54,1,0,0,0,12,0,1,2,3,4,63,83,85,123,125,174,176,12,5,
        1,0,5,3,0,5,2,0,3,0,0,4,0,0,7,1,0,7,2,0,7,4,0,7,6,0,5,4,0,7,7,0,
        7,8,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!prompt_plus_plus_lexer.__ATN) {
            prompt_plus_plus_lexer.__ATN = new antlr.ATNDeserializer().deserialize(prompt_plus_plus_lexer._serializedATN);
        }

        return prompt_plus_plus_lexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(prompt_plus_plus_lexer.literalNames, prompt_plus_plus_lexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return prompt_plus_plus_lexer.vocabulary;
    }

    private static readonly decisionsToDFA = prompt_plus_plus_lexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}
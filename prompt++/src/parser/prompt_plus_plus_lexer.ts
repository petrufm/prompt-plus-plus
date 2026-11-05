
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class prompt_plus_plus_lexer extends antlr.Lexer {
    public static readonly Natural_language_text_fragment = 1;
    public static readonly Natural_language_text_fragment_splice = 2;
    public static readonly Prompt_template_substitution_operator = 3;
    public static readonly Prompt_template_definition_operator = 4;
    public static readonly Template_identifier = 5;
    public static readonly Prompt_template_substitution_resolution_operator = 6;
    public static readonly Arg_list_begin = 7;
    public static readonly Prompt_template_substitution_arg_list_natural_language_text_fragment_splice = 8;
    public static readonly Arg_list_end = 9;
    public static readonly Arg_list_separator = 10;
    public static readonly Prompt_template_definition_natural_language_text_fragment_splice = 11;
    public static readonly Prompt_template_definition_body_end = 12;
    public static readonly PROMPT_TEMPLATE_SUBSTITUTION = 1;
    public static readonly PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST = 2;
    public static readonly PROMPT_TEMPLATE_DEFINITION = 3;
    public static readonly PROMPT_TEMPLATE_DEFINITION_BODY = 4;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
    ];

    public static readonly symbolicNames = [
        null, "Natural_language_text_fragment", "Natural_language_text_fragment_splice", 
        "Prompt_template_substitution_operator", "Prompt_template_definition_operator", 
        "Template_identifier", "Prompt_template_substitution_resolution_operator", 
        "Arg_list_begin", "Prompt_template_substitution_arg_list_natural_language_text_fragment_splice", 
        "Arg_list_end", "Arg_list_separator", "Prompt_template_definition_natural_language_text_fragment_splice", 
        "Prompt_template_definition_body_end"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "PROMPT_TEMPLATE_SUBSTITUTION", "PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST", 
        "PROMPT_TEMPLATE_DEFINITION", "PROMPT_TEMPLATE_DEFINITION_BODY",
    ];

    public static readonly ruleNames = [
        "Fragment_substitution_operator", "Fragment_definition_operator", 
        "Fragment_template_identifier", "Fragment_arg_list_begin", "Fragment_arg_list_end", 
        "Fragment_arg_list_separator", "Fragment_resolution_operator", "Fragment_natural_language_text_fragment_splice", 
        "Natural_language_text_fragment", "Natural_language_text_fragment_splice", 
        "Prompt_template_substitution_operator", "Prompt_template_definition_operator", 
        "Template_identifier", "Prompt_template_substitution_resolution_operator", 
        "Arg_list_begin", "Anything_else", "Prompt_template_substitution_arg_list_natural_language_text_fragment", 
        "Prompt_template_substitution_arg_list_natural_language_text_fragment_splice", 
        "Arg_list_end", "Arg_list_separator", "Prompt_template_substitution_arg_list_substitution_operator", 
        "Prompt_template_definition_template_identifier", "Prompt_template_definition_arg_list_begin", 
        "Prompt_template_definition_arg_list_end", "Prompt_template_definition_arg_list_separator", 
        "Prompt_template_definition_natural_language_text_fragment", "Prompt_template_definition_natural_language_text_fragment_splice", 
        "Prompt_template_definition_prompt_template_substitution_operator", 
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
        case 15:
            return this.Anything_else_sempred(localContext, predIndex);
        case 25:
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
            return  this.inputStream.LA(1) !== '\n'.charCodeAt(0) ;
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,0,12,218,6,-1,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,
        7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,
        11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,
        17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,
        24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,1,0,1,0,1,1,1,1,
        1,2,1,2,5,2,70,8,2,10,2,12,2,73,9,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
        1,6,1,7,1,7,3,7,85,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
        8,4,8,98,8,8,11,8,12,8,99,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,
        11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,
        15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,4,16,142,8,16,11,16,12,16,143,1,16,1,
        16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,
        20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,
        23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,
        25,1,25,1,25,1,25,1,25,1,25,4,25,192,8,25,11,25,12,25,193,1,25,1,
        25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,3,28,208,8,
        28,1,28,1,28,3,28,212,8,28,1,28,1,28,1,28,1,28,1,28,0,0,29,5,0,7,
        0,9,0,11,0,13,0,15,0,17,0,19,0,21,1,23,2,25,3,27,4,29,5,31,6,33,
        7,35,0,37,0,39,8,41,9,43,10,45,0,47,0,49,0,51,0,53,0,55,0,57,11,
        59,0,61,12,5,0,1,2,3,4,6,2,0,65,90,97,122,3,0,48,57,65,90,97,122,
        5,0,10,10,13,13,92,92,94,94,96,96,3,0,92,92,94,94,96,96,8,0,10,10,
        13,13,44,44,60,60,62,62,92,92,94,94,96,96,6,0,44,44,60,60,62,62,
        92,92,94,94,96,96,228,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,
        1,0,0,0,1,29,1,0,0,0,1,31,1,0,0,0,1,33,1,0,0,0,1,35,1,0,0,0,2,37,
        1,0,0,0,2,39,1,0,0,0,2,41,1,0,0,0,2,43,1,0,0,0,2,45,1,0,0,0,3,47,
        1,0,0,0,3,49,1,0,0,0,3,51,1,0,0,0,3,53,1,0,0,0,4,55,1,0,0,0,4,57,
        1,0,0,0,4,59,1,0,0,0,4,61,1,0,0,0,5,63,1,0,0,0,7,65,1,0,0,0,9,67,
        1,0,0,0,11,74,1,0,0,0,13,76,1,0,0,0,15,78,1,0,0,0,17,80,1,0,0,0,
        19,82,1,0,0,0,21,97,1,0,0,0,23,101,1,0,0,0,25,105,1,0,0,0,27,109,
        1,0,0,0,29,113,1,0,0,0,31,115,1,0,0,0,33,117,1,0,0,0,35,121,1,0,
        0,0,37,141,1,0,0,0,39,147,1,0,0,0,41,151,1,0,0,0,43,156,1,0,0,0,
        45,158,1,0,0,0,47,163,1,0,0,0,49,167,1,0,0,0,51,171,1,0,0,0,53,176,
        1,0,0,0,55,191,1,0,0,0,57,197,1,0,0,0,59,201,1,0,0,0,61,207,1,0,
        0,0,63,64,5,96,0,0,64,6,1,0,0,0,65,66,5,94,0,0,66,8,1,0,0,0,67,71,
        7,0,0,0,68,70,7,1,0,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,
        71,72,1,0,0,0,72,10,1,0,0,0,73,71,1,0,0,0,74,75,5,60,0,0,75,12,1,
        0,0,0,76,77,5,62,0,0,77,14,1,0,0,0,78,79,5,44,0,0,79,16,1,0,0,0,
        80,81,5,58,0,0,81,18,1,0,0,0,82,84,5,92,0,0,83,85,5,13,0,0,84,83,
        1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,86,87,5,10,0,0,87,20,1,0,0,0,
        88,89,5,92,0,0,89,98,5,96,0,0,90,91,5,92,0,0,91,98,5,94,0,0,92,93,
        5,92,0,0,93,98,5,92,0,0,94,95,5,92,0,0,95,98,8,2,0,0,96,98,8,3,0,
        0,97,88,1,0,0,0,97,90,1,0,0,0,97,92,1,0,0,0,97,94,1,0,0,0,97,96,
        1,0,0,0,98,99,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,22,1,0,0,
        0,101,102,3,19,7,0,102,103,1,0,0,0,103,104,6,9,0,0,104,24,1,0,0,
        0,105,106,3,5,0,0,106,107,1,0,0,0,107,108,6,10,1,0,108,26,1,0,0,
        0,109,110,3,7,1,0,110,111,1,0,0,0,111,112,6,11,2,0,112,28,1,0,0,
        0,113,114,3,9,2,0,114,30,1,0,0,0,115,116,3,17,6,0,116,32,1,0,0,0,
        117,118,3,11,3,0,118,119,1,0,0,0,119,120,6,14,3,0,120,34,1,0,0,0,
        121,122,4,15,0,0,122,123,1,0,0,0,123,124,6,15,4,0,124,125,6,15,5,
        0,125,36,1,0,0,0,126,127,5,92,0,0,127,142,5,96,0,0,128,129,5,92,
        0,0,129,142,5,94,0,0,130,131,5,92,0,0,131,142,5,60,0,0,132,133,5,
        92,0,0,133,142,5,62,0,0,134,135,5,92,0,0,135,142,5,44,0,0,136,137,
        5,92,0,0,137,142,5,92,0,0,138,139,5,92,0,0,139,142,8,4,0,0,140,142,
        8,5,0,0,141,126,1,0,0,0,141,128,1,0,0,0,141,130,1,0,0,0,141,132,
        1,0,0,0,141,134,1,0,0,0,141,136,1,0,0,0,141,138,1,0,0,0,141,140,
        1,0,0,0,142,143,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,145,
        1,0,0,0,145,146,6,16,6,0,146,38,1,0,0,0,147,148,3,19,7,0,148,149,
        1,0,0,0,149,150,6,17,0,0,150,40,1,0,0,0,151,152,3,13,4,0,152,153,
        1,0,0,0,153,154,6,18,5,0,154,155,6,18,5,0,155,42,1,0,0,0,156,157,
        3,15,5,0,157,44,1,0,0,0,158,159,3,5,0,0,159,160,1,0,0,0,160,161,
        6,20,1,0,161,162,6,20,7,0,162,46,1,0,0,0,163,164,3,9,2,0,164,165,
        1,0,0,0,165,166,6,21,8,0,166,48,1,0,0,0,167,168,3,11,3,0,168,169,
        1,0,0,0,169,170,6,22,9,0,170,50,1,0,0,0,171,172,3,13,4,0,172,173,
        1,0,0,0,173,174,6,23,10,0,174,175,6,23,11,0,175,52,1,0,0,0,176,177,
        3,15,5,0,177,178,1,0,0,0,178,179,6,24,12,0,179,54,1,0,0,0,180,181,
        5,92,0,0,181,192,5,96,0,0,182,183,5,92,0,0,183,192,5,94,0,0,184,
        185,5,92,0,0,185,192,5,92,0,0,186,187,5,92,0,0,187,192,8,2,0,0,188,
        189,5,10,0,0,189,192,4,25,1,0,190,192,8,2,0,0,191,180,1,0,0,0,191,
        182,1,0,0,0,191,184,1,0,0,0,191,186,1,0,0,0,191,188,1,0,0,0,191,
        190,1,0,0,0,192,193,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,
        195,1,0,0,0,195,196,6,25,6,0,196,56,1,0,0,0,197,198,3,19,7,0,198,
        199,1,0,0,0,199,200,6,26,0,0,200,58,1,0,0,0,201,202,3,5,0,0,202,
        203,1,0,0,0,203,204,6,27,1,0,204,205,6,27,7,0,205,60,1,0,0,0,206,
        208,5,13,0,0,207,206,1,0,0,0,207,208,1,0,0,0,208,209,1,0,0,0,209,
        211,5,10,0,0,210,212,5,13,0,0,211,210,1,0,0,0,211,212,1,0,0,0,212,
        213,1,0,0,0,213,214,5,10,0,0,214,215,1,0,0,0,215,216,6,28,5,0,216,
        217,6,28,5,0,217,62,1,0,0,0,15,0,1,2,3,4,71,84,97,99,141,143,191,
        193,207,211,13,6,0,0,5,1,0,5,3,0,5,2,0,3,0,0,4,0,0,7,1,0,7,3,0,7,
        5,0,7,7,0,5,4,0,7,9,0,7,10,0
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
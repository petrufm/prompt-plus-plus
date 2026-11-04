
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
    public static readonly Prompt_template_definition_body_end = 11;
    public static readonly PROMPT_TEMPLATE_SUBSTITUTION = 1;
    public static readonly PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST = 2;
    public static readonly PROMPT_TEMPLATE_DEFINITION = 3;
    public static readonly PROMPT_TEMPLATE_DEFINITION_BODY = 4;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        "'\\n\\n'"
    ];

    public static readonly symbolicNames = [
        null, "Natural_language_text_fragment", "Natural_language_text_fragment_splice", 
        "Prompt_template_substitution_operator", "Prompt_template_definition_operator", 
        "Template_identifier", "Prompt_template_substitution_resolution_operator", 
        "Arg_list_begin", "Prompt_template_substitution_arg_list_natural_language_text_fragment_splice", 
        "Arg_list_end", "Arg_list_separator", "Prompt_template_definition_body_end"
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
            return  this.inputStream.LA(1) !== '\n'.charCodeAt(0) || this.inputStream.LA(2) === '\n'.charCodeAt(0) ;
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,0,11,211,6,-1,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,
        7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,
        11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,
        17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,
        24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,1,0,1,0,1,1,1,1,1,2,1,2,5,
        2,68,8,2,10,2,12,2,71,9,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,
        7,3,7,83,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,4,8,96,
        8,8,11,8,12,8,97,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,
        11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,
        15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,4,16,140,8,16,11,16,12,16,141,1,16,1,16,1,17,1,
        17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,
        20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,
        23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
        25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,4,25,195,8,25,11,25,12,
        25,196,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,
        27,1,27,0,0,28,5,0,7,0,9,0,11,0,13,0,15,0,17,0,19,0,21,1,23,2,25,
        3,27,4,29,5,31,6,33,7,35,0,37,0,39,8,41,9,43,10,45,0,47,0,49,0,51,
        0,53,0,55,0,57,0,59,11,5,0,1,2,3,4,7,2,0,65,90,97,122,3,0,48,57,
        65,90,97,122,5,0,10,10,13,13,92,92,94,94,96,96,3,0,92,92,94,94,96,
        96,8,0,10,10,13,13,44,44,60,60,62,62,92,92,94,94,96,96,6,0,44,44,
        60,60,62,62,92,92,94,94,96,96,4,0,10,10,92,92,94,94,96,96,221,0,
        21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,1,
        31,1,0,0,0,1,33,1,0,0,0,1,35,1,0,0,0,2,37,1,0,0,0,2,39,1,0,0,0,2,
        41,1,0,0,0,2,43,1,0,0,0,2,45,1,0,0,0,3,47,1,0,0,0,3,49,1,0,0,0,3,
        51,1,0,0,0,3,53,1,0,0,0,4,55,1,0,0,0,4,57,1,0,0,0,4,59,1,0,0,0,5,
        61,1,0,0,0,7,63,1,0,0,0,9,65,1,0,0,0,11,72,1,0,0,0,13,74,1,0,0,0,
        15,76,1,0,0,0,17,78,1,0,0,0,19,80,1,0,0,0,21,95,1,0,0,0,23,99,1,
        0,0,0,25,103,1,0,0,0,27,107,1,0,0,0,29,111,1,0,0,0,31,113,1,0,0,
        0,33,115,1,0,0,0,35,119,1,0,0,0,37,139,1,0,0,0,39,145,1,0,0,0,41,
        149,1,0,0,0,43,154,1,0,0,0,45,156,1,0,0,0,47,161,1,0,0,0,49,165,
        1,0,0,0,51,169,1,0,0,0,53,174,1,0,0,0,55,194,1,0,0,0,57,200,1,0,
        0,0,59,205,1,0,0,0,61,62,5,96,0,0,62,6,1,0,0,0,63,64,5,94,0,0,64,
        8,1,0,0,0,65,69,7,0,0,0,66,68,7,1,0,0,67,66,1,0,0,0,68,71,1,0,0,
        0,69,67,1,0,0,0,69,70,1,0,0,0,70,10,1,0,0,0,71,69,1,0,0,0,72,73,
        5,60,0,0,73,12,1,0,0,0,74,75,5,62,0,0,75,14,1,0,0,0,76,77,5,44,0,
        0,77,16,1,0,0,0,78,79,5,58,0,0,79,18,1,0,0,0,80,82,5,92,0,0,81,83,
        5,13,0,0,82,81,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,0,84,85,5,10,0,
        0,85,20,1,0,0,0,86,87,5,92,0,0,87,96,5,96,0,0,88,89,5,92,0,0,89,
        96,5,94,0,0,90,91,5,92,0,0,91,96,5,92,0,0,92,93,5,92,0,0,93,96,8,
        2,0,0,94,96,8,3,0,0,95,86,1,0,0,0,95,88,1,0,0,0,95,90,1,0,0,0,95,
        92,1,0,0,0,95,94,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,
        0,98,22,1,0,0,0,99,100,3,19,7,0,100,101,1,0,0,0,101,102,6,9,0,0,
        102,24,1,0,0,0,103,104,3,5,0,0,104,105,1,0,0,0,105,106,6,10,1,0,
        106,26,1,0,0,0,107,108,3,7,1,0,108,109,1,0,0,0,109,110,6,11,2,0,
        110,28,1,0,0,0,111,112,3,9,2,0,112,30,1,0,0,0,113,114,3,17,6,0,114,
        32,1,0,0,0,115,116,3,11,3,0,116,117,1,0,0,0,117,118,6,14,3,0,118,
        34,1,0,0,0,119,120,4,15,0,0,120,121,1,0,0,0,121,122,6,15,4,0,122,
        123,6,15,5,0,123,36,1,0,0,0,124,125,5,92,0,0,125,140,5,96,0,0,126,
        127,5,92,0,0,127,140,5,94,0,0,128,129,5,92,0,0,129,140,5,60,0,0,
        130,131,5,92,0,0,131,140,5,62,0,0,132,133,5,92,0,0,133,140,5,44,
        0,0,134,135,5,92,0,0,135,140,5,92,0,0,136,137,5,92,0,0,137,140,8,
        4,0,0,138,140,8,5,0,0,139,124,1,0,0,0,139,126,1,0,0,0,139,128,1,
        0,0,0,139,130,1,0,0,0,139,132,1,0,0,0,139,134,1,0,0,0,139,136,1,
        0,0,0,139,138,1,0,0,0,140,141,1,0,0,0,141,139,1,0,0,0,141,142,1,
        0,0,0,142,143,1,0,0,0,143,144,6,16,6,0,144,38,1,0,0,0,145,146,3,
        19,7,0,146,147,1,0,0,0,147,148,6,17,0,0,148,40,1,0,0,0,149,150,3,
        13,4,0,150,151,1,0,0,0,151,152,6,18,5,0,152,153,6,18,5,0,153,42,
        1,0,0,0,154,155,3,15,5,0,155,44,1,0,0,0,156,157,3,5,0,0,157,158,
        1,0,0,0,158,159,6,20,1,0,159,160,6,20,7,0,160,46,1,0,0,0,161,162,
        3,9,2,0,162,163,1,0,0,0,163,164,6,21,8,0,164,48,1,0,0,0,165,166,
        3,11,3,0,166,167,1,0,0,0,167,168,6,22,9,0,168,50,1,0,0,0,169,170,
        3,13,4,0,170,171,1,0,0,0,171,172,6,23,10,0,172,173,6,23,11,0,173,
        52,1,0,0,0,174,175,3,15,5,0,175,176,1,0,0,0,176,177,6,24,12,0,177,
        54,1,0,0,0,178,179,5,92,0,0,179,195,5,96,0,0,180,181,5,92,0,0,181,
        195,5,94,0,0,182,183,5,92,0,0,183,184,5,10,0,0,184,195,5,10,0,0,
        185,186,5,92,0,0,186,195,5,92,0,0,187,188,5,92,0,0,188,195,8,6,0,
        0,189,190,5,92,0,0,190,195,5,10,0,0,191,192,5,10,0,0,192,195,4,25,
        1,0,193,195,8,6,0,0,194,178,1,0,0,0,194,180,1,0,0,0,194,182,1,0,
        0,0,194,185,1,0,0,0,194,187,1,0,0,0,194,189,1,0,0,0,194,191,1,0,
        0,0,194,193,1,0,0,0,195,196,1,0,0,0,196,194,1,0,0,0,196,197,1,0,
        0,0,197,198,1,0,0,0,198,199,6,25,6,0,199,56,1,0,0,0,200,201,3,5,
        0,0,201,202,1,0,0,0,202,203,6,26,1,0,203,204,6,26,7,0,204,58,1,0,
        0,0,205,206,5,10,0,0,206,207,5,10,0,0,207,208,1,0,0,0,208,209,6,
        27,5,0,209,210,6,27,5,0,210,60,1,0,0,0,13,0,1,2,3,4,69,82,95,97,
        139,141,194,196,13,6,0,0,5,1,0,5,3,0,5,2,0,3,0,0,4,0,0,7,1,0,7,3,
        0,7,5,0,7,7,0,5,4,0,7,9,0,7,10,0
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
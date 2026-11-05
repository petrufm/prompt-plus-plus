
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
        4,0,12,209,6,-1,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,
        7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,
        11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,
        17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,
        24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,1,0,1,0,1,1,1,1,
        1,2,1,2,5,2,70,8,2,10,2,12,2,73,9,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
        1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,4,8,95,8,8,11,
        8,12,8,96,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,
        1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,
        1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
        1,16,1,16,4,16,139,8,16,11,16,12,16,140,1,16,1,16,1,17,1,17,1,17,
        1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,
        1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
        1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,4,25,189,8,25,11,25,12,25,190,1,25,1,25,1,26,1,26,1,26,
        1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,0,0,
        29,5,0,7,0,9,0,11,0,13,0,15,0,17,0,19,0,21,1,23,2,25,3,27,4,29,5,
        31,6,33,7,35,0,37,0,39,8,41,9,43,10,45,0,47,0,49,0,51,0,53,0,55,
        0,57,11,59,0,61,12,5,0,1,2,3,4,6,2,0,65,90,97,122,3,0,48,57,65,90,
        97,122,4,0,10,10,92,92,94,94,96,96,3,0,92,92,94,94,96,96,7,0,10,
        10,44,44,60,60,62,62,92,92,94,94,96,96,6,0,44,44,60,60,62,62,92,
        92,94,94,96,96,216,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,
        0,0,0,1,29,1,0,0,0,1,31,1,0,0,0,1,33,1,0,0,0,1,35,1,0,0,0,2,37,1,
        0,0,0,2,39,1,0,0,0,2,41,1,0,0,0,2,43,1,0,0,0,2,45,1,0,0,0,3,47,1,
        0,0,0,3,49,1,0,0,0,3,51,1,0,0,0,3,53,1,0,0,0,4,55,1,0,0,0,4,57,1,
        0,0,0,4,59,1,0,0,0,4,61,1,0,0,0,5,63,1,0,0,0,7,65,1,0,0,0,9,67,1,
        0,0,0,11,74,1,0,0,0,13,76,1,0,0,0,15,78,1,0,0,0,17,80,1,0,0,0,19,
        82,1,0,0,0,21,94,1,0,0,0,23,98,1,0,0,0,25,102,1,0,0,0,27,106,1,0,
        0,0,29,110,1,0,0,0,31,112,1,0,0,0,33,114,1,0,0,0,35,118,1,0,0,0,
        37,138,1,0,0,0,39,144,1,0,0,0,41,148,1,0,0,0,43,153,1,0,0,0,45,155,
        1,0,0,0,47,160,1,0,0,0,49,164,1,0,0,0,51,168,1,0,0,0,53,173,1,0,
        0,0,55,188,1,0,0,0,57,194,1,0,0,0,59,198,1,0,0,0,61,203,1,0,0,0,
        63,64,5,96,0,0,64,6,1,0,0,0,65,66,5,94,0,0,66,8,1,0,0,0,67,71,7,
        0,0,0,68,70,7,1,0,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,
        72,1,0,0,0,72,10,1,0,0,0,73,71,1,0,0,0,74,75,5,60,0,0,75,12,1,0,
        0,0,76,77,5,62,0,0,77,14,1,0,0,0,78,79,5,44,0,0,79,16,1,0,0,0,80,
        81,5,58,0,0,81,18,1,0,0,0,82,83,5,92,0,0,83,84,5,10,0,0,84,20,1,
        0,0,0,85,86,5,92,0,0,86,95,5,96,0,0,87,88,5,92,0,0,88,95,5,94,0,
        0,89,90,5,92,0,0,90,95,5,92,0,0,91,92,5,92,0,0,92,95,8,2,0,0,93,
        95,8,3,0,0,94,85,1,0,0,0,94,87,1,0,0,0,94,89,1,0,0,0,94,91,1,0,0,
        0,94,93,1,0,0,0,95,96,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,22,
        1,0,0,0,98,99,3,19,7,0,99,100,1,0,0,0,100,101,6,9,0,0,101,24,1,0,
        0,0,102,103,3,5,0,0,103,104,1,0,0,0,104,105,6,10,1,0,105,26,1,0,
        0,0,106,107,3,7,1,0,107,108,1,0,0,0,108,109,6,11,2,0,109,28,1,0,
        0,0,110,111,3,9,2,0,111,30,1,0,0,0,112,113,3,17,6,0,113,32,1,0,0,
        0,114,115,3,11,3,0,115,116,1,0,0,0,116,117,6,14,3,0,117,34,1,0,0,
        0,118,119,4,15,0,0,119,120,1,0,0,0,120,121,6,15,4,0,121,122,6,15,
        5,0,122,36,1,0,0,0,123,124,5,92,0,0,124,139,5,96,0,0,125,126,5,92,
        0,0,126,139,5,94,0,0,127,128,5,92,0,0,128,139,5,60,0,0,129,130,5,
        92,0,0,130,139,5,62,0,0,131,132,5,92,0,0,132,139,5,44,0,0,133,134,
        5,92,0,0,134,139,5,92,0,0,135,136,5,92,0,0,136,139,8,4,0,0,137,139,
        8,5,0,0,138,123,1,0,0,0,138,125,1,0,0,0,138,127,1,0,0,0,138,129,
        1,0,0,0,138,131,1,0,0,0,138,133,1,0,0,0,138,135,1,0,0,0,138,137,
        1,0,0,0,139,140,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,142,
        1,0,0,0,142,143,6,16,6,0,143,38,1,0,0,0,144,145,3,19,7,0,145,146,
        1,0,0,0,146,147,6,17,0,0,147,40,1,0,0,0,148,149,3,13,4,0,149,150,
        1,0,0,0,150,151,6,18,5,0,151,152,6,18,5,0,152,42,1,0,0,0,153,154,
        3,15,5,0,154,44,1,0,0,0,155,156,3,5,0,0,156,157,1,0,0,0,157,158,
        6,20,1,0,158,159,6,20,7,0,159,46,1,0,0,0,160,161,3,9,2,0,161,162,
        1,0,0,0,162,163,6,21,8,0,163,48,1,0,0,0,164,165,3,11,3,0,165,166,
        1,0,0,0,166,167,6,22,9,0,167,50,1,0,0,0,168,169,3,13,4,0,169,170,
        1,0,0,0,170,171,6,23,10,0,171,172,6,23,11,0,172,52,1,0,0,0,173,174,
        3,15,5,0,174,175,1,0,0,0,175,176,6,24,12,0,176,54,1,0,0,0,177,178,
        5,92,0,0,178,189,5,96,0,0,179,180,5,92,0,0,180,189,5,94,0,0,181,
        182,5,92,0,0,182,189,5,92,0,0,183,184,5,92,0,0,184,189,8,2,0,0,185,
        186,5,10,0,0,186,189,4,25,1,0,187,189,8,2,0,0,188,177,1,0,0,0,188,
        179,1,0,0,0,188,181,1,0,0,0,188,183,1,0,0,0,188,185,1,0,0,0,188,
        187,1,0,0,0,189,190,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,
        192,1,0,0,0,192,193,6,25,6,0,193,56,1,0,0,0,194,195,3,19,7,0,195,
        196,1,0,0,0,196,197,6,26,0,0,197,58,1,0,0,0,198,199,3,5,0,0,199,
        200,1,0,0,0,200,201,6,27,1,0,201,202,6,27,7,0,202,60,1,0,0,0,203,
        204,5,10,0,0,204,205,5,10,0,0,205,206,1,0,0,0,206,207,6,28,5,0,207,
        208,6,28,5,0,208,62,1,0,0,0,12,0,1,2,3,4,71,94,96,138,140,188,190,
        13,6,0,0,5,1,0,5,3,0,5,2,0,3,0,0,4,0,0,7,1,0,7,3,0,7,5,0,7,7,0,5,
        4,0,7,9,0,7,10,0
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
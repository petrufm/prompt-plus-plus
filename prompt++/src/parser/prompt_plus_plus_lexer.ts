
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class prompt_plus_plus_lexer extends antlr.Lexer {
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

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, null, null, "':'"
    ];

    public static readonly symbolicNames = [
        null, "Natural_language_text_fragment", "Prompt_template_substitution_operator", 
        "Prompt_template_definition_operator", "Template_identifier", "Prompt_template_substitution_resolution_operator", 
        "Arg_list_begin", "Prompt_template_substitution_template_ws", "Prompt_template_substitution_arg_list_natural_language_text_fragment", 
        "Arg_list_end", "Arg_list_separator", "Prompt_template_definition_body_end"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "PROMPT_TEMPLATE_SUBSTITUTION", "PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST", 
        "PROMPT_TEMPLATE_DEFINITION", "PROMPT_TEMPLATE_DEFINITION_BODY",
    ];

    public static readonly ruleNames = [
        "Fragment_template_identifier", "Fragment_arg_list_begin", "Fragment_arg_list_end", 
        "Fragment_arg_list_separator", "Fragment_substitution_operator", 
        "Fragment_definition_operator", "Natural_language_text_fragment", 
        "Prompt_template_substitution_operator", "Prompt_template_definition_operator", 
        "Template_identifier", "Prompt_template_substitution_resolution_operator", 
        "Arg_list_begin", "Prompt_template_substitution_template_ws", "Prompt_template_substitution_arg_list_natural_language_text_fragment", 
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

    public static readonly _serializedATN: number[] = [
        4,0,11,149,6,-1,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,
        7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,
        11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,
        17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,
        0,1,0,4,0,56,8,0,11,0,12,0,57,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,
        5,1,5,1,6,4,6,71,8,6,11,6,12,6,72,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,
        8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,12,4,12,92,8,12,11,12,
        12,12,93,1,13,4,13,97,8,13,11,13,12,13,98,1,14,1,14,1,14,1,14,1,
        14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,
        18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,
        21,1,21,4,21,133,8,21,11,21,12,21,134,1,21,1,21,1,22,1,22,1,22,1,
        22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,0,0,24,5,0,7,0,9,0,11,0,13,
        0,15,0,17,1,19,2,21,3,23,4,25,5,27,6,29,7,31,8,33,9,35,10,37,0,39,
        0,41,0,43,0,45,0,47,0,49,0,51,11,5,0,1,2,3,4,7,2,0,65,90,97,122,
        3,0,48,57,65,90,97,122,2,0,35,35,96,96,3,0,9,10,13,13,32,32,6,0,
        35,35,44,44,58,58,60,60,62,62,96,96,1,0,10,10,3,0,10,10,35,35,96,
        96,144,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,1,25,
        1,0,0,0,1,27,1,0,0,0,1,29,1,0,0,0,2,31,1,0,0,0,2,33,1,0,0,0,2,35,
        1,0,0,0,2,37,1,0,0,0,3,39,1,0,0,0,3,41,1,0,0,0,3,43,1,0,0,0,3,45,
        1,0,0,0,4,47,1,0,0,0,4,49,1,0,0,0,4,51,1,0,0,0,5,55,1,0,0,0,7,59,
        1,0,0,0,9,61,1,0,0,0,11,63,1,0,0,0,13,65,1,0,0,0,15,67,1,0,0,0,17,
        70,1,0,0,0,19,74,1,0,0,0,21,78,1,0,0,0,23,82,1,0,0,0,25,84,1,0,0,
        0,27,86,1,0,0,0,29,91,1,0,0,0,31,96,1,0,0,0,33,100,1,0,0,0,35,105,
        1,0,0,0,37,107,1,0,0,0,39,112,1,0,0,0,41,116,1,0,0,0,43,120,1,0,
        0,0,45,125,1,0,0,0,47,132,1,0,0,0,49,138,1,0,0,0,51,143,1,0,0,0,
        53,54,7,0,0,0,54,56,7,1,0,0,55,53,1,0,0,0,56,57,1,0,0,0,57,55,1,
        0,0,0,57,58,1,0,0,0,58,6,1,0,0,0,59,60,5,60,0,0,60,8,1,0,0,0,61,
        62,5,62,0,0,62,10,1,0,0,0,63,64,5,44,0,0,64,12,1,0,0,0,65,66,5,96,
        0,0,66,14,1,0,0,0,67,68,5,35,0,0,68,16,1,0,0,0,69,71,8,2,0,0,70,
        69,1,0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,18,1,0,0,
        0,74,75,3,13,4,0,75,76,1,0,0,0,76,77,6,7,0,0,77,20,1,0,0,0,78,79,
        3,15,5,0,79,80,1,0,0,0,80,81,6,8,1,0,81,22,1,0,0,0,82,83,3,5,0,0,
        83,24,1,0,0,0,84,85,5,58,0,0,85,26,1,0,0,0,86,87,3,7,1,0,87,88,1,
        0,0,0,88,89,6,11,2,0,89,28,1,0,0,0,90,92,7,3,0,0,91,90,1,0,0,0,92,
        93,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,30,1,0,0,0,95,97,8,4,0,
        0,96,95,1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,32,
        1,0,0,0,100,101,3,9,2,0,101,102,1,0,0,0,102,103,6,14,3,0,103,104,
        6,14,3,0,104,34,1,0,0,0,105,106,3,11,3,0,106,36,1,0,0,0,107,108,
        3,13,4,0,108,109,1,0,0,0,109,110,6,16,0,0,110,111,6,16,4,0,111,38,
        1,0,0,0,112,113,3,5,0,0,113,114,1,0,0,0,114,115,6,17,5,0,115,40,
        1,0,0,0,116,117,3,7,1,0,117,118,1,0,0,0,118,119,6,18,6,0,119,42,
        1,0,0,0,120,121,3,9,2,0,121,122,1,0,0,0,122,123,6,19,7,0,123,124,
        6,19,8,0,124,44,1,0,0,0,125,126,3,11,3,0,126,127,1,0,0,0,127,128,
        6,20,9,0,128,46,1,0,0,0,129,130,5,10,0,0,130,133,8,5,0,0,131,133,
        8,6,0,0,132,129,1,0,0,0,132,131,1,0,0,0,133,134,1,0,0,0,134,132,
        1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,136,137,6,21,10,0,137,48,
        1,0,0,0,138,139,3,13,4,0,139,140,1,0,0,0,140,141,6,22,0,0,141,142,
        6,22,4,0,142,50,1,0,0,0,143,144,5,10,0,0,144,145,5,10,0,0,145,146,
        1,0,0,0,146,147,6,23,3,0,147,148,6,23,3,0,148,52,1,0,0,0,11,0,1,
        2,3,4,57,72,93,98,132,134,11,5,1,0,5,3,0,5,2,0,4,0,0,7,2,0,7,4,0,
        7,6,0,5,4,0,7,9,0,7,10,0,7,1,0
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
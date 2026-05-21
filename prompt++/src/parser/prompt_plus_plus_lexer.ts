
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
    public static readonly Arg_list_end = 8;
    public static readonly Arg_list_separator = 9;
    public static readonly Prompt_template_definition_body_end = 10;
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
        "Arg_list_begin", "Prompt_template_substitution_template_ws", "Arg_list_end", 
        "Arg_list_separator", "Prompt_template_definition_body_end"
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
        4,0,10,152,6,-1,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,
        7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,
        11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,
        17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,
        0,1,0,5,0,56,8,0,10,0,12,0,59,9,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,
        4,1,5,1,5,1,6,4,6,72,8,6,11,6,12,6,73,1,7,1,7,1,7,1,7,1,8,1,8,1,
        8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,12,4,12,93,8,12,11,
        12,12,12,94,1,13,4,13,98,8,13,11,13,12,13,99,1,13,1,13,1,14,1,14,
        1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
        1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,
        1,20,1,21,1,21,1,21,4,21,136,8,21,11,21,12,21,137,1,21,1,21,1,22,
        1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,0,0,24,5,0,7,0,
        9,0,11,0,13,0,15,0,17,1,19,2,21,3,23,4,25,5,27,6,29,7,31,0,33,8,
        35,9,37,0,39,0,41,0,43,0,45,0,47,0,49,0,51,10,5,0,1,2,3,4,7,2,0,
        65,90,97,122,3,0,48,57,65,90,97,122,2,0,35,35,96,96,3,0,9,10,13,
        13,32,32,6,0,35,35,44,44,58,58,60,60,62,62,96,96,1,0,10,10,3,0,10,
        10,35,35,96,96,147,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,
        0,0,0,1,25,1,0,0,0,1,27,1,0,0,0,1,29,1,0,0,0,2,31,1,0,0,0,2,33,1,
        0,0,0,2,35,1,0,0,0,2,37,1,0,0,0,3,39,1,0,0,0,3,41,1,0,0,0,3,43,1,
        0,0,0,3,45,1,0,0,0,4,47,1,0,0,0,4,49,1,0,0,0,4,51,1,0,0,0,5,53,1,
        0,0,0,7,60,1,0,0,0,9,62,1,0,0,0,11,64,1,0,0,0,13,66,1,0,0,0,15,68,
        1,0,0,0,17,71,1,0,0,0,19,75,1,0,0,0,21,79,1,0,0,0,23,83,1,0,0,0,
        25,85,1,0,0,0,27,87,1,0,0,0,29,92,1,0,0,0,31,97,1,0,0,0,33,103,1,
        0,0,0,35,108,1,0,0,0,37,110,1,0,0,0,39,115,1,0,0,0,41,119,1,0,0,
        0,43,123,1,0,0,0,45,128,1,0,0,0,47,135,1,0,0,0,49,141,1,0,0,0,51,
        146,1,0,0,0,53,57,7,0,0,0,54,56,7,1,0,0,55,54,1,0,0,0,56,59,1,0,
        0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,6,1,0,0,0,59,57,1,0,0,0,60,61,
        5,60,0,0,61,8,1,0,0,0,62,63,5,62,0,0,63,10,1,0,0,0,64,65,5,44,0,
        0,65,12,1,0,0,0,66,67,5,96,0,0,67,14,1,0,0,0,68,69,5,35,0,0,69,16,
        1,0,0,0,70,72,8,2,0,0,71,70,1,0,0,0,72,73,1,0,0,0,73,71,1,0,0,0,
        73,74,1,0,0,0,74,18,1,0,0,0,75,76,3,13,4,0,76,77,1,0,0,0,77,78,6,
        7,0,0,78,20,1,0,0,0,79,80,3,15,5,0,80,81,1,0,0,0,81,82,6,8,1,0,82,
        22,1,0,0,0,83,84,3,5,0,0,84,24,1,0,0,0,85,86,5,58,0,0,86,26,1,0,
        0,0,87,88,3,7,1,0,88,89,1,0,0,0,89,90,6,11,2,0,90,28,1,0,0,0,91,
        93,7,3,0,0,92,91,1,0,0,0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,
        0,95,30,1,0,0,0,96,98,8,4,0,0,97,96,1,0,0,0,98,99,1,0,0,0,99,97,
        1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,102,6,13,3,0,102,32,1,
        0,0,0,103,104,3,9,2,0,104,105,1,0,0,0,105,106,6,14,4,0,106,107,6,
        14,4,0,107,34,1,0,0,0,108,109,3,11,3,0,109,36,1,0,0,0,110,111,3,
        13,4,0,111,112,1,0,0,0,112,113,6,16,0,0,113,114,6,16,5,0,114,38,
        1,0,0,0,115,116,3,5,0,0,116,117,1,0,0,0,117,118,6,17,6,0,118,40,
        1,0,0,0,119,120,3,7,1,0,120,121,1,0,0,0,121,122,6,18,7,0,122,42,
        1,0,0,0,123,124,3,9,2,0,124,125,1,0,0,0,125,126,6,19,8,0,126,127,
        6,19,9,0,127,44,1,0,0,0,128,129,3,11,3,0,129,130,1,0,0,0,130,131,
        6,20,10,0,131,46,1,0,0,0,132,133,5,10,0,0,133,136,8,5,0,0,134,136,
        8,6,0,0,135,132,1,0,0,0,135,134,1,0,0,0,136,137,1,0,0,0,137,135,
        1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,140,6,21,3,0,140,48,
        1,0,0,0,141,142,3,13,4,0,142,143,1,0,0,0,143,144,6,22,0,0,144,145,
        6,22,5,0,145,50,1,0,0,0,146,147,5,10,0,0,147,148,5,10,0,0,148,149,
        1,0,0,0,149,150,6,23,4,0,150,151,6,23,4,0,151,52,1,0,0,0,11,0,1,
        2,3,4,57,73,94,99,135,137,11,5,1,0,5,3,0,5,2,0,7,1,0,4,0,0,7,2,0,
        7,4,0,7,6,0,5,4,0,7,8,0,7,9,0
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
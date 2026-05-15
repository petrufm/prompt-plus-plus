lexer grammar prompt_plus_plus_lexer;

fragment Fragment_template_identifier:
    (~[ \t\r\n`#<>,:])+ ;
fragment Fragment_arg_list_begin:
    '<' ;
fragment Fragment_arg_list_end:
    '>' ;
fragment Fragment_arg_list_separator:
    ',' ;
fragment Fragment_substitution_operator:
    '`' ;
fragment Fragment_definition_operator:
    '#' ;

Natural_language_text_fragment:
    (~[`#])+ ;

Prompt_template_substitution_operator:
    Fragment_substitution_operator -> pushMode(PROMPT_TEMPLATE_SUBSTITUTION) ;

Prompt_template_definition_operator:
    Fragment_definition_operator -> pushMode(PROMPT_TEMPLATE_DEFINITION) ;

mode PROMPT_TEMPLATE_SUBSTITUTION ;

Template_identifier:
    Fragment_template_identifier ;

Prompt_template_substitution_resolution_operator:
    ':' ;

Arg_list_begin:
    Fragment_arg_list_begin -> pushMode(PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST) ;

Prompt_template_substitution_template_ws: 
    [ \t\r\n]+ ;

mode PROMPT_TEMPLATE_SUBSTITUTION_ARG_LIST;

Prompt_template_substitution_arg_list_natural_language_text_fragment: 
    (~[`#<>,:])+ ;

Arg_list_end:
    Fragment_arg_list_end  -> popMode, popMode;

Arg_list_separator:
    Fragment_arg_list_separator ;

Prompt_template_substitution_arg_list_substitution_operator:
    Fragment_substitution_operator -> pushMode(PROMPT_TEMPLATE_SUBSTITUTION), type(Prompt_template_substitution_operator);

mode PROMPT_TEMPLATE_DEFINITION;

Prompt_template_definition_template_identifier:
    Fragment_template_identifier -> type(Template_identifier);

Prompt_template_definition_arg_list_begin:
    Fragment_arg_list_begin -> type(Arg_list_begin);

Prompt_template_definition_arg_list_end:
    Fragment_arg_list_end -> pushMode(PROMPT_TEMPLATE_DEFINITION_BODY), type(Arg_list_end) ;

Prompt_template_definition_arg_list_separator:
    Fragment_arg_list_separator -> type(Arg_list_separator);

mode PROMPT_TEMPLATE_DEFINITION_BODY;

Prompt_template_definition_natural_language_text_fragment:
    ('\n'~'\n' | ~[`#\n])+ -> type(Natural_language_text_fragment);

Prompt_template_definition_prompt_template_substitution_operator:
    Fragment_substitution_operator -> pushMode(PROMPT_TEMPLATE_SUBSTITUTION), type(Prompt_template_substitution_operator) ;

Prompt_template_definition_body_end:
    '\n''\n' -> popMode, popMode;

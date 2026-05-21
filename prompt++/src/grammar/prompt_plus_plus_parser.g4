parser grammar prompt_plus_plus_parser;

options { tokenVocab=prompt_plus_plus_lexer; }

prompt_plus_plus: 
    (named_prompt_template_definition)* prompt_template? EOF ;

prompt_template:
    (Natural_language_text_fragment | prompt_template_substitution)+ ;

prompt_template_substitution:
    Prompt_template_substitution_operator
    (Template_identifier Prompt_template_substitution_resolution_operator)* 
    Template_identifier 
    Arg_list_begin 
    prompt_template_substitution_arg_list?
    Arg_list_end ;

prompt_template_substitution_arg_list:
    prompt_template_substitution_actual_argument (Arg_list_separator prompt_template_substitution_arg_list)* ;

prompt_template_substitution_actual_argument:
    Natural_language_text_fragment | prompt_template_substitution;

named_prompt_template_definition:
    Prompt_template_definition_operator
    Template_identifier
    Arg_list_begin
    prompt_template_definition_arg_list?
    Arg_list_end 
    prompt_template
    Prompt_template_definition_body_end ;

prompt_template_definition_arg_list:
    Template_identifier 
    (Arg_list_separator prompt_template_definition_arg_list)* ;

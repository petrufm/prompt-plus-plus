
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { Prompt_plus_plusContext } from "./prompt_plus_plus_parser.js";
import { Prompt_templateContext } from "./prompt_plus_plus_parser.js";
import { Prompt_template_substitutionContext } from "./prompt_plus_plus_parser.js";
import { Prompt_template_substitution_arg_listContext } from "./prompt_plus_plus_parser.js";
import { Prompt_template_substitution_actual_argumentContext } from "./prompt_plus_plus_parser.js";
import { Named_prompt_template_definitionContext } from "./prompt_plus_plus_parser.js";
import { Prompt_template_definition_arg_listContext } from "./prompt_plus_plus_parser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `prompt_plus_plus_parser`.
 */
export class prompt_plus_plus_parserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `prompt_plus_plus_parser.prompt_plus_plus`.
     * @param ctx the parse tree
     */
    enterPrompt_plus_plus?: (ctx: Prompt_plus_plusContext) => void;
    /**
     * Exit a parse tree produced by `prompt_plus_plus_parser.prompt_plus_plus`.
     * @param ctx the parse tree
     */
    exitPrompt_plus_plus?: (ctx: Prompt_plus_plusContext) => void;
    /**
     * Enter a parse tree produced by `prompt_plus_plus_parser.prompt_template`.
     * @param ctx the parse tree
     */
    enterPrompt_template?: (ctx: Prompt_templateContext) => void;
    /**
     * Exit a parse tree produced by `prompt_plus_plus_parser.prompt_template`.
     * @param ctx the parse tree
     */
    exitPrompt_template?: (ctx: Prompt_templateContext) => void;
    /**
     * Enter a parse tree produced by `prompt_plus_plus_parser.prompt_template_substitution`.
     * @param ctx the parse tree
     */
    enterPrompt_template_substitution?: (ctx: Prompt_template_substitutionContext) => void;
    /**
     * Exit a parse tree produced by `prompt_plus_plus_parser.prompt_template_substitution`.
     * @param ctx the parse tree
     */
    exitPrompt_template_substitution?: (ctx: Prompt_template_substitutionContext) => void;
    /**
     * Enter a parse tree produced by `prompt_plus_plus_parser.prompt_template_substitution_arg_list`.
     * @param ctx the parse tree
     */
    enterPrompt_template_substitution_arg_list?: (ctx: Prompt_template_substitution_arg_listContext) => void;
    /**
     * Exit a parse tree produced by `prompt_plus_plus_parser.prompt_template_substitution_arg_list`.
     * @param ctx the parse tree
     */
    exitPrompt_template_substitution_arg_list?: (ctx: Prompt_template_substitution_arg_listContext) => void;
    /**
     * Enter a parse tree produced by `prompt_plus_plus_parser.prompt_template_substitution_actual_argument`.
     * @param ctx the parse tree
     */
    enterPrompt_template_substitution_actual_argument?: (ctx: Prompt_template_substitution_actual_argumentContext) => void;
    /**
     * Exit a parse tree produced by `prompt_plus_plus_parser.prompt_template_substitution_actual_argument`.
     * @param ctx the parse tree
     */
    exitPrompt_template_substitution_actual_argument?: (ctx: Prompt_template_substitution_actual_argumentContext) => void;
    /**
     * Enter a parse tree produced by `prompt_plus_plus_parser.named_prompt_template_definition`.
     * @param ctx the parse tree
     */
    enterNamed_prompt_template_definition?: (ctx: Named_prompt_template_definitionContext) => void;
    /**
     * Exit a parse tree produced by `prompt_plus_plus_parser.named_prompt_template_definition`.
     * @param ctx the parse tree
     */
    exitNamed_prompt_template_definition?: (ctx: Named_prompt_template_definitionContext) => void;
    /**
     * Enter a parse tree produced by `prompt_plus_plus_parser.prompt_template_definition_arg_list`.
     * @param ctx the parse tree
     */
    enterPrompt_template_definition_arg_list?: (ctx: Prompt_template_definition_arg_listContext) => void;
    /**
     * Exit a parse tree produced by `prompt_plus_plus_parser.prompt_template_definition_arg_list`.
     * @param ctx the parse tree
     */
    exitPrompt_template_definition_arg_list?: (ctx: Prompt_template_definition_arg_listContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}


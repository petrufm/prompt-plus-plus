// Generated from core/grammar/prompt_plus_plus_parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Prompt_plus_plusContext } from "./prompt_plus_plus_parser";
import { Prompt_templateContext } from "./prompt_plus_plus_parser";
import { Prompt_template_substitutionContext } from "./prompt_plus_plus_parser";
import { Prompt_template_substitution_arg_listContext } from "./prompt_plus_plus_parser";
import { Named_prompt_template_definitionContext } from "./prompt_plus_plus_parser";
import { Prompt_template_definition_arg_listContext } from "./prompt_plus_plus_parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `prompt_plus_plus_parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface prompt_plus_plus_parserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `prompt_plus_plus_parser.prompt_plus_plus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrompt_plus_plus?: (ctx: Prompt_plus_plusContext) => Result;

	/**
	 * Visit a parse tree produced by `prompt_plus_plus_parser.prompt_template`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrompt_template?: (ctx: Prompt_templateContext) => Result;

	/**
	 * Visit a parse tree produced by `prompt_plus_plus_parser.prompt_template_substitution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrompt_template_substitution?: (ctx: Prompt_template_substitutionContext) => Result;

	/**
	 * Visit a parse tree produced by `prompt_plus_plus_parser.prompt_template_substitution_arg_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrompt_template_substitution_arg_list?: (ctx: Prompt_template_substitution_arg_listContext) => Result;

	/**
	 * Visit a parse tree produced by `prompt_plus_plus_parser.named_prompt_template_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_prompt_template_definition?: (ctx: Named_prompt_template_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `prompt_plus_plus_parser.prompt_template_definition_arg_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrompt_template_definition_arg_list?: (ctx: Prompt_template_definition_arg_listContext) => Result;
}


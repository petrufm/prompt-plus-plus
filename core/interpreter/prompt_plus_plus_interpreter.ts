import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Prompt_plus_plusContext, Prompt_templateContext, Prompt_template_substitutionContext, Prompt_template_substitution_arg_listContext, Named_prompt_template_definitionContext, Prompt_template_definition_arg_listContext } from "../parser/prompt_plus_plus_parser";
import { prompt_plus_plus_parserVisitor } from "../parser/prompt_plus_plus_parserVisitor";

interface NamePromptTemplate {
  name: string;
  parameters: string[];
  body: Prompt_templateContext;
}

export class PromptPlusPlusInterpreter implements prompt_plus_plus_parserVisitor<string[]> {
  
  private named_prompt_template: Map<string, NamePromptTemplate> = new Map();

  visitPrompt_plus_plus(ctx: Prompt_plus_plusContext): string[] {
    for (const named_prompt_template_definition of ctx.named_prompt_template_definition()) {
      named_prompt_template_definition.accept(this);
    }
    return ctx.prompt_template()?.accept(this) || [];
  }

  visitPrompt_template(ctx: Prompt_templateContext): string[] {
    let result: string = "";
    for (const child of ctx.children || []) {
        result += child.accept(this);
    }
    return [result];
  }

  visitTerminal(node: TerminalNode): string[] {
    return [node.toString()];
  }
    
  visitPrompt_template_substitution(ctx: Prompt_template_substitutionContext): string[] {
    let result:string[] = [];
    let customizedTemplatePath = ctx.Template_identifier().flatMap(id => id.accept(this));
    let argsActualValues = ctx.prompt_template_substitution_arg_list()?.accept(this) || [];

    // Look up template to customize
    // const template = this.templates.get(templateName);
    // if (!template) {
    //   throw new Error(`Undefined template: ${templateName}`);
    // }

    return [];
  }

    visitPrompt_template_substitution_arg_list(ctx: Prompt_template_substitution_arg_listContext): string[] {
      let result:string[] = [];
      for (const child of ctx.prompt_template_substitution_arg_list()) {
        result.push(...child.accept(this));
      }
      return result;
    }

  visitNamed_prompt_template_definition(ctx: Named_prompt_template_definitionContext): string[] {
    let formalParameters: string[] = ctx.prompt_template_definition_arg_list()?.accept(this) || [];
    this.named_prompt_template.set(ctx.Template_identifier().text, 
      {
        name: ctx.Template_identifier().text,
        parameters: formalParameters,
        body: ctx.prompt_template()
      });
    return [];
  }

  visitPrompt_template_definition_arg_list(ctx: Prompt_template_definition_arg_listContext): string[] {
    return [
      ...ctx.Template_identifier().accept(this),
      ...ctx.prompt_template_definition_arg_list().map(arg => arg.accept(this)).flat()
    ];
  }

  visit(tree: ParseTree): string[] {
      return tree.accept(this);
  }

  visitChildren(node: RuleNode): string[] {
    let result = "";
    for (let i = 0; i < node.childCount; i++) {
      result += this.visit(node.getChild(i));
    }
    return [result];
  }

  visitErrorNode(node: ErrorNode): string[] {
    return [];
  }

  private parseSubstitutionArgs(argsString: string): string[] {
    if (!argsString.trim()) return [];
    return argsString.split(",").map(arg => arg.trim());
  }

  private parseDefinitionArgs(argsString: string): string[] {
    if (!argsString.trim()) return [];
    return argsString.split(",").map(arg => arg.trim());
  }

  private substituteTemplate(template: NamePromptTemplate, args: string[]): string {
    if (template.parameters.length !== args.length) {
      console.warn(`Template ${template.name} expects ${template.parameters.length} arguments, got ${args.length}`);
    }

    // Create a temporary parameter map
    const paramMap = new Map<string, string>();
    for (let i = 0; i < Math.min(template.parameters.length, args.length); i++) {
      paramMap.set(template.parameters[i], args[i]);
    }

    // Evaluate the body with parameter substitution
    return this.evaluateTemplateBody(template.body, paramMap);
  }

  private evaluateTemplateBody(bodyContext: Prompt_templateContext, paramMap: Map<string, string>): string {
    let result = "";
    for (const child of bodyContext.children || []) {
      if (child instanceof TerminalNode) {
        // Check if this terminal is a parameter that should be substituted
        const text = child.text;
        let substituted = text;
        for (const [param, value] of paramMap) {
          substituted = substituted.replace(new RegExp(`\\b${param}\\b`, 'g'), value);
        }
        result += substituted;
      } else if (child instanceof Prompt_template_substitutionContext) {
        result += this.visitPrompt_template_substitution(child);
      }
    }
    return result;
  }
}

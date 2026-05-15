import fs from 'fs';

import { ErrorNode, ParseTree, TerminalNode, CharStream, CommonTokenStream } from "antlr4ng";
import { Prompt_plus_plusContext, Prompt_templateContext, Prompt_template_substitutionContext, Prompt_template_substitution_arg_listContext, Named_prompt_template_definitionContext, Prompt_template_definition_arg_listContext, prompt_plus_plus_parser, Prompt_template_substitution_actual_argumentContext } from "../parser/prompt_plus_plus_parser";
import { prompt_plus_plus_parserVisitor } from "../parser/prompt_plus_plus_parserVisitor";
import { prompt_plus_plus_lexer } from '../parser/prompt_plus_plus_lexer';

interface NamedPromptTemplate {
  name: string;
  formalParameters: string[];
  body: Prompt_templateContext;
}

interface ProptTemplateInterpretationFrame {
  formalParameters: string[];
  actualParameters: string[];
}

export class SemanticalError extends Error {}

export class PromptPlusPlusInterpreter extends prompt_plus_plus_parserVisitor<string[]> {
  
  private prompTemplatePathAbsolute: string;

  private loaded_named_prompt_template: Map<string, NamedPromptTemplate> = new Map();

  private interpretationStack = new Array<ProptTemplateInterpretationFrame>();

  constructor(templateAbsolutePath: string) {
    
    super();
      
    this.prompTemplatePathAbsolute = templateAbsolutePath;

    this.visitPrompt_plus_plus = (ctx: Prompt_plus_plusContext) : string[] => {
      for (const named_prompt_template_definition of ctx.named_prompt_template_definition()) {
        named_prompt_template_definition.accept(this);
      }
      return [(ctx.prompt_template()?.accept(this) as string[])[0]];
    }

    this.visitPrompt_template = (ctx: Prompt_templateContext) : string[] => {
      let result: string[] = [];
      for (const child of ctx.children) {
        result.push((child.accept(this) as string[])[0]);
      }
      return result;
    }

    this.visitTerminal = (node: TerminalNode): string[] => {
      return [node.getText()];
    }
    
    this.visitPrompt_template_substitution = (ctx: Prompt_template_substitutionContext): string[] => {
      let customizedTemplatePath = ctx.Template_identifier().flatMap(id => id.accept(this)).join("/");
      let argsActualValues = ctx.prompt_template_substitution_arg_list()?.accept(this) || [];

      //Template lookup
      if (this.interpretationStack.length > 0 && this.interpretationStack.at(-1)?.formalParameters.includes(customizedTemplatePath)) {
        //Substitute with an actual parameter
        //Semantical check: Ensure the number of actual arguments is 0
        if (argsActualValues.length !== 0) {
          throw new SemanticalError(`Template ${customizedTemplatePath} expects 0 arguments, got ${argsActualValues.length}`);
        }
        let top = this.interpretationStack.at(-1);
        return [top!.actualParameters[top!.formalParameters.indexOf(customizedTemplatePath)]];
      } else {
        //Substitute with a named template
        let template = this.loaded_named_prompt_template.get(customizedTemplatePath);
        if (!template) {
          const fullFilePath = this.prompTemplatePathAbsolute + "/" + ctx.Template_identifier().slice(0, -1).flatMap(id => id.accept(this)).join("/").concat(".prompt++");
          if (fs.existsSync(fullFilePath) && fs.statSync(fullFilePath).isFile()) {
            let input = fs.readFileSync(fullFilePath, "utf-8");
            const charStream = CharStream.fromString(input);
            const lexer = new prompt_plus_plus_lexer(charStream);
            const tokens = new CommonTokenStream(lexer);
            const parser = new prompt_plus_plus_parser(tokens);
            const tree = parser.prompt_plus_plus();
            if (parser.numberOfSyntaxErrors == 0) {
                //(tree.accept(this) as string[])[0]
            } else {
              throw new SemanticalError(`Syntax errors in prompt template module: ${fullFilePath}`);
            }
            template = this.loaded_named_prompt_template.get(customizedTemplatePath);
          }
        }
        if (!template) {
          throw new SemanticalError(`Undefined template: ${customizedTemplatePath}`);
        }

        //Semantical check: Ensure the number of actual arguments matches the number of formal parameters
        if (argsActualValues.length !== template.formalParameters.length) {
          throw new SemanticalError(`Template ${customizedTemplatePath} expects ${template.formalParameters.length} arguments, got ${argsActualValues.length}`);
        } 
        this.interpretationStack.push({ formalParameters: template.formalParameters, actualParameters: argsActualValues });
        let result = template.body.accept(this) as string[];  
        this.interpretationStack.pop();
        return result;
      }
    }

    this.visitPrompt_template_substitution_arg_list = (ctx: Prompt_template_substitution_arg_listContext): string[] => {
      let result:string[] = [];
      result.push((ctx.prompt_template_substitution_actual_argument().accept(this) as string[])[0]);
      for (const child of ctx.prompt_template_substitution_arg_list()) {
        result.push((child.accept(this) as string[])[0]);
      }
      return result;
    }

    this.visitNamed_prompt_template_definition = (ctx: Named_prompt_template_definitionContext): string[] => {
      let formalParams: string[] = ctx.prompt_template_definition_arg_list()?.accept(this) as string[];
      
      /*Semantical check: Ensure formal argument names are unique*/
      if (new Set(formalParams).size !== formalParams.length) {
        throw new SemanticalError(`Duplicate parameter names in prompt template: ${ctx.Template_identifier().getText()} parameters: ${formalParams.join(", ")}`);
      }
      
      /*Semantical check: Ensure template name is unique*/
      if (this.loaded_named_prompt_template.has(ctx.Template_identifier().getText())) {
        throw new SemanticalError(`Duplicate template name: ${ctx.Template_identifier().getText()}`);
      }

      this.loaded_named_prompt_template.set(ctx.Template_identifier().getText(), 
        {
          name: ctx.Template_identifier().getText(),
          formalParameters: formalParams,
          body: ctx.prompt_template()
        });

      return [];
    }

    this.visitPrompt_template_definition_arg_list = (ctx: Prompt_template_definition_arg_listContext) : string[] => {
      return [
        ...(ctx.Template_identifier().accept(this) as string[]),
        ...ctx.prompt_template_definition_arg_list().map(arg => arg.accept(this) as string[]).flat()
      ];
    }

    this.visit = (tree: ParseTree): string[] => {
      return tree.accept(this) ?? [];
    }

    this.visitChildren = (node: ParseTree): string[] => {
      let result = "";
      for (let i = 0; i < node.getChildCount(); i++) {
        result += node.getChild(i)!.accept(this);
      }
      return [result];
    }

    this.visitErrorNode = (node: ErrorNode): string[] => {
      throw new Error('Method not implemented.');
    }

    this.visitPrompt_template_substitution_actual_argument = (ctx: Prompt_template_substitution_actual_argumentContext): string[] => {
      throw new Error('Method not implemented.');
    }
  }
}
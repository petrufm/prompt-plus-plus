import { TerminalNode, CharStream, CommonTokenStream, ParseTree } from "antlr4ng";
import { Prompt_plus_plusContext, Prompt_templateContext, Prompt_template_substitutionContext, Prompt_template_substitution_arg_listContext, Named_prompt_template_definitionContext, Prompt_template_definition_arg_listContext, prompt_plus_plus_parser, Prompt_template_substitution_actual_argumentContext } from "../parser/prompt_plus_plus_parser";
import { prompt_plus_plus_parserVisitor } from "../parser/prompt_plus_plus_parserVisitor";
import { prompt_plus_plus_lexer } from '../parser/prompt_plus_plus_lexer';
import { CountingErrorHandler, SyntaxErrorCallback } from "../parser/prompt_error_handler";

interface NamedPromptTemplate {
  name: string;
  formalParameters: string[];
  body: Prompt_templateContext;
}

interface ProptTemplateInterpretationFrame {
  formalParameters: string[];
  actualParameters: string[];
}

export class InterpretationError extends Error {}

export class PromptPlusPlusInterpreter extends prompt_plus_plus_parserVisitor<Promise<string[]>> {
  
  private moduleSearchHandler: (module: string) => Promise<string | null>;

  private loaded_named_prompt_template: Map<string, NamedPromptTemplate> = new Map();

  private interpretationStack = new Array<ProptTemplateInterpretationFrame>();

  private moduleStack = new Array<string>();

  constructor(
    moduleSearchHandler: (module: string) => Promise<string | null>,
    private readonly onSyntaxError?: SyntaxErrorCallback,
    private readonly removeDefaultErrorListeners = false
  ) {
    
    super();
      
    this.moduleSearchHandler = moduleSearchHandler;

    this.visitPrompt_plus_plus = async (ctx: Prompt_plus_plusContext) : Promise<string[]> => {
      for (const named_prompt_template_definition of ctx.named_prompt_template_definition()) {
        await named_prompt_template_definition.accept(this);
      }
      return [(await ctx.prompt_template()?.accept(this) as string[] || [""])[0]];
    }

    this.visitPrompt_template = async (ctx: Prompt_templateContext) : Promise<string[]> => {
      let result: string = "";
      for (const child of ctx.children) {
        result += (await child.accept(this) as string[])[0];
      }
      return [result];
    }

    this.visitTerminal = async (node: TerminalNode): Promise<string[]> => {
      let tmp = node.getText();
      if (node.getPayload()!.type === prompt_plus_plus_lexer.Natural_language_text_fragment) {
        //Interprete escaped characters
        let nextBrother = null;
        let searchedNode : ParseTree | null = node;
        all:while (searchedNode.parent !== null) {
          for (let i = 0; i < searchedNode.parent.getChildCount() ; i++) {
            if (searchedNode === searchedNode.parent.getChild(i)) {
              if (i + 1 < searchedNode.parent.getChildCount()) {
                nextBrother = searchedNode.parent.getChild(i + 1);
                while (nextBrother!.getChildCount() > 0) {
                  nextBrother = nextBrother!.getChild(0);
                }
                break all;
              }
            }
          }
          searchedNode = searchedNode!.parent;
        }
        let lessGreaterCommaAreEscaped = this.symbolsLessThanHigherThanCommaMustBeescaped(node);
        let result : string[] = [];
        for (let i = tmp.length - 1; i >= 0; i--) {
            let currentChar = tmp.charAt(i);

            //Case of escaped ` and ^ (always) 
            {
              let escapePreviousBackSlashes = false;
              if (currentChar === '\\' && i === tmp.length - 1 && (nextBrother?.getText() === '`' || nextBrother?.getText() === '^' || nextBrother?.getText().startsWith('\n'))) {
                escapePreviousBackSlashes = true;
              } else if (currentChar === '`' || currentChar === '^' || currentChar === '\n') {
                result.push(currentChar);
                escapePreviousBackSlashes = (i >= 1 && tmp.charAt(i - 1) === '\\');
                if (escapePreviousBackSlashes) {
                  i--;
                } else {
                  continue;
                }
              }
              if (escapePreviousBackSlashes) {
                let includeNext = false;
                while (escapePreviousBackSlashes && i >= 0 && tmp.charAt(i) === '\\') {
                  if (includeNext) {
                    result.push('\\');
                  }
                  includeNext = !includeNext;
                  i--;
                }
                i++;
                continue;
              }
            }

            //Case of < , > in arguments
            if (lessGreaterCommaAreEscaped) {
              let escapePreviousBackSlashes = false;
              if(currentChar === '\\' && i === tmp.length - 1 && (nextBrother?.getText() === '<' || nextBrother?.getText() === '>' || nextBrother?.getText() === ',')) {
                escapePreviousBackSlashes = true;
              }
              if (currentChar === '<' || currentChar === '>' || currentChar === ',') {
                result.push(currentChar);
                i--;
                //This should always happen
                escapePreviousBackSlashes ||= (i >= 0 && tmp.charAt(i) === '\\');
              }
              if (escapePreviousBackSlashes) {
                let includeNext = false;
                while (escapePreviousBackSlashes && i >= 0 && tmp.charAt(i) === '\\') {
                  if (includeNext) {
                    result.push('\\');
                  }
                  includeNext = !includeNext;
                  i--;
                }
                i++;
                continue;
              }
            }

            result.push(currentChar);
        }
        return [result.reverse().join("")];
      }
      return [tmp];
    }
    
    this.visitPrompt_template_substitution = async (ctx: Prompt_template_substitutionContext): Promise<string[]> => {
      let modulePath = "";
      for (let i = 0; i < ctx.Template_identifier().length - 1; i++) {
        modulePath += (await ctx.Template_identifier(i)?.accept(this) as string[])[0];
        if (i < ctx.Template_identifier().length - 2) {
          modulePath += "/";
        }
      }
      let templatePath = ""; 
      for (let i = 0; i < ctx.Template_identifier().length; i++) {
        templatePath += (await ctx.Template_identifier(i)?.accept(this) as string[])[0];
        if (i < ctx.Template_identifier().length - 1) {
          templatePath += "/";
        }
      }
      let argsActualValues = await ctx.prompt_template_substitution_arg_list()?.accept(this) || [];

      //Template lookup
      if (this.interpretationStack.length > 0 && this.interpretationStack.at(-1)?.formalParameters.includes(templatePath)) {
        //Substitute with an actual parameter
        //Semantical check: Ensure the number of actual arguments is 0
        if (argsActualValues.length !== 0) {
          throw new InterpretationError(`Template ${templatePath} expects 0 arguments, got ${argsActualValues.length}`);
        }
        let top = this.interpretationStack.at(-1);
        return [top!.actualParameters[top!.formalParameters.indexOf(templatePath)]];
      } else {
        //Substitute with a named template
        let template = this.loaded_named_prompt_template.get(templatePath);
        if (!template) {
          if (modulePath.length > 0) {
            let input = await this.moduleSearchHandler(modulePath);   
            if (input !== null) {
              //Clear BOM and normalize line endings
              input = input.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
              const charStream = CharStream.fromString(input);
              const lexer = new prompt_plus_plus_lexer(charStream);
              if (this.removeDefaultErrorListeners) {
                lexer.removeErrorListeners();
              }
              const errorCounter = new CountingErrorHandler(modulePath, this.onSyntaxError);
              lexer.addErrorListener(errorCounter);
              const tokens = new CommonTokenStream(lexer);
              const parser = new prompt_plus_plus_parser(tokens);
              if (this.removeDefaultErrorListeners) {
                parser.removeErrorListeners();
              }
              parser.addErrorListener(errorCounter);
              const tree = parser.prompt_plus_plus();
              if (parser.numberOfSyntaxErrors == 0 && !errorCounter.hasErrors()) {
                this.moduleStack.push(modulePath);
                await tree.accept(this);
                this.moduleStack.pop();
              } else {
                throw new InterpretationError(`Syntax errors in prompt template module: ${modulePath}`);
              }
              template = this.loaded_named_prompt_template.get(templatePath);
            }
          }
        }
        if (!template) {
          throw new InterpretationError(`Undefined template: ${templatePath}`);
        }

        //Semantical check: Ensure the number of actual arguments matches the number of formal parameters
        if (argsActualValues.length !== template.formalParameters.length) {
          throw new InterpretationError(`Template ${templatePath} expects ${template.formalParameters.length} arguments, got ${argsActualValues.length}`);
        } 
        this.interpretationStack.push({ formalParameters: template.formalParameters, actualParameters: argsActualValues });
        let result = (await template.body.accept(this) as string[])[0];  
        this.interpretationStack.pop();
        return [result];
      }
    }

    this.visitPrompt_template_substitution_arg_list = async (ctx: Prompt_template_substitution_arg_listContext): Promise<string[]> => {
      let result:string[] = [];
      result.push((await ctx.prompt_template_substitution_actual_argument().accept(this) as string[])[0]);
      for (const child of ctx.prompt_template_substitution_arg_list()) {
        result.push(...await child.accept(this) as string[]);
      }
      return result;
    }

    this.visitNamed_prompt_template_definition = async (ctx: Named_prompt_template_definitionContext): Promise<string[]> => {
      let formalParams: string[] = (await ctx.prompt_template_definition_arg_list()?.accept(this) || []) as string[];
      
      /*Semantical check: Ensure formal argument names are unique*/
      if (new Set(formalParams).size !== formalParams.length) {
        throw new InterpretationError(`Duplicate parameter names in prompt template: ${ctx.Template_identifier().getText()} parameters: ${formalParams.join(", ")}`);
      }
      
      /*Semantical check: Ensure template name is unique*/
      if (this.loaded_named_prompt_template.has(ctx.Template_identifier().getText())) {
        throw new InterpretationError(`Duplicate template name: ${ctx.Template_identifier().getText()}`);
      }

      const templateFullPath = (this.moduleStack.length > 0 ? this.moduleStack.at(-1) + "/" : "") + ctx.Template_identifier().getText();
      this.loaded_named_prompt_template.set(templateFullPath, 
        {
          name: templateFullPath,
          formalParameters: formalParams,
          body: ctx.prompt_template()
        });

      return [];
    }

    this.visitPrompt_template_definition_arg_list = async (ctx: Prompt_template_definition_arg_listContext): Promise<string[]> => {
      let result : string[] = [];
      result.push((await ctx.Template_identifier().accept(this) as string[])[0]);
      for (const child of ctx.prompt_template_definition_arg_list()) {
        result.push(...await child.accept(this) as string[]);
      }
      return result;
    }

    this.visitPrompt_template_substitution_actual_argument = async (ctx: Prompt_template_substitution_actual_argumentContext): Promise<string[]> => {
      let result:string[] = [];
      for (const child of ctx.children) {
        result.push((await child.accept(this) as string[])[0]);
      }
      return result;
    }
  }

  private symbolsLessThanHigherThanCommaMustBeescaped(node : ParseTree) : boolean {
    let currentNode : ParseTree | null;
    currentNode = node;
    while (currentNode !== null) {
      if (currentNode instanceof Prompt_template_substitution_actual_argumentContext) {
        return true;
      }
      currentNode = currentNode.parent;
    }
    return false;
  }
}

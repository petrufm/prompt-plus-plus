import { openDB } from "idb";

import { CharStream, CommonTokenStream, ANTLRErrorListener, ATNConfigSet, BitSet, DFA, Parser, ATNSimulator, RecognitionException, Recognizer, Token } from "antlr4ng";
import { prompt_plus_plus_lexer } from "prompt-plus-plus";
import { prompt_plus_plus_parser } from "prompt-plus-plus";
import { PromptPlusPlusInterpreter } from "prompt-plus-plus";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "promptpp_root",
    title: "prompt++",
    contexts: ["editable"]
  });

  chrome.contextMenus.create({
    id: "promptpp_substitute",
    parentId: "promptpp_root",
    title: "Interpret",
    contexts: ["editable"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId !== "promptpp_substitute" || !tab?.id) {
     return;
    }
    const res = await chrome.tabs.sendMessage(tab.id, {
       type: "PROMPTPP_GET_TEXT"
    });
    if (res && res.text && res.text.length > 0) {
      //Interprete the input
      try {
        //Clear BOM and normalize line endings
        const input = res.text.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
        const charStream = CharStream.fromString(input);
        const lexer = new prompt_plus_plus_lexer(charStream);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new CustomizedErrorHandler());
        const tokens = new CommonTokenStream(lexer);
        const parser = new prompt_plus_plus_parser(tokens);
        parser.removeErrorListeners();
        parser.addErrorListener(new CustomizedErrorHandler());
        const tree = parser.prompt_plus_plus();
        if (parser.numberOfSyntaxErrors === 0) {
          const interpreter = new PromptPlusPlusInterpreter(async (searchedModule : string) : Promise<string | null> => {
            const db = await openDB("promptpp", 1, {
              upgrade(db) {
                db.createObjectStore("handles");
              }
            });
            const storedHandles = await db.get("handles", "promptppTemplatePath");
            const storedUrls = await db.get("handles", "promptppTemplateUrls");
            // Try local folders roots first
            if (storedHandles) {
              const roots = Array.isArray(storedHandles) ? storedHandles : [storedHandles];
              for (const root of roots) {
                try {
                  const parts = searchedModule.split("/");
                  const fileName = parts.pop()!;
                  let dir = root;
                  for (const folder of parts) {
                    dir = await dir.getDirectoryHandle(folder, { create: false });
                  }
                  const fileHandle = await dir.getFileHandle(fileName + ".prompt++");
                  const file = await fileHandle.getFile();
                  return await file.text();
                } catch (error) {
                  // try next local root
                }
              }
            }
            // Then try URLs
            if (storedUrls) {
              const urls = Array.isArray(storedUrls) ? storedUrls : [storedUrls];
              for (const rootUrlCandidate of urls) {
                try {
                  const rootUrl = rootUrlCandidate.endsWith("/") ? rootUrlCandidate : `${rootUrlCandidate}/`;
                  const parts = searchedModule.split("/");
                  const fileName = parts.pop()!;
                  const moduleFilePath = parts.length > 0 ? `${parts.join("/")}/${fileName}.prompt++` : `${fileName}.prompt++`;
                  const url = new URL(moduleFilePath, rootUrl);
                  url.searchParams.set("_cb", String(Date.now()));
                  const response = await fetch(url.href, { cache: "no-store" });
                  if (response.ok) {
                    return await response.text();
                  }
                } catch (error) {
                  // try next url root
                }
              }
            }
            return null;
          });
          const result = (await tree.accept(interpreter) as string[])[0];
          //Replace with the result
          chrome.tabs.sendMessage(tab.id, {
            type: "PROMPTPP_SET_TEXT",
            text: result
          });
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (msg: string) => {
            alert("prompt++: Error interpreting the prompt template - " + msg);
          },
          args: [message]
        });
      }
    } 
});

 class CustomizedErrorHandler implements ANTLRErrorListener {
    syntaxError<S extends Token, T extends ATNSimulator>(recognizer: Recognizer<T>, offendingSymbol: S | null, line: number, charPositionInLine: number, msg: string, e: RecognitionException | null): void {
      const customMessage = `Syntax error at line ${line}, column ${charPositionInLine}: ${msg}`;        
      throw new Error(customMessage);
    }
    reportAmbiguity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet): void {
    }
    reportAttemptingFullContext(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, configs: ATNConfigSet): void {
    }
    reportContextSensitivity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: ATNConfigSet): void {
    }
}

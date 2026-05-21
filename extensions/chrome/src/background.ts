import { openDB } from "idb";

import { CharStream, CommonTokenStream } from "antlr4ng";
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
      const charStream = CharStream.fromString(res.text);
      const lexer = new prompt_plus_plus_lexer(charStream);
      const tokens = new CommonTokenStream(lexer);
      const parser = new prompt_plus_plus_parser(tokens);
      const tree = parser.prompt_plus_plus();
      if (parser.numberOfSyntaxErrors === 0) {
        const interpreter = new PromptPlusPlusInterpreter(async (searchedModule : string) : Promise<string | null> => {
          const db = await openDB("promptpp", 1, {
            upgrade(db) {
              db.createObjectStore("handles");
            }
          });
          const stored = await db.get("handles", "promptppTemplatePath");
          if (stored) {
            const roots = Array.isArray(stored) ? stored : [stored];
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
                // Just for debugging
                // chrome.scripting.executeScript({
                //   target: { tabId: tab.id ?? 0 },
                //   func: (msg: any) => {
                //     alert("Error - " + msg);
                //   },
                //   args: [error instanceof Error ? error.message : String(error)]
                // });
              }
            }
          }
          return null;
        });
        try {
          const result = (await tree.accept(interpreter) as string[])[0];
          //Replace with the result
          chrome.tabs.sendMessage(tab.id, {
            type: "PROMPTPP_SET_TEXT",
            text: result
          });
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (msg: string) => {
              alert("Error interpreting the prompt template - " + msg);
            },
            args: [message]
          });
        }
      }
    } 
});

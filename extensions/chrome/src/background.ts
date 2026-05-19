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
    title: "Interprete",
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
        const interpreter = new PromptPlusPlusInterpreter((searchedModule : string) : string | null => {
          const root = chrome.storage.local.get("promptppTemplatePath");
          root.then((root) => {
            const parts = searchedModule.split("/");
            let currentDir : any = root;
            for (let i = 0; i < parts.length - 1; i++) {
              currentDir = currentDir.getDirectoryHandle(parts[i]);
            }
            const fileHandle = currentDir.getFileHandle(parts[parts.length - 1]);
            const file = fileHandle.getFile();
            return file.text();
          });
          return null;
        });
        const result = (tree.accept(interpreter) as string[])[0];
        //Replace with the result
        chrome.tabs.sendMessage(tab.id, {
          type: "PROMPTPP_SET_TEXT",
          text: result
        });
      }
    } 
});

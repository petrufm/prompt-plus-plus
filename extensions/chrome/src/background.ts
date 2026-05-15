//import { CharStream, CommonTokenStream } from "antlr4ng";
//import { prompt_plus_plus_lexer } from "prompt-plus-plus";
//import { prompt_plus_plus_parser } from "prompt-plus-plus";
//import { PromptPlusPlusInterpreter } from "prompt-plus-plus";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "promptpp_root",
    title: "prompt++",
    contexts: ["selection", "editable"]
  });

  chrome.contextMenus.create({
    id: "promptpp_substitute",
    parentId: "promptpp_root",
    title: "Substitute",
    contexts: ["selection", "editable"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== "promptpp_substitute" || !tab?.id) return;

  const res = await chrome.tabs.sendMessage(tab.id, {
    type: "GET_TEXT"
  });

  const inputText = res?.text ?? "";

  const result = runParser(inputText);

  if (!result) return;

  chrome.tabs.sendMessage(tab.id, {
    type: "SET_TEXT",
    text: result
  });

});

function runParser(input: string) {
  //const charStream = CharStream.fromString(input);
  //const lexer = new prompt_plus_plus_lexer(charStream);
  //const tokens = new CommonTokenStream(lexer);
  //const parser = new prompt_plus_plus_parser(tokens);

  //const tree = parser.prompt_plus_plus();

  //if (parser.numberOfSyntaxErrors === 0) {
    //const interpreter = new PromptPlusPlusInterpreter(".");
    //return (tree.accept(interpreter) as string[])[0];
  //}

  return "cucu";
}
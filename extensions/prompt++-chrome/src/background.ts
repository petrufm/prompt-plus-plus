import { openDB } from "idb";

import { interpret, ModuleResolver } from "prompt-plus-plus";

async function sendMessageToContentScript<T = unknown>(
  tabId: number,
  message: { type: string; text?: string }
): Promise<T> {
  try {
    return await chrome.tabs.sendMessage(tabId, message);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (!errorMessage.includes("Receiving end does not exist")) {
      throw error;
    }

    await chrome.scripting.executeScript({
      target: { tabId },
      files: ["dist/content.js"]
    });

    return await chrome.tabs.sendMessage(tabId, message);
  }
}

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
    const res = await sendMessageToContentScript<{ text?: string }>(tab.id, {
       type: "PROMPTPP_GET_TEXT"
    });
    if (res && res.text && res.text.length > 0) {
      try {
        const moduleResolver: ModuleResolver = async (searchedModule: string): Promise<string | null> => {
            const db = await openDB("promptpp", 1, {
              upgrade(db) {
                db.createObjectStore("handles");
              }
            });
            const storedHandles = await db.get("handles", "promptppTemplateFolders");
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
        };
        const result = await interpret(res.text, moduleResolver, "browser input", {
          removeDefaultErrorListeners: true,
          onSyntaxError: ({ line, column, message }) => {
            throw new Error(`Syntax error at line ${line}, column ${column}: ${message}`);
          }
        });
          //Replace with the result
          await sendMessageToContentScript(tab.id, {
            type: "PROMPTPP_SET_TEXT",
            text: result
          });
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

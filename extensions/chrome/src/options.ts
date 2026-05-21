import { openDB } from "idb";

const promptpp_settings_clearAll = document.getElementById("prompt++_settings_clearAll") as HTMLButtonElement;
const promptpp_settings_pickfolder = document.getElementById("prompt++_settings_pickFolder") as HTMLButtonElement;
const promptpp_settings_handlerStatus = document.getElementById("prompt++_settings_handlersStatus") as HTMLParagraphElement;
const promptpp_settings_urlStatus = document.getElementById("prompt++_settings_urlStatus") as HTMLParagraphElement;
const promptpp_settings_urlList = document.getElementById("prompt++_settings_urlList") as HTMLUListElement;
const promptpp_settings_urlInput = document.getElementById("prompt++_settings_urlInput") as HTMLInputElement;
const promptpp_settings_addUrl = document.getElementById("prompt++_settings_addUrl") as HTMLButtonElement;

async function init() {
  const db = await openDB("promptpp", 1, {
    upgrade(db) {
      db.createObjectStore("handles");
    }
  });
  const storedHandles = await db.get("handles", "promptppTemplateFolders");
  const storedUrls = await db.get("handles", "promptppTemplateUrls");
  if (storedHandles) {
    const roots = Array.isArray(storedHandles) ? storedHandles : [storedHandles];
    promptpp_settings_handlerStatus.textContent = `${roots.length} folder Prompt Template Path(s) Set`;
  }
  if (storedUrls) {
    promptpp_settings_urlStatus.textContent = `${Array.isArray(storedUrls) ? storedUrls.length : 1} URL Prompt Template Path(s) Set`;
  }
  displayUrls(storedUrls);
}

function displayUrls(stored: any) {
  while (promptpp_settings_urlList.firstChild) {
    promptpp_settings_urlList.removeChild(promptpp_settings_urlList.firstChild);
  }
  if (!stored) return;
  const urls = Array.isArray(stored) ? stored : [stored];
  for (const url of urls) {
    const li = document.createElement("li");
    li.textContent = String(url);
    promptpp_settings_urlList.appendChild(li);
  }
}

init();

promptpp_settings_pickfolder.addEventListener("click", async () => {
  const w = window as any;
  if (!w.showDirectoryPicker) {
    promptpp_settings_handlerStatus.textContent = "File System Access API not supported";
    return;
  }
  try {
    const dirHandle = await w.showDirectoryPicker();
    const db = await openDB("promptpp", 1, {
      upgrade(db) {
        db.createObjectStore("handles");
      }
    });
    const existing = await db.get("handles", "promptppTemplatePath");
    let roots: any[] = [];
    if (existing) {
      roots = Array.isArray(existing) ? existing : [existing];
    }
    roots.push(dirHandle);
    await db.put("handles", roots, "promptppTemplatePath");
    promptpp_settings_handlerStatus.textContent = `${roots.length} folder prompt template path(s) set`;
  } catch (e) {
    promptpp_settings_handlerStatus.textContent = "Folder selection not saved";
  }
});

promptpp_settings_addUrl.addEventListener("click", async () => {
  const value = (promptpp_settings_urlInput.value || "").trim();
  try {
    new URL(value);
  } catch {
    promptpp_settings_urlStatus.textContent = "Invalid URL";
    return;
  }
  try {
    const db = await openDB("promptpp", 1, {
      upgrade(db) {
        db.createObjectStore("handles");
      }
    });
    const existing = await db.get("handles", "promptppTemplateUrls");
    let urls: string[] = [];
    if (existing) {
      urls = Array.isArray(existing) ? existing : [existing];
    }
    if (!urls.includes(value)) {
      urls.push(value);
      await db.put("handles", urls, "promptppTemplateUrls");
      displayUrls(urls);
      promptpp_settings_urlStatus.textContent = `${urls.length} URL Prompt Template Path(s) Set`;
      promptpp_settings_urlInput.value = "";
    }
  } catch (e) {
    promptpp_settings_urlStatus.textContent = "Failed to save URL";
  }
});

promptpp_settings_clearAll.addEventListener("click", async () => {
  try {
    const db = await openDB("promptpp", 1, {
      upgrade(db) {
        db.createObjectStore("handles");
      }
    });
    await db.delete("handles", "promptppTemplatePath");
    await db.delete("handles", "promptppTemplateUrls");
    promptpp_settings_handlerStatus.textContent = "No Local Folder Set";
    promptpp_settings_urlStatus.textContent = "No URL Set";
    displayUrls(null);
  } catch (e) {
    promptpp_settings_urlStatus.textContent = "No URL Set";
    promptpp_settings_handlerStatus.textContent = "Failed to clear saved folders/URLs";
  }
});
import { openDB } from "idb";

const promptpp_settings_pickfolder = document.getElementById("prompt++_settings_pickFolder") as HTMLButtonElement;
const promptpp_settings_status = document.getElementById("prompt++_settings_status") as HTMLParagraphElement;

async function init() {
  const db = await openDB("promptpp", 1, {
    upgrade(db) {
      db.createObjectStore("handles");
    }
  });
  const dirHandle = await db.get("handles", "promptppTemplatePath");
  console.log("dirHandleInit:", dirHandle);
  if (dirHandle) {
    promptpp_settings_status.textContent = "Prompt template path already saved";
  } else {
    promptpp_settings_status.textContent = "No prompt template path selected";
  }
}

init();

promptpp_settings_pickfolder.addEventListener("click", async () => {
  const w = window as any;
  if (!w.showDirectoryPicker) {
    promptpp_settings_status.textContent = "File System Access API not supported";
    return;
  }
  try {
    const dirHandle = await w.showDirectoryPicker();
    const db = await openDB("promptpp", 1, {
      upgrade(db) {
        db.createObjectStore("handles");
      }
    });
    console.log("dirHandleSave:", dirHandle);
    await db.put("handles", dirHandle, "promptppTemplatePath");
    promptpp_settings_status.textContent = "Prompt template path saved";  
  } catch (e) {
    promptpp_settings_status.textContent = "Folder selection cancelled";
  }
});
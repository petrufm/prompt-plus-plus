import { openDB } from "idb";

const promptpp_settings_pickfolder = document.getElementById("prompt++_settings_pickFolder") as HTMLButtonElement;
const promptpp_settings_status = document.getElementById("prompt++_settings_status") as HTMLParagraphElement;
const promptpp_settings_clear = document.getElementById("prompt++_settings_clearAll") as HTMLButtonElement;

async function init() {
  const db = await openDB("promptpp", 1, {
    upgrade(db) {
      db.createObjectStore("handles");
    }
  });
  const stored = await db.get("handles", "promptppTemplatePath");
  if (stored) {
    const roots = Array.isArray(stored) ? stored : [stored];
    promptpp_settings_status.textContent = `${roots.length} Prompt Template Path(s) set`;
  } else {
    promptpp_settings_status.textContent = "No Prompt Template Path(s) set";
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
    const existing = await db.get("handles", "promptppTemplatePath");
    let roots: any[] = [];
    if (existing) {
      roots = Array.isArray(existing) ? existing : [existing];
    }
    roots.push(dirHandle);
    await db.put("handles", roots, "promptppTemplatePath");
    promptpp_settings_status.textContent = `${roots.length} Prompt Template Path(s) set`;
  } catch (e) {
    promptpp_settings_status.textContent = "Folder selection not saved";
  }
});

promptpp_settings_clear.addEventListener("click", async () => {
  try {
    const db = await openDB("promptpp", 1, {
      upgrade(db) {
        db.createObjectStore("handles");
      }
    });
    await db.delete("handles", "promptppTemplatePath");
    promptpp_settings_status.textContent = "No Prompt Template Path(s) set";
  } catch (e) {
    promptpp_settings_status.textContent = "Failed to Clear Prompt Template Path(s)";
  }
});
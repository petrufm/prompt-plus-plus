const promptpp_settings_pickfolder = document.getElementById("prompt++_settings_pickFolder") as HTMLButtonElement;
const promptpp_settings_status = document.getElementById("prompt++_settings_status") as HTMLParagraphElement;

async function init() {
  const res = await chrome.storage.local.get("promptppTemplatePath");
  if (res.promptppTemplatePath) {
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
    await chrome.storage.local.set({
      promptppTemplatePath: dirHandle
    });
    promptpp_settings_status.textContent = "Prompt template path saved";  
  } catch (e) {
    promptpp_settings_status.textContent = "Folder selection cancelled";
  }
});
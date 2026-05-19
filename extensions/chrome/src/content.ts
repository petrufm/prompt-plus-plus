chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === "PROMPTPP_GET_TEXT") {
    if (document.activeElement instanceof HTMLInputElement 
      || document.activeElement instanceof HTMLTextAreaElement) {
      sendResponse({ text: document.activeElement.value });
    } else if (document.activeElement instanceof HTMLDivElement) {
      sendResponse({ text: document.activeElement.innerText });
     }
  }
  if (msg.type === "PROMPTPP_SET_TEXT") {
    if (document.activeElement instanceof HTMLInputElement 
      || document.activeElement instanceof HTMLTextAreaElement) {
      document.activeElement.value = msg.text;
    } else if (document.activeElement instanceof HTMLDivElement) {
      document.activeElement.innerText = msg.text;
    }
  }
});
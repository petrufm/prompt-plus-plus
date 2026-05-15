function getActiveInput() {
  const el = document.activeElement as HTMLInputElement | HTMLTextAreaElement;
  if (el) {
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "P") {
      return el;
    }
  }
  return null;
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === "GET_TEXT") {
    const el = getActiveInput();
    sendResponse({ text: el?.value ?? "" });
  }
  if (msg.type === "SET_TEXT") {
    const el = getActiveInput();
    if (el) el.value = msg.text;
  }
});
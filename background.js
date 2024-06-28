chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });
});

document.getElementById("edit").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content.js"],
    });
  });
};

// function doCapture() {
//   chrome.runtime.sendMessage({ message: "userStatus" }, (response) => {
//     if (response.message === "success") {
//       alert("성공");
//     } else {
//       alert("실패");
//     }
//   });
// }

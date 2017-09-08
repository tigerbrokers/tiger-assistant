import '../assets/img/icon-256.png'

function runInPage (code, sendResult) {
  const codeStr = `(${code})()`
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: codeStr
    }, sendResult)
  })
}

chrome.runtime.onMessage
  .addListener((request, sender, sendResponse) => {
    if (request.cmd === 'run') {
      runInPage(request.code, sendResponse)
    }
    return true
  })

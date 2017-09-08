function runInPage (code, id) {
  const scripts = `(function() {
    let result = (${String(code)})();
    window.postMessage({
      id: ${id},
      result: result
    }, '*');
  })()`
  const el = document.createElement('script')

  el.innerHTML = scripts
  el.onload = () => {
    document.body.removeChild(el)
  }
  document.body.appendChikld(el)
}

window.runInPage = runInPage

/*
let msgId = 0
const respStack = {}

chrome.runtime.onMessage
  .addListener((request, sender, sendResponse) => {
    if (request.cmd === 'run') {
      runInPage(request.code, msgId)
      respStack[msgId] = sendResponse
      msgId ++
      return
    }
  })

// send response data
window.addEventListener('message', function (event) {
  if (event.source !== window) return

  const sendResponse = respStack[event.data.id]
  if (typeof sendResponse === 'function') {
    // sendResponse(JSON.stringify(event.data.result))
    sendResponse(100)
    respStack[event.data.id] = null
  }
})

*/

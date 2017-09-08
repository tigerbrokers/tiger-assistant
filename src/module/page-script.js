// be injected into page by content script for
// collecting app information

let isGemApp = false
try {
  isGemApp = window.app.$children[0].$options.name
} catch (e) {}

function sendMessage () {
  // send data back to content_script
}

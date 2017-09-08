
export default {
  install (Vue) {
    Vue.prototype.$run = function (task) {
      return new Promise((resolve) => {
        const code = String(task)
        chrome.runtime.sendMessage({
          cmd: 'run',
          code
        }, results => {
          if (results && Array.isArray(results)) {
            resolve(...results)
          }
        })
      })
    }
  }
}

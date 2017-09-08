import '../assets/css/index.css'

import Vue from 'vue'
import App from './App/index.vue'
import Chrome from './utils/chrome.js'

Vue.use(Chrome)

const instance = new Vue({
  render: h => h(App)
})

instance.$mount('#app')

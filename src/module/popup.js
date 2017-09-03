import '../assets/css/popup.css'
import Vue from 'vue'
import App from './App/index.vue'

const instance = new Vue({
  render: h => h(App)
})

instance.$mount('#app')

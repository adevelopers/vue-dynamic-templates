import Vue from 'vue/dist/vue.esm.js' 
import App from './App.vue'

Vue.config.productionTip = false

let app = new Vue({
  render: h => h(App)
}).$mount('#app')

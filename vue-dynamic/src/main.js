import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import store from "./store/store";

Vue.config.productionTip = false

let app = new Vue({
  el: "#app",
  store,
  template: "<App/>",
  components: { App }
});

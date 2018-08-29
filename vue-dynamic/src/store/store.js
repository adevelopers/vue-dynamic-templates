import Vue from 'vue/dist/vue.esm.js'
import Vuex from "vuex";
import currentJournal from './modules/currentJournal'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    currentJournal
  }
});

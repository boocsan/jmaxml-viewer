import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: ""
  },
  mutations: {
    settitle(s, v) {
      s.title = v
    }
  },
  getters: {
    gettitle(s) {
      return s.title
    }
  },
  actions: {}
})

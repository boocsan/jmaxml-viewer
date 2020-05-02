import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "すべて"
  },
  mutations: {
    setTitle(s, v) {
      s.title = v
    }
  },
  getters: {
    getTitle(s) {
      return s.title
    }
  },
  actions: {}
})

import Vue from 'vue'
import Vuex from 'vuex'
import name from './modules/name.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    name,
    auth,
  },
})

import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './module/user'

Vue.use(Vuex)

// 定义vuex
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
  }
})

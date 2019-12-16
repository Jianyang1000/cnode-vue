import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 'all',
    topicLists: []
  },
  mutations: {
    changeTab(state, payload) {
      state.isLoading = payload.hasOwnProperty('isLoading') ? payload.isLoading : state.isLoading;
      state.tab = payload.type || state.tab;
      state.topicLists = payload.topicLists || state.topicLists;
      console.log('Done')
    },
  },
  actions: {
  },
  modules: {
  }
})

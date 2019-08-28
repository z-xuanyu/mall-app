import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabactive: 0, //tabbar index
    dialogShow:false, //dialog 显示隐藏
  },
  mutations: {},
  actions: {}
});

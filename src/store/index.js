import Vue from "vue"
import Vuex from "vuex"
import state from "./states"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
Vue.use(Vuex)

const Store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
export default Store
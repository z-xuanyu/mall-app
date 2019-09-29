import * as TYPES from './types';

const mutations = {
	[TYPES.TABBAR](state,v){
		state.active = v
	}
}
export default mutations
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import msgdetail from './modules/msgdetail.js'

const store = new Vuex.Store({
	state: {
		// state是存储中心，所有需要被共享或缓存的数据，都在这里定义
		status: true,
		token: "7758258",
	},
	getters: {
		// getters相当于组件的计算属性，它与state相关，当它所关系的state变量发生变化时，会自动重新计算
	},
	mutations: {
		// mutations是Vuex中专门用于更新state,同步任务
		toChaneStatus(state, pyylod) {
			console.log(state)
			console.log(pyylod)
		}
	},
	actions: {
		toChang(store, payload) {
			console.log(store)
			console.log(payload)
			store.commit("toChaneStatus", payload)
		}
		// actions是专门与后端api打交道的，异步任务;提交的是 mutation，而不是直接变更状态;可以包含任意异步操作。
	},
	modules: {
		//vuex分模块处理
		msgdetail,
	}
})

export default store

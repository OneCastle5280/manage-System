import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'
// import state from './state'

const state = {
    //折叠按钮
    collapse:false
}

const mutations = {
    //反转折叠按钮
    changeCollapse(state){
        // 更改状态
        state.collapse = !state.collapse
    }
}

// 注册使用Vuex
Vue.use(Vuex)

//创建Store实例
const store = new Vuex.Store({
    state,
    mutations
})

export default store

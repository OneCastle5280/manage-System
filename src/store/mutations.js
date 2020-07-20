import state from './state'
const mutations = {
    //反转折叠按钮
    changeCollapse(state){
        state.collapse = !state.collapse
    }
}

export default mutations
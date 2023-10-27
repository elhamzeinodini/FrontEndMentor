import {
    createStore
} from 'vuex';

export default createStore({
    state: {
        selectedFont: "sans-serif",
    },
    mutations: {
        setNewFont(state, newVal){
            state.selectedFont = newVal
        }
    },
    actions: {
        setNewFont({commit}, newVal){
            commit("setNewFont", newVal)
        }
    }
})
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
         scrollTopYY:0
    },
    actions:{

    },
    mutations:{
        increment(state,data){
            state.scrollTopYY = data;
        }
    },
    getters:{
        
    }
})
export default store;
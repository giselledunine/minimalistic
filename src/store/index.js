import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: { // data
        user: {
            lastname: '',
            firstname: ''
        }
    },
    mutations: {
      updateUser (state,payload) {
          localStorage.setItem('user', JSON.stringify(payload))
         return state.user = payload;
      },

        setUser (state){
          const jsonObject = JSON.parse(localStorage.getItem('user'))
          return state.user = jsonObject;
        }
    },
    actions: {
        updateUser(context, payload){
            context.commit('updateUser', payload);
        },

        setUser(context){
            if(localStorage.getItem('user')){
                context.commit('setUser');
            }
        }
    },
    getters: {
        user: state => state.user}
})

export default store
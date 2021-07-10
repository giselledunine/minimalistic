import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: { // data
        user: {
            lastname: '',
            firstname: '',
            mentor: '',
        },
        scores: [],
    },
    mutations: {
      updateUser (state,payload) {
          localStorage.setItem('user', JSON.stringify(payload))
         return state.user = payload;
      },

        setUser (state){
          const jsonObject = JSON.parse(localStorage.getItem('user'))
          return state.user = jsonObject;
        },

        updateMentor (state, payload) {
            state.user.mentor = payload
            return localStorage.setItem('user', JSON.stringify(state.user));
        },

        updateScores (state, payload) {
            localStorage.setItem('scores', JSON.stringify(payload))
            return state.scores= payload;
        },
        updateScore (state, payload, idx) {
            localStorage.setItem('scores', JSON.stringify([payload]))
            return state.scores[idx].score = payload
        },
        setScores (state){
            const jsonObject = JSON.parse(localStorage.getItem('scores'))
            return state.scores = jsonObject;
        },
    },
    actions: {
        updateUser(context, payload){
            context.commit('updateUser', payload);
        },

        setUser(context){
            if(localStorage.getItem('user')){
                context.commit('setUser');
            }
        },

        updateMentor(context, payload){
            context.commit('updateMentor', payload);
        },

        updateScores(context, payload){
            context.commit('updateScores', payload);
        },

        updateScore(context, payload, idx){
          context.commit('updateScore', payload, idx);
        },

        setScores(context){
            if(localStorage.getItem('scores')){
                context.commit('setScores');
            }
        },
    },
    getters: {
        user: state => state.user,
        scores: state => state.scores
    }
})

export default store
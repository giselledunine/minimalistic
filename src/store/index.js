import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: { // data
        prenom: "",
        nom: "",
        email: ""
    },
    mutations: {
        RETRIEVE_PRENOM (state){
            if(localStorage.getItem('prenom')) {
                state.prenom = localStorage.getItem('prenom')
            }
        },
        UPDATE_PRENOM (state, payload) {
            localStorage.setItem('prenom', payload.prenom)
            return state.prenom = payload.prenom
        },
        RETRIEVE_NOM (state){
            if(localStorage.getItem('nom')) {
                state.nom = localStorage.getItem('nom')
            }
        },
        UPDATE_NOM (state, payload) {
            localStorage.setItem('nom', payload.nom)
            return state.nom = payload.nom
        },
        RETRIEVE_EMAIL (state){
            if(localStorage.getItem('email')) {
                state.email = localStorage.getItem('email')
            }
        },
        UPDATE_EMAIL (state, payload) {
            localStorage.setItem('email', payload.email)
            return state.email = payload.email
        },
        RESET_PRENOM(state) {
            localStorage.setItem('prenom', '')
            state.prenom = ""
        },
        RESET_NOM(state) {
            localStorage.setItem('nom', '')
            state.nom = ""
        },
        RESET_EMAIL(state) {
            localStorage.setItem('email', '')
            state.email = ""
        },
    },
    actions: {
        retrieveUser (context) {
            context.commit('RETRIEVE_PRENOM')
            context.commit('RETRIEVE_NOM')
            context.commit('RETRIEVE_EMAIL')
        },
        /**
         *
         * @param context
         * @param payload object {'nom' : '', 'prenom': ''}
         */
        updateUser (context, userObject) {
            context.commit('UPDATE_PRENOM', userObject)
            context.commit('UPDATE_NOM', userObject)
            context.commit('UPDATE_EMAIL', userObject)
        },
        resetUser (context) {
            context.commit('RESET_NOM')
            context.commit('RESET_PRENOM')
            context.commit('RESET_EMAIL')
        }
    }
})

export default store
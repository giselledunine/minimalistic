<template>
  <div id="app">
    <v-app>
      <div>
        <component :is="layout">
          <router-view></router-view>
        </component>
      </div>
    </v-app>
  </div>
</template>

<script>
import firebase from "firebase/app"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {mapActions} from 'vuex';

const default_layout = 'default';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    layout(){
      return(this.$route.meta.layout || default_layout) + '-layout';
    }
  },
  mounted(){
    this.setScores();
  },
  created(){
    this.setUser();
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.loggedIn = true
      }else {
        this.loggedIn = false
      }
    })
  },
  data(){
    return {
      connected : false,
      nom: "",
      prenom: "",
      email: "",
      empty: false,
      valid: false,
      loggedIn: false,
    }
  },
  methods: {
    ...mapActions(['setUser']),
    ...mapActions(['setScores']),
    connect(){
      if (this.prenom === "" && this.nom === "" && this.email === "") {
        this.empty = true
      }else{
        this.connected = true
        this.valid = true
        this.changeNomPrenom({prenom: this.prenom, nom: this.nom, email: this.email})
        this.$router.push('/user');
      }
    },
    disconnect(){
      this.$store.dispatch('resetUser')
      this.connected = false
      console.log(this.connected)
      this.nom = ""
      this.prenom = ""
      this.email= ""
    },
    changeNomPrenom(payload){
      this.$store.dispatch('updateUser', payload)
    }
  }
}
</script>

<style lang="css">
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  background-color: #000000;
  color: #B2B2B2;
  position: relative;
  min-height: 100vh;
}

label {
  color: #B2B2B2;
  font-size: 1rem;
}

p {
  font-size: 1.1rem;
}

h1 {
  color: white;
  font-weight: 700 !important;
  font-size: 2.6rem !important;
  max-width: 60vw;
  margin: 0 auto;
  text-align: center;
}

h2 {
  color: white;
  font-size: 1.5rem !important;
}

h3 {
  font-size: 1.7rem !important;
  color: white;
  font-family: 'Lato', sans-serif;
  margin: 0 !important;
}

.span {
  color: #6081FA;
}

.btn {
  background-color: #6081FA !important;
  border: none !important;
  font-family: Lato, sans-serif;
  color: white !important;
  padding: 0.5rem 2rem !important;
}
.btn:hover{
  background-color: #2F5AF8 !important;
  color: white !important;
}

.lien {
  color: white;
  font-size: 1rem;
}

.lien:hover {
  text-decoration: none;
  color: darkgreen;
  transition: 0.5s;
}

em {
  margin-right: 1rem;
}

p{
  color: white;
}

.input {
  background-color: #232323 !important;
  border: #232323 !important;
  color: white !important;
}

.input:focus {
  background-color: #232323 !important;
  border: #232323;
  color: white;
  box-shadow: none;
  caret-color: #6081FA;
}

.margin {
  margin: 0 0.5rem;
}

.wrapper {
  height: fit-content;
  padding-bottom: 7rem;
}

.footer {
  padding: 2rem;
  background-color: #000000;
  }
</style>

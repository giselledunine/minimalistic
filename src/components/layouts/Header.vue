<template>
  <b-navbar class="nav" toggleable="lg" type="dark">
    <b-link to="/">
      <img src="./../../assets/img/minimalistic-white.png" alt="logo" height="70px">
    </b-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/apropos">À propos</b-nav-item>
        <b-nav-item to="/projets">Formule d'abonnement</b-nav-item>
        <b-nav-item to="/projets">Contact</b-nav-item>
        <b-button v-if="loggedIn" @click="signOut" class="btn">Déconnecter</b-button>
        <div v-else>
          <b-button to="/login" class="btnConnect">Se conecter</b-button>
          <b-button to="/register" class="btn">S'incrire</b-button>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from "firebase/app"

export default {
name: "default",
  created(){
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
    loggedIn: false,
  }
  },
  methods: {
    async signOut(){
      try{
       await firebase.auth().signOut()
      }catch(err) {
        console.log(err)
      }

    }
  }
}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link:hover{
  color: #2F5AF8;
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus{
  color: white;
}
</style>
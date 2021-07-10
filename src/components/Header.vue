<template>
  <b-navbar class="nav" toggleable="lg" type="dark">
    <b-link to="/">
      <img src="../assets/img/minimalistic-white.png" alt="logo" height="70px">
    </b-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item to="/apropos">À propos</b-nav-item> -->
        <!-- <b-nav-item to="/projets">Formule d'abonnement</b-nav-item> -->
        <b-nav-item to="">Services</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
        <b-nav-item href="https://minimalistic-mentoring.medium.com/" target="_blank">Blog</b-nav-item>
        <b-nav-item to="/mentors">Mentors</b-nav-item>
        <div class="display" v-if="loggedIn">
          <v-menu dark offset-y>

            <template v-slot:activator="{ on, attrs }">
              <v-avatar
                  v-bind="attrs"
                  v-on="on"
                  color="#6081FA"
                  size="40"
              >
                <span class="white--text text-h5">AM</span>
              </v-avatar>
            </template>

            <v-list class="menu">
              <v-btn @click="signOut" class="text">
                <v-icon left>
                  mdi-logout-variant
                </v-icon>
                Déconnexion
              </v-btn>
            </v-list>
          </v-menu>
        </div>

        <div class="display" v-else>
          <b-button to="/login" class="btnConnect">Se connecter</b-button>
          <b-button to="/register" class="btn">S'inscrire</b-button>
        </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from "firebase/app"

export default {
name: "default",
  data(){
  return {
    loggedIn: false,
    closeOnClick: false,
    model: null,
  }
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.loggedIn = true
      }else {
        this.loggedIn = false
      }
    })
  },
  methods: {
    async signOut(){
      try{
       await firebase.auth().signOut();
       this.$router.replace({name: "Home"});
       this.$cookies.remove('loggedIn')
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

.nav {
  padding: 0 5rem;
}

.menu {
  color: #B2B2B2 !important;
}

.text{
  text-transform: capitalize;
  color: #B2B2B2;
}
@media screen and (max-width: 960px) {
  .display {
    display: none;
  }
}
</style>
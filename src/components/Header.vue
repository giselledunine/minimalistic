<template>
 <div>
   <div>
     <b-navbar class="nav" toggleable="lg" type="dark">
       <b-link to="/">
         <img src="../assets/img/minimalistic-white.png" alt="logo" height="70px">
       </b-link>

       <div class="mobile">
         <v-icon color="white" @click="drawer = true">mdi-menu</v-icon>
       </div>

       <b-collapse id="nav-collapse" is-nav>
         <!-- Right aligned nav items -->
         <b-navbar-nav class="ml-auto">
           <!-- <b-nav-item to="/apropos">À propos</b-nav-item> -->
           <!-- <b-nav-item to="/projets">Formule d'abonnement</b-nav-item> -->
           <b-nav-item class="navItem" to="/mentors">Mentors</b-nav-item>
           <b-nav-item class="navItem" href="https://minimalistic-mentoring.medium.com/" target="_blank">Blog</b-nav-item>
           <b-nav-item class="navItem" to="/contact">Contact</b-nav-item>

           <div class="display" v-if="loggedIn">
             <v-menu v-if="!loading" dark offset-y>

               <template v-slot:activator="{ on, attrs }">
                 <v-avatar
                     v-bind="attrs"
                     v-on="on"
                     color="#6081FA"
                     size="40"
                 >
                   <img :src="profilImage" alt="avatar">
                 </v-avatar>
               </template>

               <v-list class="menu">
                 <v-list-item @click="toDashboard">
                   <v-list-item-icon>
                     <v-icon>
                       mdi-account
                     </v-icon>
                   </v-list-item-icon>
                   <v-list-item-content>
                     <v-list-item-title>Dashboard</v-list-item-title>
                   </v-list-item-content>
                 </v-list-item>
                 <v-list-item>
                   <v-btn @click="signOut" class="text">
                     <v-icon left>
                       mdi-logout-variant
                     </v-icon>
                     Déconnexion
                   </v-btn>
                 </v-list-item>
               </v-list>
             </v-menu>
           </div>

           <div class="display" v-else>
             <router-link to="/login" class="btnConnect">Se connecter</router-link>
             <b-button to="/register" class="btn">S'inscrire</b-button>
           </div>

         </b-navbar-nav>
       </b-collapse>
     </b-navbar>
   </div>
   <div>
     <v-navigation-drawer width="375" class="menu" absolute temporary v-model="drawer">
       <div class="flex">
         <v-icon color="white" @click="drawer = false">mdi-close</v-icon>
       </div>
       <v-list-item>
         <v-list-item-content>
           <div class="userId">
               <v-btn
                   @click="toDashboard"
                   class="mx-3"
                   fab
                   dark
                   color="teal"
               >
                 <v-avatar
                     color="#6081FA"
                     size="90"
                 >
                   <img src="https://firebasestorage.googleapis.com/v0/b/minimalistic-6c67a.appspot.com/o/pegasus.jpeg?alt=media&token=0052d090-e1a5-44de-9a45-5ef754133937" alt="avatar">
                 </v-avatar>
               </v-btn>
             <p>{{ user.firstname }} {{ user.lastname }}s</p>
             <v-chip label text-color="#ffffff" color="#6081FA">
               Premium
             </v-chip>
           </div>
         </v-list-item-content>
       </v-list-item>


       <v-list
           dense
           nav
       >
         <v-list-item-group
             v-model="group"
             class="active"
         >
           <v-list-item
               link
               to="/mentors"
               @click="drawer = false"
           >
             <v-list-item-icon>
               <v-icon>mdi-account-supervisor-circle-outline</v-icon>
             </v-list-item-icon>

             <v-list-item-content>
               <v-list-item-title>Les Mentors</v-list-item-title>
             </v-list-item-content>
           </v-list-item>
           <v-list-item
               link
               href="https://minimalistic-mentoring.medium.com/"
               target="_blank"
           >
             <v-list-item-icon>
               <v-icon>mdi-post-outline</v-icon>
             </v-list-item-icon>

             <v-list-item-content>
               <v-list-item-title>Blog</v-list-item-title>
             </v-list-item-content>
           </v-list-item>
           <v-list-item
               link
               @click="drawer = false"
               to="/contact"
           >
             <v-list-item-icon>
               <v-icon>mdi-phone</v-icon>
             </v-list-item-icon>

             <v-list-item-content>
               <v-list-item-title>Contact</v-list-item-title>
             </v-list-item-content>
           </v-list-item>

           <div v-if="loggedIn">
             <v-list-item
                 link
                 class="login"
                 @click="signOut"
             >
               <v-list-item-icon>
                 <v-icon>mdi-logout-variant</v-icon>
               </v-list-item-icon>

               <v-list-item-content>
                 <v-list-item-title>Déconnexion</v-list-item-title>
               </v-list-item-content>
             </v-list-item>
           </div>

           <div v-else>
             <v-list-item
                 link
                 to="/login"
                 class="login"
             >
               <v-list-item-icon>
                 <v-icon>mdi-account</v-icon>
               </v-list-item-icon>

               <v-list-item-content>
                 <v-list-item-title>Se connecter</v-list-item-title>
               </v-list-item-content>
             </v-list-item>
             <v-list-item
                 link
                 to="/register"
                 class="register"
             >
               <v-list-item-icon>
                 <v-icon>mdi-login-variant</v-icon>
               </v-list-item-icon>

               <v-list-item-content>
                 <v-list-item-title>S'inscrire</v-list-item-title>
               </v-list-item-content>
             </v-list-item>
           </div>
         </v-list-item-group>


       </v-list>
     </v-navigation-drawer>
   </div>

 </div>
</template>

<script>
import {firebase} from "@/main.js"
import {mapGetters, mapActions} from 'vuex'

export default {
name: "default",
  data(){
  return {
    loggedIn: false,
    closeOnClick: false,
    model: null,
    profilImage: 'pegasus.jpeg',
    loading: true,
    drawer: false,
    group: 0,
  }
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['dashboard'])
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.loggedIn = true
      }else {
        this.loggedIn = false
      }
    })
    this.group = this.dashboard
  },
  mounted(){
    const storageRef = firebase.storage().ref()
        storageRef.child(this.user.image).getDownloadURL().then((url) => {
      this.profilImage = url
          this.loading = false
    })
  },
  updated() {
    console.log(this.group)
    this.updateDashboard(2)
  },
  methods: {
    ...mapActions(['setUser']),
    ...mapActions(['updateDashboard']),
    async signOut(){
      try{
       await firebase.auth().signOut();
       const user = {
         firstname: '',
         lastname: '',
         mentor: '',
         image: '',
         cours: [],
         drawer: false,
       }
       this.setUser(user)
       this.$router.replace({name: "Home"});
       this.$cookies.remove('loggedIn')
      }catch(err) {
        console.log(err)
      }
    },
    routeDashboard(){
      this.$router.replace({name: "Dashboard"})
    },
    toDashboard(){
      this.updateDashboard(0)
      this.$router.replace({name: 'Dashboard'})
    }
  }
}
</script>

<style scoped>

a:hover {
  text-decoration: none;
}

.navbar-dark .navbar-nav .nav-link:hover{
  color: #2F5AF8;
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus{
  color: white;
}

.nav {
  padding: 0 8rem;
}

.userId {
  text-align: left;
}

.userId p {
  color: white;
  margin: 1rem 0;
}

.flex {
  display: flex;
  align-items: flex-end;
}

.menu {
  background-color: black;
  color: white !important;
}

.menu p {
  text-align: left;
}

v-list-item:hover {
  background-color: #232323;
}

.v-btn--fab.v-size--default {
  height: 72px !important;
  width: 72px !important;
}

.btn {
  margin-left: 1rem;
}

.btnConnect {
  font-family: Lato, sans-serif;
  font-size: 1rem;
  color: #6081FA !important;;
  margin-left: 1rem;
  padding: 0.5rem;
}
.btnConnect:hover{
  text-decoration: underline;
}

.display {
  display: flex;
}

.navItem {
  font-size: 1rem;
}

.menu {
  padding: 1rem;
  background-color: black !important;
  color: white !important;
}

.active {
  color: #6081FA !important;
}

.theme--light.v-icon {
  color: inherit !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #B2B2B2!important;
}

.text{
  text-transform: capitalize;
  color: #B2B2B2;
}

.flex {
  justify-content: flex-end;
}

.login {
  border: 1px solid #6081FA;
  margin-bottom: 1rem !important;
  color: #6081fa !important;
}

.register {
  background-color: #6081FA;
}

.mobile {
  display: none;
}

@media screen and (max-width: 960px) {

  .mobile {
    display: block;
    padding: 2rem;
  }

  .nav {
    padding: 0 0 0 1rem;
  }
}
</style>
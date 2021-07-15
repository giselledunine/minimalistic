<template>
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
                  <img :src="imageProfil" alt="avatar">
                </v-avatar>
              </template>

              <v-list class="menu">
                <v-list-item to="/dashboard" >
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
        <p>MENU</p>
        <v-list-item-group
            v-model="group"
            class="active"
        >
          <v-list-item
              link
              @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon color="inherit">mdi-chart-bar</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Mon suivi</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
              link
              @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>mdi-bookmark-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Mes enregistrements</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
              link
              @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>mdi-archive-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Badges</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
              link
              @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Mes évènements</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <p>SUPPORT</p>
          <v-list-item
              link
              @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon color="inherit">mdi-help-circle-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
              link
              @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Support</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>


      </v-list>
    </v-navigation-drawer>


    <div class="flexDisplay">
      <div class="sidebar">
        <v-navigation-drawer class="menu" permanent>
          <v-list-item>
            <v-list-item-content>
              <div class="userId">
                <v-avatar
                    color="#6081FA"
                    size="90"
                >
                  <img :src="imageProfil" alt="avatar">
                </v-avatar>
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
            <p>MENU</p>
            <v-list-item-group
                v-model="group"
                class="active"
            >
            <v-list-item
                link
            >
              <v-list-item-icon>
                <v-icon color="inherit">mdi-chart-bar</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Mon suivi</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon>mdi-bookmark-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Mes enregistrements</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon>mdi-archive-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Badges</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon>mdi-calendar</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Mes évènements</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <p>SUPPORT</p>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon color="inherit">mdi-help-circle-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>FAQ</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon>mdi-information-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Support</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              </v-list-item-group>



          </v-list>
        </v-navigation-drawer>
      </div>
      <v-fade-transition>
        <div v-if="dashboard === 0" class="fullwidth">
          <Dashboard/>
        </div>
        <div v-else class="fullwidth">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-card dark width="100%" class="card">
                  <v-card-title>
                    <v-icon class="icon" color="yellow">mdi-alert</v-icon>
                    Page en cours de développement
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-fade-transition>
    </div>

  </div>
</template>

<script>
import Dashboard from "@/views/Dashboard";
import {mapGetters, mapActions} from 'vuex'
import {firebase} from '@/main.js'

export default {
  name: "User",
  data(){
    return {
      group: this.dashboard,
      loggedIn: false,
      closeOnClick: false,
      model: null,
      imageProfil: 'pegasus.jpeg',
      profilImage: 'pegasus.jpeg',
      loading: true,
      drawer: false,
    }
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['dashboard'])
  },
  components: {
    Dashboard,
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.loggedIn = true
      }else {
        this.loggedIn = false
      }
    })
    this.group = this.dashboard
  },
  mounted() {
    const storageRef = firebase.storage().ref()
    storageRef.child(this.user.image).getDownloadURL().then((url) => {
      this.imageProfil = url
      this.loading = false
    })
    this.setDashboard()
  },
  updated() {
    this.updateDashboard(this.group)
  },
  methods: {
    ...mapActions(['setUser']),
    ...mapActions(['updateDashboard']),
    ...mapActions(['setDashboard']),
    toDashboard(){
      this.updateDashboard(0)
      this.group = 0
      this.$router.replace({name: 'Dashboard'})
    },
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
  }
}
</script>

<style scoped>

@media screen {
  p {
    text-align: left;
    margin: 2rem 0 0 0;
    color: #B2B2B2;
  }

  a:hover {
    text-decoration: none;
  }

  .icon {
    margin-right: 1rem;
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

  .fullwidth {
    width: 100%;
    text-align: left;
    padding: 2rem;
  }

  .userId {
    text-align: left;
  }

  .userId p {
    color: white;
    margin: 1rem 0;
  }

  .display {
    display: flex;
  }

  .flex {
    display: flex;
    justify-content: flex-end;
  }

  .menu {
    background-color: black;
    color: white !important;
    padding: 1rem;
  }

  .menuMobile {
    background-color: black;
    color: white !important;
    padding: 2rem;
    width: 90vw !important;
  }

  .sidebar {
    padding: 1rem 1rem 1rem 3rem;
  }

  .flexDisplay {
    display: flex;
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

  v-list-item:hover {
    background-color: #232323;
  }

  .mobile {
    display: none;
  }

  .card {
    text-align: center !important;
  }

  @media (max-width: 960px){
    .mobile {
      display: block;
    }

    .sidebar{
      display: none;
    }
  }
}

</style>
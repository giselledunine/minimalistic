<template>
  <div>
    <Header></Header>
    <div class="flex">
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
      </v-fade-transition>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header";
import Dashboard from "@/views/Dashboard";
import {mapGetters, mapActions} from 'vuex'
import {firebase} from '@/main.js'

export default {
  name: "User",
  data(){
    return {
      group: this.dashboard,
      imageProfil: 'pregasus.jpeg',
    }
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['dashboard'])
  },
  components: {
    Header,
    Dashboard,
  },
  created() {
    this.group = this.dashboard
  },
  mounted() {
    const storageRef = firebase.storage().ref()
    storageRef.child(this.user.image).getDownloadURL().then((url) => {
      this.imageProfil = url
    })
    this.setDashboard()
  },
  updated() {
    this.updateDashboard(this.group)
  },
  methods: {
    ...mapActions(['updateDashboard']),
    ...mapActions(['setDashboard'])
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

  .flex {
    display: flex;
  }

  .menu {
    background-color: black;
    color: white !important;
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
  @media (max-width: 960px){
    .sidebar{
      display: none;
    }
  }
}

</style>
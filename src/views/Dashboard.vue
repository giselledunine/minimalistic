<template>
<div >
  <h1>Mon suivi</h1>
  <v-card dark  class="card">
    <p class="cardTitle">
      Votre niveau
    </p>
    <span class="span">
      Initié
    </span>
    <v-progress-linear
        color="#6081fa"
        rounded
        height="10"
        :value="30"
    ></v-progress-linear>
    <p class="cardComment">Encore <span class="span">80 points</span> pour passer au niveau suivant</p>
  </v-card>
  <h2>Progression</h2>
  <v-card max-width="30%" class="cardProgress" dark>
    <v-progress-circular
        :rotate="90"
        :size="100"
        :width="15"
        :value="30"
        color="6081FA"
    >
      30%
    </v-progress-circular>
    <p class="title">Prêt-à-porter</p>
    <p>Nous pouvons vous aider dans cette voie !</p>
  </v-card>
  <router-view></router-view>
</div>
</template>

<script>
import firebase from 'firebase/app';
import {mapGetters} from 'vuex';

export default {
name: "Dashboard",
  props: {
    menu: Number
  },
  data(){
  return {
    loggedIn : false,
  }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.loggedIn = true
      }else {
        this.loggedIn = false
      }
    })
  }
}
</script>

<style scoped>

h1 {
  margin: 0 0 2rem 0 ;
  text-align: left;
}

h2 {
  margin: 2rem 0;
}

.fullwidth {
  width: 100%;
}

.cardTitle {
  margin-top: 0 !important;
}

.cardComment {
  text-align: right;
  margin-bottom: 0 !important;
}

.card {
  padding: 1rem;
}

.cardProgress {
  padding: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.card p {
  margin: 0.5rem 0;
}

</style>
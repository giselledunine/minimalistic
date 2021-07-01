<template>
<div>
  <h1>Mon suivi</h1>
  <p>{{user.lastname}}</p>
  <router-view></router-view>
</div>
</template>

<script>
import firebase from 'firebase/app';
import {mapGetters} from 'vuex';

export default {
name: "Dashboard",
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

</style>
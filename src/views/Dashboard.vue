<template>
<div>
  <h1>Mon suivi</h1>
</div>
</template>

<script>
import firebase from 'firebase/app';

export default {
name: "Dashboard",
  data(){
  return {
    loggedIn : false,
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
  }
}
</script>

<style scoped>

</style>
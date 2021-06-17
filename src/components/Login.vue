<template>
<div>
  <h1>Login</h1>
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="mot de passe" v-model="password">
    <button type="submit" class="btn">Se connecter</button>
  </form>
</div>
</template>

<script>
import firebase from "firebase/app"

export default {
name: "Login",
  data(){
  return {
    email: '',
    password: ''
  }
  },
  methods:{
    async login(){
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(user)
        this.$router.replace({name: "Home"})
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
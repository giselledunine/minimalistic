<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="pressed">
      <input type="email" v-model="email" placeholder="Email" >
      <input type="password" v-model="password" placeholder="Mot de passe" >
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"

export default {

name: "Register",
  methods: {
  async pressed(){
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log(user)
      this.$router.replace({name:"Home"})
    }catch(err){
      console.log(err)
    }

  }
  },
  data(){
    return {
      email: '',
      password: '',
    }
  }
}
</script>

<style scoped>

</style>
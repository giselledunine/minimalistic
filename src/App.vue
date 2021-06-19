<template>
  <div id="app">
    <div class="wrapper">
<Header></Header>
      <router-view></router-view>


    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      connected : false,
      nom: "",
      prenom: "",
      email: "",
      empty: false,
      valid: false
    }
  },
  methods: {
    connect(){
      if (this.prenom === "" && this.nom === "" && this.email === "") {
        this.empty = true
      }else{
        this.connected = true
        this.valid = true
        this.changeNomPrenom({prenom: this.prenom, nom: this.nom, email: this.email})
        this.$router.push('/user');
      }
    },
    disconnect(){
      this.$store.dispatch('resetUser')
      this.connected = false
      console.log(this.connected)
      this.nom = ""
      this.prenom = ""
      this.email= ""
    },
    changeNomPrenom(payload){
      this.$store.dispatch('updateUser', payload)
    }
  }
}
</script>

<style lang="css">
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 14px;
  background-color: #000000;
  color: #2c3e50;
  height: fit-content;
}

h1 {
  color: white;
  font-weight: 700 !important;
  font-size: 2.6rem !important;
}

h2 {
  color: white;
  font-size: 1.5rem !important;
}

h3 {
  font-size: 1.7rem !important;
  color: white;
  font-family: 'Lato', sans-serif;
  margin: 0 !important;
}

.btn {
  background-color: #6081FA !important;
  border: none !important;
  font-family: Lato, sans-serif;
  color: black !important;;
  margin-left: 1rem;
}
.btn:hover{
  background-color: #2F5AF8 !important;
  color: black !important;
}

.btnConnect {
  background-color: #232323 !important;
  border: solid 1px !important;
  font-family: Lato, sans-serif;
  color: #6081FA !important;;
  margin-left: 1rem;
}
.btnConnect:hover{
  background-color: #2F5AF8 !important;
  color: black !important;
}

.lien {
  color: white;
  font-size: 1rem;
}

.lien:hover {
  text-decoration: none;
  color: darkgreen;
  transition: 0.5s;
}

em {
  margin-right: 1rem;
}

p{
  color: white;
}

.input {
  background-color: #232323 !important;
  border: #232323;
  color: white;
  width: 96% !important;
}

.input:focus {
  background-color: #232323 !important;
  border: #232323;
  color: white;
  box-shadow: none;
  caret-color: #6081FA;
;
}

.wrapper {
  height: fit-content;
}

.footer {
  padding: 1rem;
  background-color: #000000;
  }
</style>

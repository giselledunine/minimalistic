<template>
  <div id="app">
    <div class="wrapper">
      <b-navbar class="nav" toggleable="lg" type="dark">
        <b-navbar-brand to="/"><h3>Minimalistic_</h3></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/apropos">À propos</b-nav-item>
            <b-nav-item to="/projets">Projets</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <router-view></router-view>

    <footer class="footer">
      <a class="lien" href="/mentionlegales">Mentions légales</a>
    </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  text-align: center;
  color: #2c3e50;
}

h3 {
  font-size: 1.7rem !important;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0 !important;
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

.wrapper {
  background-color: #000000;
  min-height: 82vh;
}

.footer {
  padding: 1rem;
  background-color: #000000;
  }
</style>

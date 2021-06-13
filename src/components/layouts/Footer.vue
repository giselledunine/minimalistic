<template>
  <b-navbar class="nav" toggleable="lg" type="dark">
    <b-link to="/">
      <img src="./../../assets/img/minimalistic-white.png" alt="logo" height="70px">
    </b-link>

    <b-collapse class="menu" id="nav-collapse" is-nav left>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item to="/apropos">À propos</b-nav-item>
        <b-nav-item to="/projets">Formule d'abonnement</b-nav-item>
        <b-nav-item to="/projets">Contact</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" left>
        <v-icon color="#ffffff">mdi-twitter</v-icon>
        <v-icon color="#ffffff">mdi-facebook</v-icon>
        <v-icon color="#ffffff">mdi-instagram</v-icon>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>


export default {
name: "Footer"
}
</script>

<style scoped>
.nav {
  background-color: #232323;
}

.menu {
  margin-top: 10px;
  margin-left: 50px;
}
</style>
<template>
  <b-navbar class="nav" toggleable="lg" type="dark">
    <b-link to="/">
      <img src="./../../assets/img/minimalistic-white.png" alt="logo" height="70px">
    </b-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/apropos">À propos</b-nav-item>
        <b-nav-item to="/projets">Formule d'abonnement</b-nav-item>
        <b-nav-item to="/projets">Contact</b-nav-item>
        <b-button class="btn">S'incrire</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
name: "default"
}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link:hover{
  color: #FCA311;
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus{
  color: #FCA311;
}
</style>
<template>
  <div>
    <h1>{{$store.state.prenom}} {{$store.state.nom}}</h1>

    <h2>Bienvenue sur votre compte utilisateur</h2>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "User"
}
</script>

<style scoped>
h2{
  color: white
}
</style>
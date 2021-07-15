<template>
<div class="wrapper">
  <Header></Header>
  <slot class="marginBottom"/>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from './../components/Footer.vue'

export default {

name: "Default",
  components: {
  Header,
    Footer
  },
  data(){
  return {
  }
  },
}
</script>

<style scoped>

.marginBottom {
  margin-bottom: 3rem;
}

</style>
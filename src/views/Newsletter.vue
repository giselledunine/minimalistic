<template>
<div>
  <h1>Vous êtes bien inscrirt à la Newsletter</h1>

  <p>{{$route.params.email}}</p>
</div>
</template>

<script>
import axios from "axios";

export default {
name: "Newsletter",
  async mounted(){
    this.email = await this.$route.params.email;
    try {
      await axios.post('https://api.sendinblue.com/v3/contacts', {email: this.email}, {headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': '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'
        }, })
    }catch (err){
      console.log(err)
    }
  },
  data(){
    return {
      email: null,
    }
  },
  methods: {
  async addContact(){
    try {
      await axios.post('https://api.sendinblue.com/v3/contacts', {email: this.email}, {headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': `${process.env.VUE_APP_SB_APIKEY}`
        }, })
    }catch (err){
      console.log(err)
    }
  }
  },
  async created(){

  }
}
</script>

<style scoped>

</style>
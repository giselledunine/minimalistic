<template>
<div class="container">
  <h1>Le banc des minimalistes, le blog qui parle d’humains, de mode de vie et de philosophie</h1>
  <p>Je souhaite être tenu au courant lorsqu’un nouvel article vient d’être publié.</p>
  <form class="contact-form" @submit.prevent="sendEmail">
    <v-container class="inscription newsletter">
      <v-row no-gutters>
        <v-col cols="12" sm="9">
          <b-form-input  type="email" name="customer_email" class="input" v-model="email" :state="nameState" placeholder="Votre adresse mail"></b-form-input>
        </v-col>
        <v-col cols="12" sm="3">
          <b-button type="submit" class="btn marginLeft">S'incrire</b-button>
        </v-col>
      </v-row>
    </v-container>
  </form>
  <div v-if="this.articles">
    <h2  v-for="(article, idx) in this.articles" :key="idx">
      <img class="img" object-fit="contain" v-bind:src="photos[idx].fields.file.url" alt="voila">
      {{ article.fields.title }}
    </h2>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import emailjs from 'emailjs-com';

export default {
name: "Blog",
  data(){
   return {
     articles : [],
     photos: [],
     email: '',
     nameState: ''
   }
  },
  methods: {
    sendEmail(e) {
      console.log(this);
      emailjs.sendForm('service_jigdj2r', 'template_il6k0gh', e.target, 'user_jCrnz8KGYvv1r02jdXO6Y')
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.email = '';
            this.snackbar = true;
          }, (error) => {
            console.log('FAILED...', error);
          });
    },
  },
  async mounted(){
  try{
    const articles = await axios.get(`https://cdn.contentful.com/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.VUE_APP_CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`)
    console.log(articles)
    const filter = articles.data.includes.Asset.filter((el) => el.fields.title.startsWith('Photo'))
    console.log(filter)
    this.articles = [...articles.data.items]
    this.photos = [...filter]
  }catch(err){
    console.log(err);
  }
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 200px;
}
</style>
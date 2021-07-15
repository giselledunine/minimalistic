<template>
  <v-container class="footer">
    <v-row>
      <v-col class="col" cols="12" sm="6" md="4">
        <img height="70" src="./../assets/img/minimalistic-white.png" alt="logo">
        <p>Une plateforme de mentoring où nous vous aidons à devenir minimaliste !</p>
        <p>8 bis Rue de la Fontaine au Roi <br/>
          75011 Paris</p>
        <v-row>
          <v-col cols="1">
            <v-icon color="#B2B2B2">mdi-twitter</v-icon>
          </v-col>
          <v-col cols="1">
            <v-icon color="#B2B2B2">mdi-facebook</v-icon>
          </v-col>
          <v-col cols="1">
            <v-icon color="#B2B2B2">mdi-instagram</v-icon>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col" cols="12" sm="6" md="2">
        <v-list dark dense class="links">
          <h3>Minimalistic</h3>
          <v-list-item>
            <a href="https://minimalistic-mentoring.medium.com/" target="_blank">Blog</a>
          </v-list-item>
          <v-list-item>
            <router-link to="/contact">Contact</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/">Kit presse</router-link>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="col" cols="12" sm="6" md="2">
        <v-list dark dense class="links">
          <h3>Informations</h3>
          <v-list-item>
            <router-link to="/mentions-légales">Mentions légales</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/">CGU</router-link>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="col" cols="12" sm="6" md="4">
        <v-list dark dense class="links">
          <h3>Informations</h3>
          <v-list-item>
            <v-list-item-subtitle>
              Abonne-toi à la newsletter afin d’avoir accès a toutes les nouveautés !
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <form class="contact-form" @submit.prevent="sendEmail">
              <v-container class="inscription newsletter">
                <v-row no-gutters>
                  <v-col cols="12" xs="9">
                    <b-form-input  type="email" name="customer_email" class="input backGround" v-model="email" :state="nameState" placeholder="Votre adresse mail"></b-form-input>
                  </v-col>
                  <v-col cols="12" xs="3">
                    <b-button type="submit" class="btn marginLeft">S'incrire</b-button>
                  </v-col>
                </v-row>
              </v-container>
            </form>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
name: "Footer",
  data(){
  return {
    email: '',
    nameState: '',
  }
  }
}
</script>

<style scoped>

p {
  color: #B2B2B2;
  font-size: 1rem;
  margin-left: 5px;
}

a {
  color: #B2B2B2 !important
}

h3 {
  font-size: 1rem !important;
  margin: 1rem 0 0.5rem 1rem !important;
}

.footer {
  background-color: #383838;
  max-width: 100% !important;
}

.links {
  background-color: #383838 !important;
}

.menu {
  margin-top: 10px;
  margin-left: 50px;
}

.col {
  text-align: left;
}

.backGround {
  background-color: #232323 !important;
}
</style>
<template>
<div class="wrapper">
  <h1>Si vous avez des <span>questions</span>, n’hésitez pas à nous contacter</h1>


    <v-container class="contact">
      <form @submit.prevent="sendEmail" class="contactForm">
      <v-row>
        <v-col cols="12" md="6" class="padding">
          <label for="firstname">Prénom</label>
          <b-form-input id="firstname" required type="text" name="firstname" class="input" v-model="firstname" placeholder="Prénom"></b-form-input>
        </v-col>
        <v-col cols="12" md="6" class="padding">
          <label for="lastname">Nom</label>
          <b-form-input id="lastname" required type="text" name="lastname" class="input" v-model="lastname" placeholder="Nom"></b-form-input>
        </v-col>
        <v-col cols="12" md="6" class="padding">
          <label for="email">Adresse e-mail</label>
          <b-form-input id="email" required type="email" name="email" class="input" v-model="email" placeholder="Votre adresse mail"></b-form-input>
        </v-col>
        <v-col cols="12" md="6" class="padding">
          <label for="phoneNumber">Numéro de téléphone</label>
          <b-form-input id="phoneNumber" type="tel" name="phoneNumber" class="input" v-model="phoneNumber" placeholder="Numéro de téléphone"></b-form-input>
        </v-col>
        <v-col cols="12" class="padding">
          <label for="subject">Numéro de téléphone</label>
          <b-form-input id="subject" required type="text" name="subject" class="input" v-model="subject" placeholder="Sujet"></b-form-input>
        </v-col>
        <v-col cols="12" class="padding">
          <label for="message">Message:</label>
          <b-form-textarea id="message" rows="10" max-rows="10" required name="message" class="input" v-model="message" placeholder="Décrivez votre problème..."></b-form-textarea>
        </v-col>
        <v-col cols="12" class="padding">
          <b-button type="submit" class="btn">Envoyer</b-button>
        </v-col>
      </v-row>
  </form>
 <v-col cols="12" class="padding">
   <v-icon class="marginR" color="#ffffff">mdi-phone</v-icon>01 43 48 55 48
 </v-col>
      <v-col cols="12" class="padding">
        <v-icon class="margin" color="#ffffff">mdi-email</v-icon>contact@minimalistic.fr
      </v-col>
  </v-container>


</div>
</template>

<script>
import axios from 'axios';

export default {
name: "Contact",
  data(){
  return {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  }
  },
  methods: {
    sendEmail: async function () {
      try {
        await axios.post('https://api.sendinblue.com/v3/smtp/email', {
          sender: {
            name: `${this.firstname} ${this.lastname}`,
            email: this.email,
          },
          to: [{email: 'pegasus.agencyy@gmail.com'}],
          subject: this.subject,
          textContent: this.message,
        }, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': `${process.env.VUE_APP_SB_APIKEY}`
          },
        })
        this.firstname = '';
            this.lastname = '';
        this.email = '';
        this.phoneNumber = '';
        this.subject = '';
        this.message = '';
        this.snackbar = true;
      } catch (err) {
        console.log(err)
      }
    },
  }
}
</script>

<style scoped>

@media screen {

  label {
    color: #B2B2B2;
  }

  .contact {
    padding: 0 7rem;
  }

  .contactForm {
    text-align: left;
  }

  .wrapper {
    padding: 3rem 0;
    text-align: left;
    margin: 0 3rem;
  }

  .padding {
    padding: 0.5rem;
  }

  .btn {
    margin: 0;
  }

  @media screen and (max-width: 630px) {
    .contact {
      padding: 0 3rem;
    }
  }

  @media screen and (max-width: 430px) {
    h1 {
      font-size: 2rem !important;
    }

    .contact {
      padding: 0 1rem;
    }
  }

}


</style>
<template>
  <div class="login">
    <div class="img">
    </div>
    <v-snackbar
        :timeout="-1"
        :value="wrong"
        class="password-wrong"
        absolute
        bottom
    >
      Le mot de passe ou l'adresse mail est incorrecte
    </v-snackbar>
      <div class="form">
        <h1><span>Bienvenue</span> sur Minimalistic !</h1>
        <form @submit.prevent="login">
          <v-container class="no-padding">
            <v-row class="margin-bottom">
              <v-col  cols="12" sm="6">
                <label for="password">Nom</label>
                <b-form-input id="firstname" required type="text" name="firstname" class=" input" placeholder="Nom"></b-form-input>
              </v-col>
              <v-col  cols="12" sm="6">
                <label for="password">Prénom</label>
                <b-form-input id="lastname" required type="text" name="lastname" class=" input" placeholder="Prénom"></b-form-input>
              </v-col>
              <v-col cols="12">
                <label for="email">Adresse email</label>
                <b-form-input id="email" required type="email" name="subject" class="margin-bottom input" v-model="email" placeholder="Votre adresse mail"></b-form-input>
              </v-col>
              <v-col cols="12">
                <label for="password">Mot de passe</label>
                <v-container class="no-padding">
                  <v-row no-gutters>
                    <v-col cols="11">
                      <b-form-input id="password" required :type="typeInput" name="password" class=" input" v-model="password" placeholder="Votre mot de passe"></b-form-input>
                    </v-col>
                    <v-col cols="1" class="text-align" align-self="center">
                      <v-icon v-if="typeInput === 'text'" class="margin" color="#ffffff" @click="changeType">mdi-eye</v-icon>
                      <v-icon
                          v-else
                          class="margin"
                          color="#ffffff"
                          @click="changeType"
                      >
                        mdi-eye-off
                      </v-icon>
                    </v-col>
                  </v-row>
                </v-container>
                </v-col>
              <v-col cols="1">
                <v-checkbox
                    v-model="accept"
                    color="#ffffff"
                    value="John"
                ></v-checkbox>
              </v-col>
              <v-col cols="11" align-self="center">En créant un compte, <router-link to="/conditions">j’accepte les conditions d’utilisations</router-link>.</v-col>
              <v-col cols="12">
                <button type="submit" class="btn">S'inscrire</button>
              </v-col>
              <v-col cols="12">
                <!--
                <input type="checkbox" v-model="accept">
                <label>
                  <span class="custom-checkbox"></span> Bonjour
                </label>
                -->
                <p>Vous avez déjà un compte ?  <router-link to="/login">Se connecter</router-link></p>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </div>
    </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  name: "Login",
  data(){
    return {
      email: '',
      password: '',
      accept: false,
      typeInput: 'password',
      wrong: false,
    }
  },
  methods:{
    changeType(){
      if (this.typeInput === 'password'){
        this.typeInput = 'text';
        console.log(this.typeInput);
      }else {
        this.typeInput = 'password';
        console.log(this.typeInput);
      }
    },
    async login(){
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(user)
        this.$cookies.set('loggedIn','true');
        this.$router.replace({name: "Home"});
      }catch(err){
        console.log(err)
        this.wrong = true
      }
    }
  }
}
</script>

<style scoped>

h1 {
  margin-bottom: 1rem;
}

a {
  color: #6081fa;
}

a:hover {
  text-decoration: underline;
}

[type="checkbox"] {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  min-width: 1.5rem;
  min-height: 1.5rem;
}

.custom-checkbox {
  min-width: 1.5rem;
  min-height: 1.5rem;
  margin-right: 1em;
  border: 2px solid white;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
}

[type="checkbox"]:checked+label .custom-checkbox {
  border-color: white;
  background: white;
  cursor: pointer;
  min-width: 1.5rem;
  min-height: 1.5rem;
}

.login {
  display: flex;
  align-items: center;
  height: 100vh;
  text-align: left;
}

.img {
  width: 30%;
  height: 100vh;
  background-image: url("./../assets/img/loginImage.png");
  background-size: contain;

}

.form {
  width: 40%;
  margin: 0 auto;
}

.btn {
  margin-left: 0;
}

.margin-bottom {
  margin-bottom: 1rem;
}

.no-padding {
  padding: 0 !important;
}

.input {
  margin: 0;
}

.text-align {
  text-align: center;
}

</style>
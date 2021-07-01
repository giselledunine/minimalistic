<template>
  <div>
<h1 class="show"><span class="span">Content de vous revoir</span>, vous nous avez manqué !</h1>
    <p>{{user.lastname}}</p>
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
      <div>
        <div class="form">
          <h1 class="hidden"><span>Content de vous revoir</span>, vous nous avez manqué !</h1>
          <form @submit.prevent="login">
            <v-container class="no-padding">
              <v-row no-gutters class="margin-bottom">
                <v-col cols="12">
                  <label for="email">Adresse email</label>
                  <b-form-input id="email" required type="email" name="subject" class="margin-bottom input" v-model="email" placeholder="Votre adresse mail"></b-form-input>
                </v-col>
                <label for="password">Mot de passe</label>
                <v-col cols="11" align-self="center">
                  <b-form-input id="password" required :type="typeInput" name="subject" class=" input" v-model="password" placeholder="Votre mot de passe"></b-form-input>
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
              <router-link to="/forgotPassword">Mot de passe oublié ?</router-link> <br/><br/>
              <v-container class="no-padding">
                <v-row no-gutters>
                  <v-col cols="1" align-self="center">
                    <v-checkbox
                        dark
                        v-model="remember"
                        color="#3FCA54"
                        value="remember"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="11" align-self="center">
                    Se souvenir de moi
                  </v-col>
                </v-row>
              </v-container>
              <button type="submit" class="btn">Se connecter</button>
              <p>Vous n'avez pas de compte ? <router-link to="/register">S'inscrire</router-link></p>
            </v-container>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import {db} from './../main'
import {mapGetters, mapActions} from 'vuex'

export default {
name: "Login",
  data(){
  return {
    email: '',
    password: '',
    remember: false,
    typeInput: 'password',
    wrong: false,
  }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods:{
  ...mapActions(['updateUser']),
  changeType(){
    if (this.typeInput === 'password'){
      this.typeInput = 'text';
    }else {
      this.typeInput = 'password';
    }
  },
    async getUser(cred){
      const users = db.collection('users').doc(cred.user.uid);
      const doc = await users.get()
      if(!doc.exists){
        console.log('no such file');
      }else {
        this.updateUser(doc.data())
        console.log(doc.data())
      }
    },
    async login(){
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(cred => {
          console.log(cred.user.uid);
          this.getUser(cred);
        })
        this.$cookies.set('loggedIn','true');
        this.$router.replace({name: "Dashboard"});
      }catch(err){
        console.log(err)
        this.wrong = true
      }
    }
  }
}
</script>

<style scoped>

@media screen {

  h1 {
    padding-top: 2rem;
    font-size: 1.5rem !important;
  }

  .show {
    display: block;
  }

  .hidden {
    display: none;
  }

  label {
    padding-top: 1rem;
  }

  a {
    color: #6081fa;
  }

  a:hover {
    text-decoration: underline;
  }

  .login {
    text-align: left;
    padding: 2rem;
  }

  .btn {
    margin-left: 0;
    margin-bottom: 1rem;
  }

  .no-padding {
    padding: 0;
  }

  @media (min-width:960px) {
    .login {
      display: flex;
      align-items: center;
      height: 100vh;
      padding: 0;
    }

    .form {
      margin-left: 3rem;
    }

    .show {
      display: none;
    }

    .hidden {
      display: block;
    }

    h1 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    p {
      margin-top: 1rem;
    }

    .img {
      width: 40%;
      height: 100vh;
      background-image: url("./../assets/img/loginImage.png");
      background-size: contain;

    }

    .margin-bottom {
      margin-bottom: 1rem;
    }

    .no-padding {
      padding: 0 !important;
    }

    .text-align {
      text-align: center;
    }
  }
}

</style>
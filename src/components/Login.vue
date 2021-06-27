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
    <div>
              <div class="form">
                <h1><span>Content de vous revoir</span>, vous nous avez manqué !</h1>
                <form @submit.prevent="login">
                  <label for="email">Adresse email</label>
                  <b-form-input id="email" required type="email" name="subject" class="margin-bottom input" v-model="email" placeholder="Votre adresse mail"></b-form-input>
                  <label for="password">Mot de passe</label>
                  <v-container class="no-padding">
                    <v-row no-gutters class="margin-bottom">
                      <v-col cols="11">
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
                  </v-container>
                  <router-link to="/forgotPassword">Mot de passe oublié ?</router-link> <br/><br/>
                  <!--
                  <v-checkbox
                      class="checkbox theme--light"
                      v-model="remember"
                      label="Se souvenir de moi"
                      color="#6081fa"
                      value="remember"
                      hide-details
                  ></v-checkbox>
                  -->
                  <button type="submit" class="btn">Se connecter</button>
                </form>
              </div>
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
    remember: false,
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

h1 {
  margin-bottom: 1rem;
}

a {
  color: #6081fa;
}

a:hover {
  text-decoration: underline;
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
  width: 60%;
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

.text-align {
  text-align: center;
}

</style>
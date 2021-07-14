<template>
  <div>
    <h1 class="show"><span class="span">Bienvenue</span> sur Minimalistic !</h1>
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
        Une erreur est survenue
      </v-snackbar>
      <div>
        <div class="form">
          <h1 class="hidden"><span class="span">Bienvenue</span> sur Minimalistic !</h1>
          <form @submit.prevent="register">
            <v-container class="no-padding">
              <v-row no-gutters class="margin-bottom">
                <v-col cols="12" sm="12">
                  <v-btn
                      class="image"
                      icon
                      x-large
                      @click="onPickFile"
                  >
                    <v-avatar
                        color="#B2B2B2"
                        size="80"
                    >
                      <v-icon v-if="this.imageURL===null" color="#ffffff" >mdi-camera</v-icon>
                      <img
                          v-else
                          :src="imageURL"
                          alt="John"
                      >
                    </v-avatar>
                  </v-btn>
                  <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
                </v-col>
                <v-col cols="12" sm="12">
                  <v-container class="no-padding">
                    <v-row no-gutters>
                      <v-col cols="12" sm="6" class="padding-right">
                        <label for="lastname">Nom</label>
                        <b-form-input id="lastname" type="text" name="lastname" class="input" v-model="user.lastname" placeholder="Nom"></b-form-input>
                      </v-col>
                      <v-col  cols="12" sm="6">
                        <label for="firstname">Prénom</label>
                        <b-form-input id="firstname" type="text" name="fistname" class=" input" v-model="user.firstname" placeholder="Prénom"></b-form-input>
                      </v-col>
                    </v-row>
                  </v-container>
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
                      <v-col cols="1" class="text-align passwordIcon" align-self="center">
                        <v-icon v-if="typeInput === 'text'" class="margin" color="#616161" @click="changeType">mdi-eye</v-icon>
                        <v-icon
                            v-else
                            class="margin"
                            color="#616161"
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
                      dark
                      v-model="accept"
                      color="#3FCA54"
                      value="John"
                  ></v-checkbox>
                </v-col>
                <v-col cols="10" align-self="center">En créant un compte, <router-link to="/conditions">j’accepte les conditions d’utilisations</router-link>.</v-col>
                <v-col cols="12">
                  <button type="submit" class="btn">S'inscrire</button>
                </v-col>
                <v-col cols="12">
                  <p>Vous avez déjà un compte ?  <router-link to="/login">Se connecter</router-link></p>
                </v-col>
              </v-row>
            </v-container>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import {db} from '@/main'
import {mapActions} from 'vuex'

export default {
  name: "Register",
  data(){
    return {
      user: {
        lastname: '',
        firstname: '',
        image: 'pegasus.jpeg',
        mentor: '',
        cours: []
      },
      imageURL : null,
      image: null,
      email: '',
      password: '',
      accept: false,
      typeInput: 'password',
      wrong: false,
    }
  },
  methods:{
    ...mapActions(['updateUser']),
    onPickFile(){
      this.$refs.fileInput.click()
    },
    onFilePicked(event){
      const files = event.target.files
      const fileReader = new FileReader()
      fileReader.addEventListener('load', ()=> {
        console.log('image')
        this.imageURL = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    changeType(){
      if (this.typeInput === 'password'){
        this.typeInput = 'text';
        console.log(this.typeInput);
      }else {
        this.typeInput = 'password';
        console.log(this.typeInput);
      }
    },
    async register(){
        console.log('incription')
        await firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res) => {

          if(this.image){
            const formatedImageName = this.image.name.replaceAll(' ', '')
            this.user.image = formatedImageName
            const storageRef = firebase.storage().ref()
            const ref = storageRef.child(formatedImageName)
            ref.put(this.image).then(() => {
              console.log('Upload file !')
            })
          }

          const userRef = db.collection('users').doc(res.user.uid)

          userRef.set(this.user).then(() => {
            console.log("Frank created");
          }).catch(err => console.log(err));

          this.updateUser(this.user)

          this.$cookies.set('loggedIn','true');

          this.$router.replace({name: "Questions"});

        }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

@media screen {
h1 {
  padding-top: 2rem;
  font-size: 2rem !important;
  text-align: left;
}

  .image{
    margin-left: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .passwordIcon {
    background-color: #232323;
    padding: 7px 3px !important;
    margin-left: -3px !important;
    margin-right: 3px !important;
    border-radius: 0px 8px 8px 0px;
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

@media (min-width: 575px) {
  .padding-right {
    padding-right: 1rem !important;
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
      width: 60%;
      margin: 0 auto;
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
      text-align: left;
    }

    p {
      margin-top: 1rem;
    }

    .avatar {
      margin: 4rem;
    }

    .img {
      width: 40%;
      height: 100vh;
      background-image: url("../assets/img/loginImage.png");
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
}
</style>
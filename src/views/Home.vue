<template>
  <div>
    <div class="flex1">
      <div class="home">
        <h1>Le <span>mentoring</span> qui permet aux nouveaux minimalistes d'êtres coachés</h1>
        <p>Nous vous proposons une transition vers le minimalisme adaptée uniquement pour vous car chaque personne peut avoir sa propre vision du minimalisme.</p>
        <p class="inputlabel">S'incrire à la Newsletter</p>
        <v-snackbar
            :timeout="5000"
            :value="snackbar"
            color="deep-purple accent-4"
            elevation="24"
        >
          Votre incription a bien été prise en compte
        </v-snackbar>

        <form @submit.prevent="sendEmail">
        <v-container class="inscription">
          <v-row no-gutters>
            <v-col cols="12" sm="9">
              <b-form-input  type="email" name="customer_email" class="input" v-model="email" :state="nameState" placeholder="Votre adresse mail"></b-form-input>
            </v-col>
            <v-col cols="12" sm="3">
              <b-button type="submit" class="btn ">S'incrire</b-button>
            </v-col>
          </v-row>
        </v-container>
      </form>
      </div>
      <div class="img">
        <img src="./../assets/img/fond1.png" width="100%" alt="fond1">
      </div>
    </div>
    <div class="div2">
      <h1>Bonjour</h1>
      <h2>Notre objectif est d’accompagner nos futurs minimalistes</h2>
      <p>Notre but est d’offrir aux minimalistes la meilleure transition propre a eux-mêmes. Minimalistic vous propose une plateforme de mentoring qui permettra aux nouveaux minimalistes d’être coaché par des minimalistes experts sur plusieurs sujets (mode de vie, mobilier, décoration, alimentation...)</p>
    </div>
    <div class="flex2">
      <div class="cardnumber">
        <p class="number">25</p>
        <p>pays</p>
      </div>
      <v-divider
          class="mx-4 divider hidden"
      ></v-divider>
      <v-divider
          class="mx-4 divider show"
          vertical
      ></v-divider>
      <div class="cardnumber">
        <p class="number">183</p>
        <p>clients</p>
      </div>
      <v-divider
          class="mx-4 divider hidden"
      ></v-divider>
      <v-divider
          class="mx-4 divider show"
          vertical
      ></v-divider>
      <div class="cardnumber">
        <p class="number">100</p>
        <p>mentors</p>
      </div>
      <v-divider
          class="mx-4 divider hidden"
      ></v-divider>
      <v-divider
          class="mx-4 divider show"
          vertical
      ></v-divider>
      <div class="cardnumber">
        <p class="number">500+</p>
        <p>visiteurs</p>
      </div>
    </div>
  <div class="paddingImg">
    <img src="./../assets/img/fond2.png" width="100%" alt="videos">
  </div>
    <div class="div3">
      <div class="img">
        <img id="img" src="./../assets/img/fond3.png" alt="img">
      </div>
      <div class="home">
        <h2>Tout se passe à distance</h2>
        <p>Pas besoin de vous déplacer, nos coachs sont prêts à vous recevoir. En quelques clics, vous vous connectez et commencez votre premier cours !</p>
      </div>
    </div>
    <div>
      <div class="div5 padding">
        <div> Images </div>
        <h2>Des milliers de coachs spécialisés pour vous</h2>
        <p>Nous avons des milliers de coachs venant du monde entier qui sont là pour vous aider !</p>
      </div>
    </div>
    <div>
      <div class="div4">
        <h2>Formules d’abonnement</h2>
        <p>Des formules adaptées à vos besoins</p>
        <div class="flex3">
          <div class="prices">
            <h4>Essentiel</h4>
            <h3 class="number">10€<span class="details">par mois</span></h3>
            <v-list dense dark>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-check</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="marginLeft">
                    Coaching vidéo/conférence
                  </v-list-item-content>
                </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Guide
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Suivi simple
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Vidéos et replays
                </v-list-item-content>
              </v-list-item>
              <v-list-item disabled>
                <v-list-item-icon>
                  <v-icon disabled>mdi-close</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Coach personnel
                </v-list-item-content>
              </v-list-item>
              <v-list-item disabled>
                <v-list-item-icon>
                  <v-icon disabled>mdi-close</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  7 jours d'essai gratuit
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <b-button class="btn">Commencer</b-button>
          </div>
          <div class="prices">
            <h4>Premium</h4>
            <h3 class="number">20€<span class="details">par mois</span></h3>
            <v-list dense dark>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Coaching vidéo/conférence
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Guide
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Suivi simple
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Vidéos et replays
                </v-list-item-content>
              </v-list-item>
              <v-list-item >
                <v-list-item-icon>
                  <v-icon >mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  Coach personnel
                </v-list-item-content>
              </v-list-item>
              <v-list-item >
                <v-list-item-icon>
                  <v-icon >mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="marginLeft">
                  15 jours d'essai gratuit
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <b-button class="btn">Commencer</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="div5">
      <h2>S'inscrire à la newsletter</h2>
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
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
name: "Home",
  created(){
    document.title = 'Minimalistic - LandingPage'
  },
  data() {
    return {
      email: '',
      snackbar: false,
    }
  },
  methods: {
    reset() {
      this.email = ''
    },
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
  computed: {
    nameState() {
      return this.email.length > 2 || this.email.length === 0  ? true : false
    }
  }
}
</script>

<style scoped>

@media screen {
  span {
    color: #6081FA;
  }

  h4  {
    color: white;
    font-size: 1.1rem;
  }

  p{
    color: #B2B2B2;
  }

  .btn {
    width: 100% !important;
    margin-left: 0;
  }

  .flex1 {
    display: flex;
    flex-wrap: wrap-reverse;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
  }

  .flex2 {
    background-color: #232323;
    display: flex;
    max-width: 550px;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

  .flex3 {
    display: flex;
    flex-wrap: wrap-reverse;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .div2 {
    margin: 5rem auto 2rem auto;
    max-width: 70%;
  }

  .div3 {
    display: flex;
    flex-wrap: wrap-reverse;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
  }

  .div4 {
    background-image: url("./../assets/img/Background.png");
    background-size: cover;
    padding: 2rem 0;
}

  .div5 {
    padding: 5rem 2rem;
  }

  .prices {
    text-align: left;
    padding: 1.2rem;
    margin: 1rem;
    background-color: #1E1E1E;
  }

  .inscription {
    padding: 0 !important;
  }

  .inputlabel {
    margin-bottom: 5px;
    text-align: left;
  }

  .home {
    text-align: left;
    padding: 6rem 6rem 6rem 3rem;
    width: 50%;
  }

  .img {
    width: 50%;
    text-align: left;
  }

  #img {
    width: 85%;
  }

  .cardnumber {
    width: 25%;
    padding: 1rem;
  }

  .cardnumber p {
    margin: 0;
  }

  .number {
    font-size: 1.5rem;
    color: #6081FA;
    font-weight: 700;
  }

  .details {
    margin-left: 1rem;
    font-size: 0.8rem;
    color: #B2B2B2;
    font-weight: 500;
  }

  .hidden {
    display: none;
  }

  .newsletter {
    max-width: 500px;
    margin-top: 1rem;
  }

  .padding {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .paddingImg {
    padding: 1rem;
    max-width: 800px;
    margin: auto;
  }

  .divider {
    border: solid 1px #383838;
    background-color: #383838;
    margin: 1rem 0 !important;
  }

  .marginLeft {
    margin-left: 1rem;
  }

  @media screen and (max-width: 991px) {
    .home {
      text-align: center;
      padding: 2rem;
      width: 100%;
    }

    .home h1{
      font-size: 1.6rem !important;
    }

    .div3 {
      margin-top: 1rem;
    }

    .img {
      width: 100%;
      padding: 1rem;
    }

    #img {
      width: 100%;
    }

    .marginLeft {
      margin-left: 0;
    }

    @media screen and (max-width: 600px) {
      .show {
        display: none;
      }

      .hidden {
        display: block;
      }

      .cardnumber {
        width: 100%;
        padding: 1rem;
      }

      .divider {
        border: solid 1px #383838;
        background-color: #383838;
        margin: 0 3rem !important;
      }

      .flex2 {
        background-color: #232323;
        display: flex;
        align-content: center;
        flex-direction: column;
        max-width: 80vw;
        margin: 0 auto;
        margin-bottom: 5rem;
      }
    }
  }
}
</style>
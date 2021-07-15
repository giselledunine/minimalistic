<template>
  <div>
    <div class="flex1">
      <div class="home">
        <p><span><v-icon color="#B2B2B2">mdi-medal-outline</v-icon></span>1er site de mentoring personnalisé dédié aux minimalistes</p>
        <h1>Le <span class="span">mentoring</span> qui permet aux nouveaux <span class="span">minimalistes</span> d'être coachés</h1>
        <p>Nous vous proposons une transition vers le minimalisme adaptée uniquement pour vous car chaque personne peut avoir sa propre vision du minimalisme.</p>

        <v-snackbar
            :timeout="5000"
            :value="snackbar"
            color="#6081FA"
            elevation="24"
        >
          Votre incription a bien été prise en compte
        </v-snackbar>
        <b-button type="submit" class="btn"><router-link class="color" to="/register">Trouver votre mentor</router-link> </b-button>
        <!--
        <b-button class="btn ">Trouver un Mentor</b-button>
        -->
      </div>
      <div class="img">
        <v-lazy>
          <img src="./../assets/img/fond1.png" width="100%" alt="fond1">
        </v-lazy>
      </div>
    </div>
    <div class="div2">
      <h2>Notre objectif est d’accompagner nos futurs minimalistes</h2>
      <p class="text">Notre but est d’offrir aux minimalistes la meilleure transition propre a eux-mêmes. Minimalistic vous propose une plateforme de mentoring qui permettra aux nouveaux minimalistes d’être coaché par des minimalistes experts sur plusieurs sujets (mode de vie, mobilier, décoration, alimentation...)</p>
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
        <p class="number">10 000+</p>
        <p>visiteurs</p>
      </div>
    </div>
  <div class="paddingImg">
    <v-lazy>
      <iframe width="100%" height="515" src="https://www.youtube.com/embed/F0w9gFZfVFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-lazy>
  </div>
    <div class="paddingImg">
      <v-lazy>
        <img src="./../assets/img/Mockup-suivi.png" width="100%" alt="videos">
      </v-lazy>
    </div>
    <v-container class="marginTop">
      <v-row justify="space-between">
        <v-col cols="12" sm="4">
          <v-lazy>
            <img src="./../assets/img/Number1.png" alt="number1">
          </v-lazy>
          <p class="pTitle">Trouver mentor</p>
          <p>Choisissez parmi nos mentors spécialisés dans divers domaines selon vos besoins</p>
        </v-col>
        <v-col cols="12" sm="4">
          <v-lazy>
            <img src="./../assets/img/Number2.png" alt="number1">
          </v-lazy>
          <p class="pTitle">Consultez des cours en vidéo et en visio</p>
          <p>Suivez les cours et communiquez avec votre mentor</p>
        </v-col>
        <v-col cols="12" sm="4">
          <v-lazy>
            <img src="./../assets/img/Number3.png" alt="number1">
          </v-lazy>
          <p class="pTitle">Trackez votre progression</p>
          <p>Suivez les progressions de vos cours à partir de votre profil</p>
        </v-col>
      </v-row>
    </v-container>
    <div class="div3">
      <div class="img">
        <v-lazy>
          <img class="borderImg" id="img2" width="100%" src="./../assets/img/profil.jpg" alt="img">
        </v-lazy>
      </div>
      <div class="home">
        <h2>Tout se passe à distance</h2>
        <p>Pas besoin de vous déplacer, nos coachs sont prêts à vous recevoir. En quelques clics, vous vous connectez et commencez votre premier cours !</p>
      </div>
    </div>
    <div class="div3">
      <div class="home">
        <h2>Le service adapté à vos besoins</h2>
        <p>Remplissez un questionnaire afin de trouver un mentor adapté à vos besoins (prêt-à-porter, tri sentimental, alimentation, organisation/désencombrement, budget & finance, design d’intérieur)</p>
        <router-link class="link" to="/questionnaire">Commencer le questionaire </router-link><v-icon color="#6081FA">mdi-chevron-right</v-icon>
      </div>
      <div class="img">
        <v-lazy>
          <img class="borderImg" id="img3" width="100%" src="./../assets/img/questionnaire.jpg" alt="img">
        </v-lazy>
      </div>
    </div>
    <div>
      <div class="div5 padding">
        <div class="avatar">
          <v-container>
            <v-row>
              <v-col cols="6" sm="2">
                <v-avatar
                    color="indigo"
                    size="108"
                >
                  <img
                      src="./../assets/img/avatar1.png"
                      alt="John"
                  >
                </v-avatar>
                </v-col>
                <v-col cols="6" sm="2">
                  <v-avatar
                      color="indigo"
                      size="108"
                  >
                    <img
                        src="./../assets/img/avatar2.png"
                        alt="John"
                    >
                  </v-avatar>
                </v-col>
                <v-col cols="6" sm="2">
                  <v-avatar
                      color="indigo"
                      size="108"
                  >
                    <img
                        src="./../assets/img/avatar3.png"
                        alt="John"
                    >
                  </v-avatar>
                </v-col>
                <v-col cols="6" sm="2">
                  <v-avatar
                      color="indigo"
                      size="108"
                  >
                    <img
                        src="./../assets/img/avatar4.png"
                        alt="John"
                    >
                  </v-avatar>
                </v-col>
                <v-col cols="6" sm="2">
                  <v-avatar
                      color="indigo"
                      size="108"
                  >
                    <img
                        src="./../assets/img/avatar5.png"
                        alt="John"
                    >
                  </v-avatar>
                </v-col>
                <v-col cols="6" sm="2">
                  <v-avatar
                      color="indigo"
                      size="108"
                  >
                    <img
                        src="./../assets/img/avatar6.png"
                        alt="John"
                    >
                  </v-avatar>
                </v-col>
            </v-row>
          </v-container>
        </div>
        <h2>Des milliers de coachs spécialisés pour vous</h2>
        <p>Nous avons des milliers de coachs venant du monde entier qui sont là pour vous aider !</p>
      </div>
    </div>
    <div>
      <div class="div4">
        <h2>Formules d’abonnement</h2>
        <p>Des formules adaptées à vos besoins</p>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <v-card class="prices">
                <h4>Essentiel</h4>
                <h3 class="number">9,99 €<span class="details">par mois (7 jours d'essai gratuit)</span></h3>
                <v-list dense dark>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Possibilité de contacter un mentor uniquement sur rendez-vous</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Accès à toutes les vidéos et événements</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Suivi simple</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item disabled class="item">
                    <v-list-item-icon>
                      <v-icon disabled>mdi-close</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Mentor personnalisé</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item disabled class="item">
                    <v-list-item-icon>
                      <v-icon disabled>mdi-close</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Rejoindre la communauté Minimalistic</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item disabled class="item">
                    <v-list-item-icon>
                      <v-icon disabled>mdi-close</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Accès à tous les cours</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <b-button class="btn btnOther">Commencer</b-button>
              </v-card>
            </v-col>
            <v-col cols="12" sm="5" >
              <v-card class="pricesHover">
                <v-row>
                  <v-col cols="8">
                    <h4>Premium</h4>
                  </v-col>
                  <v-col cols="4" class="premium">
                      <v-chip
                          label
                          dark
                          color="#6081FA"
                          class="chip"
                      >Recommandé
                      </v-chip>
                  </v-col>
                </v-row>
                <h3 class="number">49,99 €<span class="details">par mois (15 jours d'essai gratuit)</span></h3>
                <v-list dense dark>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Possibilité de contacter un mentor uniquement sur rendez-vous</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Accès à toutes les vidéos et événements</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Suivi personalisé</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Mentor personnalisé</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon >mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Rejoindre la communauté Minimalistic</p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="item">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="marginLeft">
                      <p>Accès à tous les cours</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <b-button class="btn btnOther">Commencer</b-button>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
//import emailjs from 'emailjs-com';
import axios from 'axios';

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
    clickCard(){
      console.log('click')
    },
    reset() {
      this.email = ''
    },
    sendEmail: async function () {
      try {
        await axios.post('https://api.sendinblue.com/v3/smtp/email', {
          sender: {
            name: 'Minimalistic',
            email: 'pegasus.agencyy@gmail.com'
          },
          to: [{email: this.email}],
          params: {customer_email: this.email},
          templateId: 6
        }, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': `${process.env.VUE_APP_SB_APIKEY}`
          },
        })
        this.email = '';
        this.snackbar = true;
      } catch (err) {
        console.log(err)
      }
      /*console.log(this);
      emailjs.sendForm('service_jigdj2r', 'template_il6k0gh', e.target, 'user_jCrnz8KGYvv1r02jdXO6Y')
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
          }, (error) => {
            console.log('FAILED...', error);
          });
          */
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

  h1{
    text-align: left;
  }

  h4  {
    color: white;
    font-size: 1.1rem;
  }

  p{
    color: #B2B2B2;
  }

  .chip {
    font-size: 0.8rem;
  }

  .item {
    padding: 0;
  }

  .premium {
    display: flex;
    justify-content: flex-end;
  }

  .text {
    max-width: 630px;
    margin: 0 auto;
  }

  .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child{
    margin-right: 4px !important;
  }

  .number {
    font-size: 1.5rem;
    color: #6081FA;
    font-weight: 700;
  }

  .color {
    color: white;
    text-decoration: none;
  }

  .borderImg {
    border: none;
    border-radius: 8px;
  }

  .pTitle {
    color: white;
    margin-top: 1rem;
  }

  .marginTop {
    margin-top: 3rem;
  }

  .btnOther {
    width: 100% !important;
  }

  .avatar {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
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
    border-radius: 8px;
    max-width: 65%;
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

  .prices h3 {
    margin-top: 1.5rem !important;
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 700;
  }

  .prices .btn {
    background-color: white !important;
    color: black !important;
  }

  .pricesHover .btn {
    background-color: #6081FA !important;
    color: white !important;
  }

  .pricesHover h3 {
    margin-top: 0.7rem !important;
    transition: 0.3s;
    font-size: 1.5rem;
    color: #6081FA;
    font-weight: 700;
  }

  .pricesHover {
    text-align: left;
    padding: 1.2rem;
    margin: 1rem;
    background-color: #1E1E1E;
    border: 3px solid #6081FA;
  }

  .inscription {
    padding: 0 !important;
  }

  .input {
    color: white;
  }

  .home {
    text-align: left !important;
    padding: 0 7rem 0 8rem;
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
    padding: 1rem 4rem;
  }

  .cardnumber p {
    margin: 0;
  }

  .link {
    font-size: 1rem;
    color: #6081fa;
  }

  .details {
    margin-left: 1rem;
    font-size: 1rem;
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
    max-width: 1200px;
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
      h1 {
        margin: 0 !important;
      }

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
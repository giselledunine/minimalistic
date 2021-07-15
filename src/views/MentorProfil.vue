<template>
  <div class="text">
    <v-container>
      <v-icon color="#ffffff">mdi-chevron-left</v-icon><router-link to="/mentors">Retour</router-link>
      <v-row>
        <v-col align-self="end" cols="12" sm="12" lg="2">
            <v-skeleton-loader v-if="loading" type="avatar">
            </v-skeleton-loader>
            <v-avatar v-else
                size="150"
            >
              <img :src="profilImage" alt="avatar">
            </v-avatar>
        </v-col>
        <v-col cols="12" sm="3" v-if="loading">
          <v-skeleton-loader dark type="list-item-three-line">

          </v-skeleton-loader>
        </v-col>
        <v-col cols="12" sm="6" v-else>
          <p class="name">{{ mentor.firstname }} {{mentor.lastname}}</p>
          <p class="subtitle">Mentor en {{ mentor.specialtyName }}</p>
          <p class="cours">{{ mentor.cours.length }} cours</p>
          <v-row>
            <v-col cols="12" sm="12" lg="3">
              <v-chip
                  label
                  color="#6081FA"
                  text-color="white"
              >
                Super mentor
              </v-chip>
            </v-col>
            <v-col cols="4" sm="6" lg="3" align-self="center">
              <v-rating
                  class="rating"
                  background-color="white"
                  color="#FCC911"
                  dense
                  half-increments
                  hover
                  length="5"
                  size="14"
                  :value="3"
              ></v-rating>
            </v-col>
            <v-col cols="6" sm="6" lg="3" align-self="center">
              <span class="marginLeft">(74 avis)</span>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="ifMentor" cols="12" sm="6" lg="4" align-self="center" class="alignRight">
          <v-btn
              tile
              color="#3FCA54"
              class="buttonCheck"
          >
            <v-icon left>
              mdi-check
            </v-icon>
            Choisis
          </v-btn>
        </v-col>
        <v-col v-else cols="12" sm="6" lg="4" align-self="center"  class="alignRight">
          <v-btn
              @click="clickMentor"
              tile
              color="#6081FA"
              class="button"
          >
            Commencer avec ce mentor
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-row>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Ses réseaux sociaux
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="1">
                      <v-icon color="#B2B2B2">
                        mdi-facebook
                      </v-icon>
                    </v-col>
                    <v-col  cols="1">
                      <v-icon color="#B2B2B2">
                        mdi-instagram
                      </v-icon>
                    </v-col>
            <v-col  cols="1">
              <v-icon color="#B2B2B2">
                mdi-twitter
              </v-icon>
            </v-col>
            <v-col cols="1">
              <v-icon color="#B2B2B2">
                mdi-youtube
              </v-icon>
            </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Préférences
                </v-card-title>
                <v-list>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Conseil en alimentation & assurances
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Conseil & audit
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Edition de lolgiciels
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-subtitle>
                      +3 autres
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Langues
                </v-card-title>
                <v-list>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Français
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Anglais
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Espagnole
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="8">
          <v-row>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Stella en quelques mots
                </v-card-title>
                <v-card-text>
                  Salut ! Je suis Stella Marques. C’est en 2009 à la suite d’une expérience professionnelle dans le domaine du {{mentor.specialtyName}} que j’ai décidé d’adopter un mode de vie plus minimaliste. Depuis, j’ai acquis des connaissances
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Skills
                </v-card-title>
                <v-list>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Alimentation
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Outfits
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Expériences
                </v-card-title>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      Coaching
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-subtitle>
                      2 ans
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-subtitle>
                      Accompagnement de plus de 50 personnes sur leur transition vers un mode de vie minimaliste
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import {db} from '@/main.js'
import {mapGetters, mapActions} from 'vuex'

export default {
name: "MentorProfil",
  data(){
    return {
      ifMentor: true,
      user_id: null,
      mentor_id: null,
      mentor: {},
      profilImage: "https://firebasestorage.googleapis.com/v0/b/minimalistic-6c67a.appspot.com/o/default.jpg?alt=media&token=272a4dc7-a3a5-432a-ab79-b35617a31070",
      loading : true,
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    window.scrollTo(0, 0);
    this.mentor_id = this.$route.params.id
    firebase.auth().onAuthStateChanged(user => {
      this.user_id = user.uid
      console.log(user.uid)
    })
    if(this.user.mentor === this.mentor_id){
      this.ifMentor = true
    }else{
      this.ifMentor = false
    }
  },
  async mounted(){
    await db.collection('mentors').doc(this.mentor_id).get().then((doc) => {
      console.log(doc.data())
      this.mentor = {...doc.data()}
      this.loading = false
      })

    const storageRef = firebase.storage().ref()
    storageRef.child(this.mentor.img).getDownloadURL().then((url) => {
      this.profilImage = url
    })
  },
  updated() {
    if(this.user.mentor === this.mentor_id){
      this.ifMentor = true
    }else{
      this.ifMentor = false
    }
  },
  methods: {
    async clickMentor(){
      const batch = db.batch();
      const userRef = db.collection('users').doc(this.user_id);
      console.log(this.mentor_id)
      batch.update(userRef, {mentor: this.mentor_id})
      await batch.commit()
      this.updateMentor(this.mentor_id)
      this.ifMentor = true
    },
    ...mapActions(['updateMentor'])
  }
}
</script>

<style scoped>

a {
  color: white;
}

.text {
  text-align: left;
}

.name {
  font-size: 2rem;
  margin: 0;
}

.subtitle {
  color: #B2B2B2;
}

.cours {
  color: #B2B2B2;
  font-weight: 300;
}

.button {
  color: white;
  font-size: 1rem;
  font-family: Lato, sans-serif !important;
  text-transform: none;
  letter-spacing: normal;
  border-radius: 8px;
  padding: 1.3rem !important;
}


.buttonCheck {
  color: white;
  font-size: 1rem;
  font-family: Lato, sans-serif !important;
  text-transform: none;
  letter-spacing: normal;
  border-radius: 8px;
  padding: 1.3rem !important;
}

.button:hover {
  background-color: #2F5AF8 !important;
}

.marginLeft {
  margin-left: -3rem;
}

.alignRight {
  text-align: right !important;
}

</style>
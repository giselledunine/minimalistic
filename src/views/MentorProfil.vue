<template>
  <div class="text">
    <v-container>
      <v-icon color="#ffffff">mdi-chevron-left</v-icon><router-link to="/mentors">Retour</router-link>
      <v-row>
        <v-col align-self="end" cols="6" sm="2">
            <v-avatar
                size="150"
            >
              <img src="./../assets/img/avatar2.png" alt="avatar">
            </v-avatar>
        </v-col>
        <v-col cols="6" sm="6">
          <p class="name">{{ mentor.firstname }} {{mentor.lastname}}</p>
          <p class="subtitle">Mentor en {{ mentor.specialtyName }}</p>
          <p class="cours">2 cours</p>
          <v-row>
            <v-col cols="3">
              <v-chip
                  label
                  color="#6081FA"
                  text-color="white"
              >
                Super mentor
              </v-chip>
            </v-col>
            <v-col cols="3" align-self="center">
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
            <v-col cols="3" align-self="center">
              <span class="marginLeft">(74 avis)</span>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="ifMentor" cols="12" sm="4" align-self="center">
          <v-btn
              tile
              color="#3FCA54"
              class="button"
          >
            <v-icon left>
              mdi-check
            </v-icon>
            Choisis
          </v-btn>
        </v-col>
        <v-col v-else cols="12" sm="4" align-self="center">
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
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Préférences
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Langues
                </v-card-title>
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
                  Salut ! Je suis Stella Marques. C’est en 2009 à la suite d’une expérience professionnelle dans le domaine du ... que j’ai décidé d’adopter un mode de vie plus minimaliste. Depuis, j’ai acquis des connaissances  ... Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella Description de Stella
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Skills
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card dark>
                <v-card-title>
                  Expériences
                </v-card-title>
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
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
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
  mounted(){
    db.collection('mentors').doc(this.mentor_id).get().then((doc) => {
      console.log(doc.data())
      this.mentor = {...doc.data()}
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

.button:hover {
  background-color: #2F5AF8 !important;
}

.marginLeft {
  margin-left: -3rem;
}

</style>
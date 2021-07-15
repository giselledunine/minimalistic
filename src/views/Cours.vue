<template>
<v-container class="textAlign">
  <v-row>
    <v-col cols="12" sm="12">
      <p class="category">Cours : {{ catName }}</p>
      <h1>{{ lesson.name }}</h1>
    </v-col>
    <v-col cols="12" lg="9">
      <img src="@/assets/img/fond2.png" width="100%" alt="videos">
    </v-col>
    <v-col cols="12" lg="3">
      <v-container>
        <v-row>
          <v-col cols="12" class="cardMentor align-stretch">
            <v-card dark class="card">
              <v-avatar
                  color="#6081FA"
                  size="110"
              >
                <img :src="`https://firebasestorage.googleapis.com/v0/b/minimalistic-6c67a.appspot.com/o/${mentor.img}?alt=media&token=272a4dc7-a3a5-432a-ab79-b35617a31070`" alt="avatar">
              </v-avatar>
              <v-card-title>
                {{ mentor.firstname }} {{mentor.lastname}}
              </v-card-title>
              <v-card-subtitle>
                Mentor en {{ mentor.specialtyName }}
              </v-card-subtitle>
              <v-card-text>
                <v-row justify="center">
                  <v-col class="col" cols="2">
                    <v-icon color="#B2B2B2" size="20">
                      mdi-facebook
                    </v-icon>
                  </v-col>
                  <v-col class="col" cols="2">
                    <v-icon color="#B2B2B2" size="20">
                      mdi-instagram
                    </v-icon>
                  </v-col>
                  <v-col cols="2" class="col">
                    <v-icon color="#B2B2B2" size="20">
                      mdi-twitter
                    </v-icon>
                  </v-col>
                  <v-col cols="2" class="col">
                    <v-icon color="#B2B2B2" size="20">
                      mdi-youtube
                    </v-icon>
                  </v-col>
                </v-row>
              </v-card-text>
              <button class="btn">Envoyer un message</button>
            </v-card>
          </v-col>
          <v-col cols="12">
            <button v-if="done"  class="btnVideoCheck"><v-icon color="white">mdi-check</v-icon></button>
            <button v-else @click="addLesson" class="btnVideo">J'ai vue la vidéo</button>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="12">
      <h2>Les cours de {{mentor.firstname}}</h2>
    </v-col>
    <v-col class=".hide-overflow" cols="12" md="6" lg="4" v-for="(cours, idx) in mentor.cours" :key="idx">
      <v-card hover @click="linkCours()" dark>
        <v-img
            height="180"
            :src="`https://firebasestorage.googleapis.com/v0/b/minimalistic-6c67a.appspot.com/o/${cours.img}?alt=media&token=0052d090-e1a5-44de-9a45-5ef754133937`"
        ></v-img>
        <v-card-title>
          {{cours.name}}
        </v-card-title>
        <v-card-text>
          <v-card-text>
            <v-row>
              <v-col cols="4">
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
              <v-col cols="8" align-self="center">
                <span class="marginLeft">(74 avis)</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import {db, firebase} from '@/main.js'
import {mapGetters, mapActions} from 'vuex'

export default {
name: "Cours",
  data(){
    return {
      cat: '',
      catName: '',
      slug: '',
      lesson: {},
      done: false,
      user_id: null,
      mentor: {}
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  created(){
    this.cat = this.$route.params.cat
    this.slug = this.$route.params.slug
    firebase.auth().onAuthStateChanged(user => {
      this.user_id = user.uid
      console.log(user.uid)
    })
  },
  async mounted(){
    await db.collection('cours').doc(this.cat).get().then((snapshot) => {
      console.log(snapshot.data())
      this.catName = snapshot.data().name
      this.lesson = snapshot.data().cours.find((el) => el.slug === this.slug)
    })
    const isCours = this.user.cours.find((el) => el.slug === this.slug)

    if(isCours) {
      this.done = true
    }

    db.collection('mentors').doc(this.user.mentor).get().then((snapshot) => {
      this.mentor = snapshot.data()
    })

  },
  methods: {
  ...mapActions(['updateCours']),
    ...mapActions(['updateDashboard']),
    async addLesson(){
      const tempObj = {
        category: this.cat,
        slug: this.slug
      }
      const temp = this.user.cours
      temp.push(tempObj)

      const batch = db.batch();
      const userRef = await db.collection('users').doc(this.user_id);
      batch.update(userRef, {cours: temp})
      await batch.commit()
      this.updateCours(temp)
      this.done = true
    },
    linkCours(){
      this.updateDashboard(0)
      this.$router.replace({name: 'Dashboard'})
    }
  }
}
</script>

<style scoped>

h1 {
  text-align: left;
  margin: 0;
}

h2 {
  font-size: 2.3rem !important;
}

img {
  border-radius: 8px;
}

.card {
  padding: 2rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.cardMentor {
  height: 100%;
}

.col {
  padding: 0;
}

.btn {
  margin-top: 1rem;
  border-radius:8px !important ;
}

.btnVideo {
  background-color: white;
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 8px;
  width: 100%;
  margin-top: 1rem;
}

.btnVideoCheck {
  background-color: #3FCA54;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 8px;
  width: 100%;
  margin-top: 1rem;
}


.textAlign {
  text-align: left;
}

.category {
  color: #B2B2B2;
  margin: 0;
}

</style>
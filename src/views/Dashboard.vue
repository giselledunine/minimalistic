<template>
<div class="wrapper">
  <h1>Mon suivi</h1>
  <v-card dark  class="card">
    <p class="cardTitle">
      Votre niveau
    </p>
    <span class="span">
      Initié
    </span>
    <v-progress-linear
        color="#6081fa"
        rounded
        height="10"
        :value="30"
    ></v-progress-linear>
    <p class="cardComment">Encore <span class="span">80 points</span> pour passer au niveau suivant</p>
  </v-card>
  <h2>Progression</h2>
  <v-row v-if="loading">
    <v-col cols="12" sm="3" v-for="n in 4" :key="n">
      <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
          dark
      ></v-skeleton-loader>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12" sm="3" v-for="(cours, idx) in mentor.cours" :key="idx">
      <v-card class="cardProgress borderRadius" dark>
        <v-progress-circular
            class="progessCircle"
            :rotate="90"
            :size="110"
            :width="12"
            :value="countProgress(cours.id)"
            :color="countProgress(cours.id) === 0 ? '#515151' : allCours.find(el => el.slug === cours.id).color"
        >
          {{countProgress(cours.id)}} %
        </v-progress-circular>
        <div class="alignLeft">
          <p :class="cours.id">{{cours.name}}</p>
          <p>{{allCours.find(el => el.slug === cours.id) ? allCours.find(el => el.slug === cours.id).cours.length : 0}} cours</p>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6">
      <v-card dark class="borderRadius">
        <v-card-title class="avatar">
          <v-avatar
              size="90"
          >
            <img src="./../assets/img/avatar5.png" alt="avatar">
          </v-avatar>
        </v-card-title>
        <v-card-title>
          {{mentor.firstname}} {{mentor.lastname}}
        </v-card-title>
        <v-card-subtitle>
          Mentor en {{mentor.specialtyName}}
        </v-card-subtitle>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon
                  class="grey darken-3"
                  dark
                  color="#B2B2B2"
              >
                mdi-message-reply-text-outline
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Envoyer un mail</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon
                  class="grey darken-3"
                  dark
                  color="#B2B2B2"
              >
                mdi-calendar
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Programmer un rendez-vous</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card dark class="borderRadius">
        <v-card-title>
          Les cours de {{mentor.firstname}}
        </v-card-title>
        <v-list-item-group v-for="(cours, idx) in allCours" :key="idx">
          <v-list-item :to="`/cours/${cours.slug}/${el.slug}`" v-for="(el, idx) in cours.cours" :key="idx">
            <v-list-item-avatar>
              <v-icon
                  class="grey darken-3"
                  dark
                  color="#B2B2B2"
              >
                mdi-play
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle>{{ el.name }}</v-list-item-subtitle>
            </v-list-item-content>
            <p class="time">{{ el.time }}</p>
          </v-list-item>
        </v-list-item-group>
      </v-card>
    </v-col>
  </v-row>
  <router-view></router-view>
</div>
</template>

<script>
import {db} from '@/main.js'
import {mapGetters} from 'vuex';

export default {
name: "Dashboard",
  props: {
    menu: Number
  },
  data(){
  return {
    loading: true,
    mentor: {},
    allCours: [],
  }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted(){
   this.getMentor()
  },
  methods: {
    async getMentor(){
        const mentorRef = db.collection('mentors').doc(this.user.mentor);
        await mentorRef.get().then((snapshot) => {
          console.log('Mentor : ' + snapshot.data())
          this.mentor = snapshot.data()
          snapshot.data().cours.forEach(el=>this.getCours(el.id))
        })
    },
    getCours(payload){
      const coursRef = db.collection('cours').doc(payload);
      coursRef.get().then((snapshot) => {
        const temp = {
          name : snapshot.id,
          ...snapshot.data()
        }
        this.allCours.push(temp)
      }).then(()=> {
        this.loading = false
      })
    },
    countProgress(name){
      const cours = this.allCours.find(el => el.slug === name)
      let coursLength = 0;
      let userCoursLength = 0
      if(cours){
        coursLength = cours.cours.length
      }
      const userCours = this.user.cours.filter(el => el.category === name)
      if(userCours){
        userCoursLength = userCours.length
      }
      const pourcent = userCoursLength * 100 / coursLength
      return pourcent
      //return 0
    },
  }
}
</script>

<style scoped>

h1 {
  margin: 0 0 2rem 0 ;
  text-align: left;
}

h2 {
  margin: 2rem 0;
}

p {
  margin: 0;
}

a:hover {
  text-decoration: none;
}

.title {
  margin: 1rem 0;
}

.fullwidth {
  width: 100%;
}

.cardTitle {
  margin-top: 0 !important;
}

.cardComment {
  text-align: right;
  margin-bottom: 0 !important;
}

.card {
  padding: 1rem;
  border-radius: 8px;
}

borderRadius {
  border-radius: 8px !important;
}

.alignLeft {
  text-align: left;
}

.progessCircle {
  margin: 2rem 0;
}

.cardProgress {
  padding: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.pret-a-porter {
  color: #60FAFA;
}

.alimentation {
  color: #FAD619;
}

.design-interieur {
  color: #6DA5E7;
}

.tri-sentimental {
  color: #FA9760;
}

.desencombrement {
  color: #FA6069;
}

.avatar {
  padding: 1rem 1rem 0 1rem;
}

.time {
  color: #B2B2B2;
  font-size: 0.8rem;
}

</style>
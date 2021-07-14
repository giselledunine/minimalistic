<template>
<v-container>
  <h1>Vos résultats</h1>
  <v-row>
    <v-col cols="12" sm="4" v-for="(form, idx) in forms" :key="idx">
      <v-card v-if="match(form)" justify="center" class="card" dark>
        <v-progress-circular
            :rotate="270"
            :size="100"
            :width="10"
            :value="scores.find(el => el.category === form.class).score"
            :color="form.color"
        >
          {{scores.find(el => el.category === form.class).score}}%
        </v-progress-circular>
        <p class="title" :class="form.class">{{form.name}}</p>
        <p>Nous pouvons vous aider dans cette voie !</p>
      </v-card>
      <v-card v-else justify="center" class="cardBlocked" dark>
        <v-progress-circular
            :rotate="90"
            :size="100"
            :width="10"
            :value="0"
        >
          <v-icon>mdi-lock</v-icon>
        </v-progress-circular>
        <p class="title">{{form.name}}</p>
        <button class="btn"><router-link :to="form.link" class="link">Commencer</router-link></button>
      </v-card>
    </v-col>
  </v-row>

  <h2>Les mentors qui pourraient vous intéressés</h2>
  <v-tabs dark v-model="tab" color="#6081FA" background-color="#000000">
    <v-tab v-for="(score, idx) in scores" :key="idx">{{score.category}}</v-tab>
  </v-tabs>

  <v-tabs-items background-color="#000000" dark v-model="tab">
    <v-tab-item v-for="(score, idx) in scores" :key="idx" background-color="#000000">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="4" v-for="(mentor, idx) in mentors.filter(el=> el.specialty === score.category)" :key="idx">
            <v-card hover @click="mentorLink(mentor.id)" class="mentors">
              <v-img
                  height="190"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
              <v-card-title>{{mentor.firstname}} {{mentor.lastname}}</v-card-title>
              <v-card-text>Mentor en {{ mentor.specialtyName }}</v-card-text>
              <v-card-text>
                <v-chip label color="#6081FA">
                  Super Mentor
                </v-chip>
                <v-rating
                    color="warning"
                    empty-icon="mdi-star-outline"
                    full-icon="mdi-star"
                    half-icon="mdi-star-halffull"
                    length="5"
                    size="14"
                    :value="3"
                ></v-rating>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-tab-item>
  </v-tabs-items>

  <v-card dark class="cardAdd">
    <h2>Rejoignez la communauté Minimalistics</h2>
    <p>Intégrez la communauté de mentors et d’apprentis minimalistes</p>
    <button class="Facebook">Rejoignez le groupe Facebook</button>
  </v-card>

</v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import {db} from '../main'

export default {
name: "Results",
  data(){
    return {
      tab: '',
      mentors: [],
      forms: [
        {
          name: 'Pret-à-porter',
          color: '#60FAFA',
          link: '/questions/pret-a-porter',
          class: 'pret-a-porter'
        },
        {
          name: 'Alilmentation',
          link: '/questions/alimentation',
          color: '#FAD619',
          class: 'alimentation'
        },
        {
          name: "Design d'intérieur",
          link: '/questions/design-interieur',
          color: '#6DA5E7',
          class: 'design-interieur'
        },
        {
          name: 'Tri sentimental',
          link: '/questions/tri-sentimental',
          color: '#FA9760',
          class: 'tri-sentimental'
        },
        {
          name: 'Organisation / désemcombrement',
          link: '/questions/desencombrement',
          color: '#A58FFF',
          class: 'desencombrement'
        },
        {
          name: 'Budjet et Finance',
          link: '/questions/budget-finance',
          color: '#FA6069',
          class: 'budget-finance'
        }
      ]
    }
  },
  methods: {
    match(form){
      const match = this.scores.find(el => el.category === form.class)
      if(match){
        return true;
      }else {
        return false;
      }
    },
    mentorLink(id){
      this.$router.replace({path: `/mentor-profil/${id}`});
    },
    async getMentors(){
      const mentors = db.collection('mentors');
      const docs = await mentors.get()
      docs.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        const temp = {
          id: doc.id,
          ...doc.data()
        }
        this.mentors.push(temp)
      })
    }
  },
  created() {
    this.getMentors()
  },
  computed: {
      ...mapGetters(['scores']),
  },
}
</script>

<style scoped>

h1 {
  margin-bottom: 2rem;
}

h2 {
  margin: 3rem 0 1rem 0;
  text-align: left;
}

.card {
  padding: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  border-radius: 8px;
}

.mentors {
  border-radius: 8px;
  text-align: left;
}

.cardAdd {
  background-color: #6081FA;
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 4rem;
}

.cardAdd h2 {
  font-weight: bold;
  text-align: center;
  margin: 0 0 8px 0;
}

.cardAdd p {
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.cardBlocked {
  background-color: #383838 !important;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  border-radius: 8px;
}

.cardBlocked .title {
  margin: 1rem;
}

.link {
  color: white;
  padding: 0.5rem 2rem;
  margin: 0 -30px;
}

.link:hover {
  text-decoration: none;
}

p {
  margin: 0;
  color: #B2B2B2;
}

.btn {
  margin: 0;
  background-color: #6081fa !important;
  border-radius: 8px !important;
}

.Facebook {
  margin: 0;
  color: black;
  font-size: 1rem;
  padding: 8px 32px;
  background-color: white !important;
  border-radius: 8px !important;
}

.card .title {
  margin: 1rem;
  font-family: Lato, sans-serif !important;
}

.v-tabs {
  border-radius: 8px 8px 0 0;
}

.pret-a-porter{
  color: #60FAFA;
}

.alimentation {
  color: #FAD619;
}

.design-interieur{
  color: #6DA5E7;
}

.tri-sentimental{
  color: #FA9760;
}

.desencombrement {
  color: #A58FFF;
}

.budget-finance {
  color: #FA6069;
}

.container {
  background-color: black !important;
}

</style>
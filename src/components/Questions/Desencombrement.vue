<template>
  <div class="questionnaire">
    <v-container>
      <h1>Désencombrement / Organisation</h1>
      <v-card v-for="(question, idx) in questions" :key="idx" dark class="card">
        <v-container>
          <p>{{question.title}}</p>
        </v-container>
        <form action="suivant">

          <v-navigation-drawer class="menu" permanent>
            <v-list
                dense
                nav
            >
                <v-list-item-group
                    v-model="questionsScores[idx].score"
                    class="active"
                >

                  <v-list-item link rounded v-for="(text, key) in question.questions" :key="key">
                    <v-list-item-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="text.text">
                      </v-list-item-title>
                    </v-list-item-content>

                  </v-list-item>

                </v-list-item-group>

            </v-list>
          </v-navigation-drawer>
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
name: "PretAPorter",
  props: {
    count: Number,
    forms: Array,
  },
  methods: {
    ...mapActions(['updateScores']),
    ...mapActions(['updateScore']),
    ...mapActions(['setScores']),
  },
  computed: {
    ...mapGetters(['scores'])
  },
  data() {
    return {
      checkbox: false,
      questionsScores: [{score: null}, {score: null}, {score: null}, {score: null}, {score: null}],
      finalScore: 0,
      totalScore: 10,
      first: true,
      questions: [
        {title: 'Est-ce que tout ce que vous possédez a une place précise ?',
          questions: [
            {text: 'Oui chaque chose à sa place !', value: 1},
            {text: 'Non pas vraiment je me retrouve dans mon bazar...', value: 1},
            {text: 'Non impossible de m’y retrouver', value: 1},
          ]},
        {title: 'Pour vous, le désencombrement est :',
          questions: [
            {text: 'Une partie de plaisir ! J’aime tout organiser !', value: 1},
            {text: 'Ça ne me dérange pas, j’essaye de le faire 1 fois par an', value: 1},
            {text: 'une corvée, je me retrouve pas dans tout ce bordel', value: 1},
          ]},
        {title: 'C’était quand la dernière fois que vous avez fait le tri ?',
          questions: [
            {text: 'Je le fais périodiquement', value: 1},
            {text: 'Lors de mon déménagement', value: 1},
            {text: 'Ça fait tellement longtemps que je ne m’en souviens plus', value: 1},
          ]},
        {title: 'Combien de fois faites-vous le ménage ?',
          questions: [
            {text: 'Au moins 1 fois par semaine', value: 1},
            {text: 'Quand c’est nécessaire je le fais mais j’ai pas de jour précis.', value: 1},
            {text: 'Seulement quand il y a du monde qui vient chez moi', value: 1},
          ]},
        {title: 'Vos papiers sont-ils rangés ?',
          questions: [
            {text: 'Oui, tout est classé dans des dossiers', value: 1},
            {text: "Tout est rangé en vrac", value: 1},
            {text: 'Je les lis ensuite je m’en débarrasse', value: 1},
          ]},
      ],
    }
  },
  updated() {
    this.finalScore = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const final = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const score = {
      category: 'desencombrement',
      score: final
    }
    if(this.first){
      const payload = this.scores
      payload.push(score)
      this.first = false
      return this.updateScores(payload)
    }else {
      const payload = this.scores
      payload[this.count-1].score = final
      return this.updateScores(payload)
    }
  },
}
</script>

<style scoped>

label {
  margin: 0 0 0 2rem !important;
}

h1 {
  text-align: left;
  margin: 0 0 2rem 0;
}

p {
  margin: 0 !important;
}

.v-input {
  margin: 0 !important;
}

.radio:focus {
  background-color: rgba(255, 255, 128, .5);
}

label {
  color: white !important;
}

  .menu {
    width: 100% !important;
    background-color: #232323;
    border: none !important;
  }

.active {
  color: #6081FA !important;
}

  .card {
    background-color: #232323;
    width: 100% !important;
    text-align: left;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem !important;
    margin: 2rem 0;
  }

  .v-list-item--link {
    border-radius: 8px !important;
    margin: 5px;
  }

  .v-list-item--link:before {
    border-radius: 8px !important;
  }
</style>
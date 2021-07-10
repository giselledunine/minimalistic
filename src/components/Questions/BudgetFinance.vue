<template>
  <div class="questionnaire">
    <v-container>
      <h1>Budget et Finance</h1>
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
        {title: 'Comment décririez-vous votre manière de consommer ?',
          questions: [
            {text: 'Je ne fais pas souvent les courses ou les magasins', value: 1},
            {text: "Je gère plutôt bien mon salaire, je mets de l’argent de côté. Mes dépenses sont très réfléchies et organisées longtemps à l'avance.", value: 1},
            {text: 'Lorsque je reçois ma paie je vais me faire plaisir !', value: 1},
          ]},
        {title: 'Comment gérez-vous vos finances ?',
          questions: [
            {text: 'Avant tous les débuts des mois je planifie mes dépenses', value: 1},
            {text: 'J’ai une application qui m’aide à gérer mes finances', value: 1},
            {text: 'On ne vit qu’une fois, autant se faire plaisir !', value: 1},
          ]},
        {title: 'Être minimaliste vous permet :',
          questions: [
            {text: 'De gagner du temps', value: 1},
            {text: 'D’économiser de l’argent', value: 1},
            {text: 'D’avoir une vie plus simple', value: 1},
            {text: "D’avoir l’esprit plus léger", value: 1},
          ]},
        {title: 'Comment préparez-vous vos repas ?',
          questions: [
            {text: 'Je prépare mes repas en fonction de ce que j’ai chez moi', value: 1},
            {text: 'Généralement j’achète ce que la recette demande d’avoir', value: 1},
            {text: 'Je préfère commander Uber Eat', value: 1},
          ]},
        {title: 'Combien de temps prenez-vous pour manger ?',
          questions: [
            {text: 'Moins de 10 minutes', value: 1},
            {text: "Entre 11 et 45 minutes", value: 1},
            {text: 'Plus de 45 minutes', value: 1},
          ]},
      ],
    }
  },
  updated() {
    this.finalScore = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const final = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const score = {
      category: 'budget-finance',
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
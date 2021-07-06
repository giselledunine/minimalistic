<template>
  <div class="questionnaire">
    <v-container>
      <h1>Tri Sentimental</h1>
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
  name: "TriSentimental",
  props: {
    count: Number,
    forms: Array,
  },
  methods: {
    ...mapActions(['updateScores']),
    ...mapActions(['updateScoresPush']),
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
        {title: 'Combien de paires de chaussures disposez-vous ?',
          questions: [
            {text: 'Moins de 5', value: 1},
            {text: 'Entre 6 et 10', value: 1},
            {text: 'Honnêtement, je ne compte pas tellement j’en ai trop', value: 1},
          ]},
        {title: 'Comment décririez-vous votre manière de faire du shopping ?',
          questions: [
            {text: 'Je ne fais pas de shopping', value: 1},
            {text: 'Mes achats sont toujours réfléchis', value: 1},
            {text: 'Je fais des achats compulsifs', value: 1},
          ]},
        {title: 'Vous n’avez plus de chaussettes propres. Que faites-vous ?',
          questions: [
            {text: 'Je ne suis jamais à court de chaussettes propres mais je fais ma lessive à temps', value: 1},
            {text: 'Je remet mes chaussettes sales', value: 1},
            {text: 'J’achète de nouvelles paires de chaussettes', value: 1},
          ]},
        {title: 'Achetez-vous des objets similaires (même produits de beauté, objets etc.) ?',
          questions: [
            {text: 'Non, je suis conscient de tout ce que je possède', value: 1},
            {text: 'Oui, mais je pense que cela prouve que je sais ce que j\'aime. Et je finis toujours par tout utiliser !', value: 1},
            {text: 'Oui, et c’est très embarrassant', value: 1},
          ]},
        {title: 'À quand remonte la dernière fois que vous avez ramassé/trié toutes vos affaires ?',
          questions: [
            {text: 'Je le fais périodiquement', value: 1},
            {text: "Lorsque j’ai déménagé, j'ai fait une brocante, avant de partir en vacances", value: 1},
            {text: 'Je me souviens plus de la dernière fois...', value: 1},
          ]},
      ],
    }
  },
  updated() {
    this.finalScore = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const final = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const score = {
      category: 'tri-sentimental',
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
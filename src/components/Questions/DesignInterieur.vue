<template>
  <div class="questionnaire">
    <v-container>
      <h1>Design d'intérieur</h1>
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
                      <v-icon v-if="key === questionsScores[idx].score">
                        mdi-check-circle
                      </v-icon>
                      <v-icon v-else>
                        mdi-radiobox-blank
                      </v-icon>
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
        {title: 'Vous préférez vivre ?',
          questions: [
            {text: 'En campagne', value: 1},
            {text: 'En banlieue', value: 1},
            {text: 'En ville', value: 1},
          ]},
        {title: 'Avez-vous le sentiment d’avoir trop d’objets chez vous ?',
          questions: [
            {text: 'J’ai le nécessaire', value: 1},
            {text: 'J’ai beaucoup d’objet “au cas où”', value: 1},
            {text: 'J’ai beaucoup d’objet pour être sûr de manquer de rien', value: 1},
          ]},
        {title: 'Quelle est la proportion d’objets que vous utilisez chaque jour ou chaque semaine ?',
          questions: [
            {text: 'La majorité de mes objets : je possède surtout le stricte nécessaire', value: 1},
            {text: 'Une grande partie : la plupart des objets que je possède sont d’ordre utilitaires', value: 1},
            {text: 'Une petite partie : j’utilise à la fois les objets essentiels mais je possède également beaucoup d’objets moins utiles', value: 1},
          ]},
        {title: 'Vous sentez-vous oppressé par tous ces objets ?',
          questions: [
            {text: 'Non je suis bien', value: 1},
            {text: 'Pas vraiment', value: 1},
            {text: 'Oui, énormément', value: 1},
          ]},
        {title: 'Avez-vous le sentiment de passer trop de temps à nettoyer et ranger votre maison ?',
          questions: [
            {text: 'Chez moi j’ai seulement le nécessaire, je fais le ménage rapidement', value: 1},
            {text: "Oui j’aimerais prendre moins de temps pour ranger ma maison", value: 1},
            {text: 'J’ai l’impression de de tout le temps ranger ma maison', value: 1},
          ]},
      ],
    }
  },
  updated() {
    this.finalScore = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const final = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const score = {
      category: 'design-interieur',
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
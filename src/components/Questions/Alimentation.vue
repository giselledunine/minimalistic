<template>
  <div class="questionnaire">
    <v-container>
      <h1>Alimentation</h1>
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
                      <p>{{ text.text }}</p>
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
        {title: 'Combien d’ustensiles de cuisine possédez-vous ?',
          questions: [
            {text: 'Moins de 5', value: 1},
            {text: 'Entre 6 et 10', value: 1},
            {text: 'Plus de 10', value: 1},
          ]},
        {title: 'Comment décririez-vous votre manière de faire du shopping ?',
          questions: [
            {text: 'Je possède le juste nécessaire, je n’ai pas de mal à consommer ce qu’il y a dans le réfrigérateur', value: 1},
            {text: 'Je possède une quantité modérée mais il reste des aliments que j’ai du mal à terminer', value: 1},
            {text: 'Il est plein à craquer, je n’arrive pas à tout manger !', value: 1},
          ]},
        {title: 'Lorsque j’achète des produits alimentaires...',
          questions: [
            {text: 'Ce sont des produits bio (de la région)', value: 1},
            {text: 'Ce sont des produits bruts ou en vrac (fruits, légumes, céréales,...), certains proviennent d’autres pays et en fonction des saison', value: 1},
            {text: 'Ce sont des produits transformés contenant des additifs et des conservateurs', value: 1},
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
  created() {
    window.scrollTo(0, 0);
  },
  updated() {
    this.finalScore = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const final = this.questionsScores.reduce((acc, curr) => { return acc + curr.score}, 0)/this.totalScore * 100
    const score = {
      category: 'alimentation',
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
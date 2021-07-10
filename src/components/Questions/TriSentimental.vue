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
        {title: 'Avez vous du mal à vous séparer de vos objets ?\n',
          questions: [
            {text: 'J’ai un coeur de pierre', value: 1},
            {text: 'Je me sépare difficilement des objets', value: 1},
            {text: 'J’arrive pas a me séparer de certain objet', value: 1},
          ]},
        {title: 'Possédez-vous un carton avec vos souvenirs ?',
          questions: [
            {text: 'Non je garde rien', value: 1},
            {text: 'Oui j’ai un carton', value: 1},
            {text: 'J’ai pleins d’objets souvenirs chez moi', value: 1},
          ]},
        {title: 'Arrivez-vous à dire facilement au revoir à vos objets ?',
          questions: [
            {text: 'Je fais le tri facilement dans mon dressing', value: 1},
            {text: 'J’ai toujours un doute avant de jeter un objet', value: 1},
            {text: 'J’ai des regrets après mettre débarrassé d’un objet', value: 1},
          ]},
        {title: 'Combien de photos souvenirs avez-vous ?',
          questions: [
            {text: 'Je n’ai aucune photo tout est sur mon portable', value: 1},
            {text: 'Je n’ai seulement mes photos de classes', value: 1},
            {text: 'J’ai des classeurs rempli de photos', value: 1},
          ]},
        {title: 'Vous préférez faire le trie :',
          questions: [
            {text: 'En gardant ce qui est vraiment nécessaire', value: 1},
            {text: "En fonction des sentiments que vous portez aux objets", value: 1},
            {text: 'Selon le prix des objets', value: 1},
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
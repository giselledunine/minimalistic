<template>
  <div class="questionnaire">
    <v-container>
      <h1>Prêt à Porter</h1>
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
                    <p v-if="key === questionsScores[idx].score">{{text.subtitle}}</p>

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
        {title: 'Combien de paires de chaussures disposez-vous ?',
          questions: [
            {text: 'Moins de 5'},
            {text: 'Entre 6 et 10'},
            {text: 'Honnêtement, je ne compte pas tellement j’en ai trop'},
          ]},
        {title: 'Comment décririez-vous votre manière de faire du shopping ?',
          questions: [
            {text: 'Je ne fais pas de shopping', subtitle: 'Bravo !'},
            {text: 'Mes achats sont toujours réfléchis'},
            {text: 'Je fais des achats compulsifs'},
          ]},
        {title: 'Vous n’avez plus de chaussettes propres. Que faites-vous ?',
          questions: [
            {text: 'Je ne suis jamais à court de chaussettes propres mais je fais ma lessive à temps'},
            {text: 'Je remet mes chaussettes sales'},
            {text: 'J’achète de nouvelles paires de chaussettes'},
          ]},
        {title: 'Achetez-vous des objets similaires (même produits de beauté, objets etc.) ?',
          questions: [
            {text: 'Non, je suis conscient de tout ce que je possède'},
            {text: 'Oui, mais je pense que cela prouve que je sais ce que j\'aime. Et je finis toujours par tout utiliser !'},
            {text: 'Oui, et c’est très embarrassant'},
          ]},
        {title: 'À quand remonte la dernière fois que vous avez ramassé/trié toutes vos affaires ?',
          questions: [
            {text: 'Je le fais périodiquement'},
            {text: "Lorsque j’ai déménagé, j'ai fait une brocante, avant de partir en vacances"},
            {text: 'Je me souviens plus de la dernière fois...'},
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
      category: 'pret-a-porter',
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
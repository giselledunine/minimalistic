<template>
  <div class="questions">
    <v-container v-if="!main">
      <v-row>
        <v-col v-for="(question, idx) in answers.questions" :key="idx">
          <v-progress-linear
              color="#6081fa"
              rounded
              :value="question.progress"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="main">
      <h1>Aidez-nous à choisir le <span class="span">mentor idéal</span> pour vous !</h1>
      <v-row >
        <v-col cols="12" sm="6">
          <label for="age">Âge</label>
          <b-form-input id="age" required type="number" name="age" class="margin-bottom input" v-model="answers.age" placeholder="Âge"></b-form-input>
        </v-col>
        <v-col cols="12" sm="6">
          <label for="age">Situation sociale</label>
          <b-form-select id="situation" required name="situation" class="margin-bottom input" v-model="answers.situation" :options="situations"></b-form-select>
        </v-col>
        <v-col cols="12" sm="6">
          <label for="age">Votre Ville</label>
          <b-form-input id="city" required type="text" name="city" class="margin-bottom input" v-model="answers.city" placeholder="Ville"></b-form-input>
        </v-col>
        <v-col cols="12" sm="6">
          <label for="age">Numéro de téléphone</label>
          <b-form-input id="phoneNumber" required type="number" name="age" class="margin-bottom input" v-model="answers.phoneNumber" placeholder="Numéro de téléphone"></b-form-input>
        </v-col>
        <v-col cols="12">
          <label for="age">Pourquoi voulez-vous être minimaliste ?</label>
          <b-form-textarea
              class="margin-bottom input"
              size="large"
              v-model="answers.whyMinimalist"
              id="whyMinimalist"
              placeholder="Décrivez..."
              rows="4"
              max-rows="8"
          ></b-form-textarea>
        </v-col>
        <v-col cols="12">
          <label for="age">Quelles sont vos difficultés ?</label>
          <b-form-textarea
              class="margin-bottom input"
              size="large"
              v-model="answers.difficulties"
              id="whyMinimalist"
              placeholder="Décrivez..."
              rows="4"
              max-rows="8"
          ></b-form-textarea>
        </v-col>
        <v-col cols="12">
          <label for="age">Selon vous, dans quel(s) domaine(s) aimeriez-vous être accompagné ?</label>
        </v-col>
        <v-col cols="12" class="flex">
          <div v-for="(chip, idx) in chips" :key="idx">
            <v-chip
                class="chip"
                close
                label
                dark
                v-if="chip.value"
                color="#6081FA"
                text-color="#ffffff"
                @click:close="removeChip(idx,chip.link)"
            >{{chip.name}}
            </v-chip>
          </div>
        </v-col>
        <v-col cols="12" class="flex">
          <div v-for="(chip, idx) in chips" :key="idx">
            <v-chip
                class="chip"
                label
                color="#B2B2B2"
                v-if="!chip.value"
                @click="addChip(idx,chip.link)"
            >
              {{ chip.name }}
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container transition="slide-x-reverse-transition">
      <router-view></router-view>
    </v-container>

    <v-container v-if="answers.questions.length > 0 && end === false">
      <button class="btn" @click="nextForm(count)"><router-link :to="answers.questions[count].route" class="link" >Suivant</router-link></button>
    </v-container>
    <v-container v-if="end">
      <button class="btn" @click="endForm()"><router-link to="/questions/results" class="link">Résultats</router-link></button>
    </v-container>
  </div>
</template>

<script>
export default {
name: "Questions",
  data(){
  return {
    chips: [
      {name: 'Prêt-à-porter', link: '/questions/pret-a-porter', value: false, progress: 0},
      {name: 'Tri sentimentale', link: '/questions/tri-sentimental', value: false, progress: 0},
      {name: 'Alimentation', link: '/questions/alimentation', value: false, progress: 0},
      {name: 'Organisation/désencombrement', link: '/questions/organisation', value: false, progress: 0},
      {name: 'Budget et Finance', link: '/questions/budget', value: false, progress: 0},
      {name: "Design d'intérieur", link: '/questions/design', value: false, progress: 0},
    ],
    answers: {
      age: null,
      situation: null,
      city: null,
      phoneNumber: null,
      whyMinimalist: null,
      difficulties: null,
      questions: [],
    },
    main: true,
    end: false,
    noLink: true,
    count: 0,
    situations: [
      {value: null, text: 'Situation sociale'},
      {value: 'première situation', text: 'première situation'},
      {value: 'deuxième situation', text: 'deuxième situation'},
      {value: 'troisième situation', text: 'troisième situation'},
      {value: 'quatrième situation', text: 'quatrième situation'},
    ]
  }
  },
  methods: {
    nextForm(count){
      if(this.main === true){
        console.log(this.answers.questions.length)
        this.count = this.count+1
        if(count + 1 === this.answers.questions.length){
          this.end = true
        }
        return this.main = false
      }
      console.log('nextForm')
      this.answers.questions[count-1].progress = 100
      if(count + 1 === this.answers.questions.length){
        this.end = true
      }
      if(count + 1 !== this.answers.questions.length){
        this.count = this.count + 1
      }
    },
    endForm(){
      this.answers.questions[this.count+1].progress = 100
    },
    async addChip(idx, route){
        const question = {route: route, progress: 0}
        this.answers.questions.push(question)
        this.chips[idx].value = true
        console.log(this.chips[idx].value)
        if(this.noLink === true){
          this.noLink = false
        }
    },
    removeChip(idx, route){
      const filter = this.answers.questions.filter(el => el.route !== route)
      this.answers.questions = filter
      this.chips[idx].value = false
      console.log(this.chips[idx].value)
    }
  }
}
</script>

<style scoped>

.chip {
  margin: 0.5rem;
}

.flex {
  display: flex;
}

.link {
  color: black;
  padding: 0.5rem 2rem;
  margin: 0 -30px;
}

.link:hover {
  text-decoration: none;
}

.container {
  text-align: left;
}

.questions {
  color: white;
}

</style>
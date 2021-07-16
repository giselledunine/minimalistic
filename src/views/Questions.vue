<template>
  <div class="questions">
    <v-container class="progress" v-if="!main">
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
    <v-container class="form" v-if="main">
      <h1>Aidez-nous à choisir le <span class="span">mentor idéal</span> pour vous !</h1>
      <p>Ce formulaire nous permet de trouver le mentor qui vous convient pour chaque thème ! Chaque thème sera noté sur 100.</p>
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
              id="whyMinimalist"
              size="large"
              v-model="answers.whyMinimalist"
              placeholder="Décrivez..."
              rows="4"
              max-rows="2"
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
          ></b-form-textarea>
        </v-col>
        <v-col cols="12">
          <label for="age">Selon vous, dans quel(s) domaine(s) aimeriez-vous être accompagné ?</label>
        </v-col>
          <v-col cols="12" v-if="answers.questions.length > 0">
            <v-container>
              <v-row no-gutters>
                <v-col v-for="(chip, idx) in chips" :key="idx" class="flex">
                    <v-scale-transition>
                      <v-chip
                          transition="fade-transition"
                          class="chip"
                          close
                          label
                          dark
                          v-if="chip.value"
                          color="#6081FA"
                          text-color="black"
                          @click:close="removeChip(idx,chip.link)"
                      >{{chip.name}}
                      </v-chip>
                    </v-scale-transition>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        <v-col cols="12">
          <v-container>
            <v-row no-gutters>
              <v-col v-for="(chip, idx) in chips" :key="idx" class="flex">
                <v-scale-transition>
                  <v-chip
                      transition="fade-transition"
                      class="chip"
                      label
                      color="#B2B2B2"
                      v-if="!chip.value"
                      @click="addChip(idx,chip.link)"
                  >
                    {{ chip.name }}
                  </v-chip>
                </v-scale-transition>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container transition="slide-x-reverse-transition">
      <v-fade-transition>
        <router-view :forms="answers.questions" :count="count"></router-view>
      </v-fade-transition>
    </v-container>

    <v-container v-if="answers.questions.length > 0 && end === false">
      <button class="btn" @click="nextForm(count)"><router-link :to="answers.questions[count].route" class="link" >Suivant</router-link></button>
    </v-container>
    <v-container v-if="end">
      <button class="btn" @click="endForm()"><router-link to="/results" class="link">Résultats</router-link></button>
    </v-container>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
name: "Questions",
  data(){
  return {
    chips: [
      {name: 'Prêt-à-porter', link: '/questions/pret-a-porter', value: false, progress: 0},
      {name: 'Tri sentimentale', link: '/questions/tri-sentimental', value: false, progress: 0},
      {name: 'Alimentation', link: '/questions/alimentation', value: false, progress: 0},
      {name: 'Organisation/désencombrement', link: '/questions/desencombrement', value: false, progress: 0},
      {name: 'Budget et Finance', link: '/questions/budget-finance', value: false, progress: 0},
      {name: "Design d'intérieur", link: '/questions/design-interieur', value: false, progress: 0},
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
      {value: 'Situation sociale', text: 'Situation sociale'},
      {value: 'Étudiant(e)', text: 'Étudiant(e)'},
      {value: 'Ouvrier(ère) / Employé(e)', text: 'Ouvrier(ère) / Employé(e)'},
      {value: 'Artisan', text: 'Artisan'},
      {value: 'Technicien(ne) / Agent de maîtrise', text: 'Technicien(ne) / Agent de maîtrise'},
      {value: 'Cadre', text: 'Cadre'},
      {value: 'Sans emploi', text: 'Sans emploi'},
      {value: 'Retraité(e)', text: 'Retraité(e)'},
    ]
  }
  },
  mounted() {
    this.setScores()
  },
  methods: {
  ...mapActions(['setScores']),
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
        this.count = this.count + 1
    },
    endForm(){
      this.answers.questions[this.count-1].progress = 100
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

p {
  color: #B2B2B2;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 0;
}

.progress {
  position: fixed;
  max-width: 1000px;
  top: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: black;
}

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

.form {
  margin: 0 auto;
  padding: 3rem;
  max-width: 1000px;
}

.questions {
  color: white;
  margin-bottom: 6rem;
}

</style>
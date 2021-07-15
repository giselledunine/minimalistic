<template>
  <div>
    <h1>Les meilleurs <span class="span">mentors</span> sont ceux que vous choisissez</h1>
    <p>Trouvez facilement un expert parmi les 100 mentors</p>
    <v-container v-if="loading">
      <v-row>
        <v-col cols="12" sm="4" v-for="(i, idx) in 7" :key="idx">
          <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
              dark
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" v-for="(mentor, idx) in mentors" :key="idx">
          <v-card hover @click="mentorLink(mentor.id)" dark class="card">
            <v-img
                height="250"
                :src="`https://firebasestorage.googleapis.com/v0/b/minimalistic-6c67a.appspot.com/o/${mentor.img}?alt=media&token=0052d090-e1a5-44de-9a45-5ef754133937`"
            ></v-img>
            <v-card-title>
              {{mentor.firstname}} {{mentor.lastname}}
            </v-card-title>
            <v-card-subtitle>
              Mentor en {{mentor.specialtyName}}
            </v-card-subtitle>
            <v-card-text>
              <v-chip
                  label
                  color="#6081FA"
                  text-color="white"
              >
                Super mentor
              </v-chip>
              <v-row>
                <v-col cols="4">
                  <v-rating
                      class="rating"
                      background-color="white"
                      color="#FCC911"
                      dense
                      half-increments
                      hover
                      length="5"
                      size="14"
                      :value="3"
                  ></v-rating>
                </v-col>
                <v-col cols="8" align-self="center">
                  <span class="marginLeft">(74 avis)</span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {db} from '@/main.js';

export default {
name: "Mentors",
  data(){
  return {
    mentors: [],
    loading: true,
  }
  },
  async mounted(){
  db.collection('mentors').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.id)
          const temp = {
            id: doc.id,
            ...doc.data()
          }
          this.mentors.push(temp)
          this.loading = false
        });
      }).catch(err => console.log(err));
  },
  methods: {
    mentorLink(id){
      this.$router.replace({path: `/mentor-profil/${id}`});
    }
  }
}
</script>

<style scoped>

.card{
  text-align: left;
  border-radius: 8px;
}

.rating {
  padding: 1rem 0;
  width: fit-content;
}

.marginLeft {
  margin-left: -1rem;
}

h1 {
  margin: 2rem auto;
}

p {
  color: #B2B2B2
}

</style>
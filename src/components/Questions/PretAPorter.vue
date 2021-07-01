<template>
  <div>
    <v-container>
      <v-card dark class="card">
        <h1>Prêt à Porter</h1>
        <v-container>
          <p>Combien de paires de chaussures disposez-vous ?</p>
        </v-container>
        <form action="suivant">

          <v-navigation-drawer class="menu" permanent>
            <v-list
                dense
                nav
            >
              <v-radio-group v-model="question1">
                <v-list-item-group
                    v-model="group"
                    class="active"
                >

                  <v-list-item @click="question" :name="item.value" link rounded v-for="(item, key) in items" :key="key">
                    <v-list-item-icon>
                      <v-radio
                          ref="radio"
                          label=""
                          :value="item.value"
                      ></v-radio>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text">
                      </v-list-item-title>
                    </v-list-item-content>

                  </v-list-item>

                </v-list-item-group>
              </v-radio-group>

            </v-list>
          </v-navigation-drawer>
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
name: "PretAPorter",
  data(){
  return {
    checkbox: false,
    group: null,
    question1: null,
    items: [
      { text: 'Moins de 5', value: 1 },
      { text: 'Entre 6 et 10', value: 2 },
      { text: 'Entre 11 et 20', value: 3 },
    ],
  }
  },
  methods: {
    question(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>

label {
  margin: 0 0 0 2rem !important;
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
  }

  .v-list-item--link {
    border-radius: 8px !important;
    margin: 5px;
  }

  .v-list-item--link:before {
    border-radius: 8px !important;
  }
</style>
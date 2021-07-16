<template>
  <div class="largeur">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card dark width="100%" class="card">
            <v-card-title>
              <v-icon class="icon" color="yellow">mdi-alert</v-icon>
              Page en cours de développement
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
name: "Notdone"
}
</script>

<style scoped>
.largeur {
  width: 65%;
}

@media screen and (max-width: 960px) {
  .largeur {
    width: 100%;
    padding: 1rem;
    margin-top: 6rem;
  }
}
</style>
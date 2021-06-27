<template>
  <div>
    <Header></Header>
    <div class="flex">
      <div class="sidebar">
        <v-navigation-drawer class="menu" permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Nathalie
              </v-list-item-title>
              <v-list-item-subtitle>
                Premium
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>


          <v-list
              dense
              nav
          >
            <p>MENU</p>
            <v-list-item-group
                v-model="group"
                class="active"
            >
            <v-list-item
                link
            >
              <v-list-item-icon>
                <v-icon color="inherit">mdi-chart-bar</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Mon suivi</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon>mdi-bookmark-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Mes enregistrements</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon>mdi-archive-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Badges</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon>mdi-calendar</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Mes évènements</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <p>SUPPORT</p>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon color="inherit">mdi-help-circle-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>FAQ</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  link
              >
                <v-list-item-icon>
                  <v-icon>mdi-information-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Support</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              </v-list-item-group>


          </v-list>
        </v-navigation-drawer>
      </div>
      <div>
        <slot />
      </div>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "User",
  components: {
    Header,
  }
}
</script>

<style scoped>

p {
  text-align: left;
  margin: 2rem 0 0 0;
  color: #B2B2B2;
}

.flex {
  display: flex;
}

.menu {
  background-color: black;
  color: white !important;
}

.sidebar {
  padding: 1rem 1rem 1rem 3rem;
}

.active {
  color: #6081FA !important;
}

.theme--light.v-icon {
  color: inherit !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #B2B2B2!important;
}

v-list-item:hover {
  background-color: #232323;
}

</style>
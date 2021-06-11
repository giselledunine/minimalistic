import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "@/store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import UserRoutes from "./components/User/routes";
import vuetify from "@/plugins/vuetify";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home
    components: {
      default: () => import(/* webpackChunkName: "home" */ "./components/Home"),
    },
    children: [],
  },
  {
    path: "/apropos",
    name: "Apropos",
    components: {
      default: () => import(/* webpackChunkName: "home" */ "./views/Apropos"),
    },
  },
  {
    path: "/projets",
    name: "Projets",
    components: {
      default: () => import(/* webpackChunkName: "home" */ "./views/Projets"),
    },
  },
  {
    path: "/mentionlegales", // pas de suite, donc fin de l'[A6]  = lyon
    name: "Mentions Légales",
    components: {
      default: () =>
        import(/* webpackChunkName: "users" */ "@/views/Mentionlegales"),
    },
  },
  ...UserRoutes,
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

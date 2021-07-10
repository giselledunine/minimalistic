import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "@/store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import UserRoutes from "./components/User/routes";
import axios from 'axios';
import vuetify from "@/plugins/vuetify";
import VueCookies from 'vue-cookies';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue";

Vue.prototype.$axios = axios;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {requiredAuth: false},
    // component: Home
    components: {
      default: () => import(/* webpackChunkName: "home" */ "./views/Home"),
    },
    children: [],
  },
  {
    path: "/apropos",
    name: "Apropos",
    meta: {requiredAuth: false},
    components: {
      default: () => import(/* webpackChunkName: "home" */ "./views/Apropos"),
    },
  },
  {
    path: "/blog",
    name: "Blog",
    meta: {requiredAuth: false},
    components: {
      default: () => import(/* webpackChunkName: "home" */ "./views/Blog"),
    },
  },
  {
    path: "/mentionlegales",
    name: "Mentions Légales",
    meta: {requiredAuth: false},
    components: {
      default: () =>
        import(/* webpackChunkName: "users" */ "@/views/Mentionlegales"),
    },
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {requiredAuth: false},
    components: {
      default: () =>
          import(/* webpackChunkName: "users" */ "@/components/Contact"),
    },
  },
  {
    path: "/newsletter/:email", // pas de suite, donc fin de l'[A6]  = lyon
    name: "Newsletter",
    meta: {requiredAuth: false},
    components: {
      default: () =>
          import(/* webpackChunkName: "users" */ "@/views/Newsletter"),
    },
  },
  {
    path: "/mentors", // pas de suite, donc fin de l'[A6]  = lyon
    name: "Mentors",
    meta: {requiredAuth: true},
    components: {
      default: () =>
          import(/* webpackChunkName: "users" */ "@/views/Mentors"),
    },
  },
  {
    path: "/mentor-profil/:id", // pas de suite, donc fin de l'[A6]  = lyon
    name: "MentorsProfil",
    meta: {requiredAuth: true},
    components: {
      default: () =>
          import(/* webpackChunkName: "users" */ "@/views/MentorProfil"),
    },
  },
  { path: '*', redirect: '/' },
  ...UserRoutes,
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

Vue.config.productionTip = false;

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: `${process.env.VUE_APP_FIREBASE_APIKEY}`,
  authDomain: "minimalistic-6c67a.firebaseapp.com",
  projectId: "minimalistic-6c67a",
  storageBucket: "minimalistic-6c67a.appspot.com",
  messagingSenderId: "789330058068",
  appId: "1:789330058068:web:fb1ce76f5ebbb3ea5246c1",
  measurementId: "G-GRMY8WZGP6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true})
export {db};

const storageRef = firebase.storage().ref();
export {storageRef};

Vue.use(VueCookies);

router.beforeEach((to, from, next) => {
  const requiredAuth = to.matched.some((record) => record.meta.requiredAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiredAuth && !isAuthenticated) {
    next("/login");
  }else {
    next();
  }
});

import Default from "@/layout/Default";
import Nothing from '@/layout/Nothing';
import User from '@/layout/User';

Vue.component('default-layout', Default);
Vue.component('nothing-layout', Nothing);
Vue.component('user-layout', User);

let app;

firebase.auth().onAuthStateChanged((user) => {
  if(!app) {
  new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");

}
})
(function(e){function t(t){for(var o,a,s=t[0],c=t[1],u=t[2],l=0,m=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({home:"home",users:"users"}[e]||e)+"."+{"chunk-54e211df":"d2921b3c","chunk-588ded5d":"ed703b5a","chunk-7025e078":"41eaead0",home:"8bbfb0d9",users:"37c2fb38"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-588ded5d":1,home:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({home:"home",users:"users"}[e]||e)+"."+{"chunk-54e211df":"31d6cfe0","chunk-588ded5d":"f0025a21","chunk-7025e078":"31d6cfe0",home:"cc513857",users:"31d6cfe0"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],l=u.getAttribute("data-href");if(l===o||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",m.name="ChunkLoadError",m.type=o,m.request=a,n[1](m)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/minimalistic/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1659:function(e,t,n){"use strict";n("8410")},"1a3f":function(e,t,n){},"3db0":function(e,t,n){"use strict";n("1a3f")},"56d7":function(e,t,n){"use strict";n.r(t);n("99af"),n("d3b7");var o=n("2909"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),r=n("8c4f"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("Header"),n("router-view")],1),n("Footer")],1)},s=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-navbar",{staticClass:"nav",attrs:{toggleable:"lg",type:"dark"}},[o("b-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n("8ad4"),alt:"logo",height:"70px"}})]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},[o("b-nav-item",{attrs:{to:"/apropos"}},[e._v("À propos")]),o("b-nav-item",{attrs:{to:"/projets"}},[e._v("Formule d'abonnement")]),o("b-nav-item",{attrs:{to:"/projets"}},[e._v("Contact")]),e.loggedIn?o("b-button",{staticClass:"btn",on:{click:e.signOut}},[e._v("Déconnecter")]):o("div",[o("b-button",{staticClass:"btnConnect",attrs:{to:"/login"}},[e._v("Se conecter")]),o("b-button",{staticClass:"btn",attrs:{to:"/register"}},[e._v("S'incrire")])],1)],1)],1)],1)},u=[],l=(n("96cf"),n("1da1")),m=n("260b"),f={name:"default",created:function(){var e=this;m["a"].auth().onAuthStateChanged((function(t){e.loggedIn=!!t}))},data:function(){return{loggedIn:!1}},methods:{signOut:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m["a"].auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},p=f,d=(n("3db0"),n("2877")),h=Object(d["a"])(p,c,u,!1,null,"174c2785",null),b=h.exports,g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-navbar",{staticClass:"nav",attrs:{toggleable:"lg",type:"dark"}},[o("b-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n("8ad4"),alt:"logo",height:"70px"}})]),o("b-collapse",{staticClass:"menu",attrs:{id:"nav-collapse","is-nav":"",left:""}},[o("b-navbar-nav",[o("b-nav-item",{attrs:{to:"/apropos"}},[e._v("À propos")]),o("b-nav-item",{attrs:{to:"/projets"}},[e._v("Formule d'abonnement")]),o("b-nav-item",{attrs:{to:"/projets"}},[e._v("Contact")])],1),o("b-navbar-nav",{staticClass:"ml-auto",attrs:{left:""}},[o("v-icon",{staticClass:"margin",attrs:{color:"#ffffff"}},[e._v("mdi-twitter")]),o("v-icon",{staticClass:"margin",attrs:{color:"#ffffff"}},[e._v("mdi-facebook")]),o("v-icon",{staticClass:"margin",attrs:{color:"#ffffff"}},[e._v("mdi-instagram")])],1)],1)],1)},v=[],E={name:"Footer"},_=E,y=(n("1659"),Object(d["a"])(_,g,v,!1,null,"99545a1a",null)),I=y.exports,S={name:"App",components:{Header:b,Footer:I},data:function(){return{connected:!1,nom:"",prenom:"",email:"",empty:!1,valid:!1}},methods:{connect:function(){""===this.prenom&&""===this.nom&&""===this.email?this.empty=!0:(this.connected=!0,this.valid=!0,this.changeNomPrenom({prenom:this.prenom,nom:this.nom,email:this.email}),this.$router.push("/user"))},disconnect:function(){this.$store.dispatch("resetUser"),this.connected=!1,console.log(this.connected),this.nom="",this.prenom="",this.email=""},changeNomPrenom:function(e){this.$store.dispatch("updateUser",e)}}},O=S,k=(n("034f"),Object(d["a"])(O,i,s,!1,null,null,null)),R=k.exports,w=n("2f62");a["default"].use(w["a"]);var P=new w["a"].Store({state:{prenom:"",nom:"",email:""},mutations:{RETRIEVE_PRENOM:function(e){localStorage.getItem("prenom")&&(e.prenom=localStorage.getItem("prenom"))},UPDATE_PRENOM:function(e,t){return localStorage.setItem("prenom",t.prenom),e.prenom=t.prenom},RETRIEVE_NOM:function(e){localStorage.getItem("nom")&&(e.nom=localStorage.getItem("nom"))},UPDATE_NOM:function(e,t){return localStorage.setItem("nom",t.nom),e.nom=t.nom},RETRIEVE_EMAIL:function(e){localStorage.getItem("email")&&(e.email=localStorage.getItem("email"))},UPDATE_EMAIL:function(e,t){return localStorage.setItem("email",t.email),e.email=t.email},RESET_PRENOM:function(e){localStorage.setItem("prenom",""),e.prenom=""},RESET_NOM:function(e){localStorage.setItem("nom",""),e.nom=""},RESET_EMAIL:function(e){localStorage.setItem("email",""),e.email=""}},actions:{retrieveUser:function(e){e.commit("RETRIEVE_PRENOM"),e.commit("RETRIEVE_NOM"),e.commit("RETRIEVE_EMAIL")},updateUser:function(e,t){e.commit("UPDATE_PRENOM",t),e.commit("UPDATE_NOM",t),e.commit("UPDATE_EMAIL",t)},resetUser:function(e){e.commit("RESET_NOM"),e.commit("RESET_PRENOM"),e.commit("RESET_EMAIL")}}}),T=P,A=n("5f5b"),C=n("b1e0"),M=[{path:"/user",name:"User",components:{default:function(){return n.e("chunk-588ded5d").then(n.bind(null,"a01f"))}},children:[{path:"/profil",name:"Profil2",components:{default:function(){n.e("chunk-588ded5d").then(n.bind(null,"a01f"))}}}]},{path:"/login",name:"Login",components:{default:function(){return n.e("chunk-7025e078").then(n.bind(null,"578a"))}}},{path:"/register",name:"Register",components:{default:function(){return n.e("chunk-54e211df").then(n.bind(null,"1feb"))}}}],j=n("bc3a"),N=n.n(j),x=n("ce5b"),L=n.n(x);n("bf40");a["default"].use(L.a);var U={},D=new L.a(U);n("000b"),n("ea7b"),n("e71f"),n("f9e3");a["default"].prototype.$axios=N.a,a["default"].use(A["a"]),a["default"].use(C["a"]),a["default"].use(r["a"]);var $=[{path:"/",name:"Home",components:{default:function(){return n.e("home").then(n.bind(null,"bb51"))}},children:[]},{path:"/apropos",name:"Apropos",components:{default:function(){return n.e("home").then(n.bind(null,"d2e5"))}}},{path:"/projets",name:"Projets",components:{default:function(){return n.e("home").then(n.bind(null,"12ac"))}}},{path:"/mentionlegales",name:"Mentions Légales",components:{default:function(){return n.e("users").then(n.bind(null,"30db"))}}}].concat(Object(o["a"])(M)),V=new r["a"]({mode:"history",base:"/minimalistic/",routes:$});a["default"].config.productionTip=!1;var F={apiKey:"AIzaSyCeHKkGpRgVDraBAeqcyIuYlTn3J2Gwzls",authDomain:"minimalistic-6c67a.firebaseapp.com",projectId:"minimalistic-6c67a",storageBucket:"minimalistic-6c67a.appspot.com",messagingSenderId:"789330058068",appId:"1:789330058068:web:fb1ce76f5ebbb3ea5246c1",measurementId:"G-GRMY8WZGP6"};m["a"].initializeApp(F),new a["default"]({vuetify:D,router:V,store:T,render:function(e){return e(R)}}).$mount("#app")},8410:function(e,t,n){},"85ec":function(e,t,n){},"8ad4":function(e,t,n){e.exports=n.p+"img/minimalistic-white.e116a807.png"}});
//# sourceMappingURL=app.b8dc0cf7.js.map
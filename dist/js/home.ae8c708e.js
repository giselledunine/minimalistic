(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0f91":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var s=i("3245");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return s.EmailJSResponseStatus}});var a=i("5129"),n=null,r="https://api.emailjs.com";function o(e,t,i){return void 0===i&&(i={}),new Promise((function(a,n){var r=new XMLHttpRequest;for(var o in r.addEventListener("load",(function(e){var t=new s.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?a(t):n(t)})),r.addEventListener("error",(function(e){n(new s.EmailJSResponseStatus(e.target))})),r.open("POST",e,!0),i)r.setRequestHeader(o,i[o]);r.send(t)}))}function u(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function c(e){return"#"!==e[0]&&"."!==e[0]?"#"+e:e}function m(e,t){n=e,r=t||"https://api.emailjs.com"}function l(e,t,i,s){var a={lib_version:"2.6.4",user_id:s||n,service_id:e,template_id:t,template_params:u(i)};return o(r+"/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})}function d(e,t,i,s){if("string"===typeof i&&(i=document.querySelector(c(i))),!i||"FORM"!==i.nodeName)throw"Expected the HTML form element or the style selector of form";a.UI.progressState(i);var u=new FormData(i);return u.append("lib_version","2.6.4"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",s||n),o(r+"/api/v1.0/email/send-form",u).then((function(e){return a.UI.successState(i),e}),(function(e){return a.UI.errorState(i),Promise.reject(e)}))}t.init=m,t.send=l,t.sendForm=d,t.default={init:m,send:l,sendForm:d}},"12ac":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("h1",[e._v("Projets")]),i("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis! ")])])}],n={name:"apropos"},r=n,o=(i("4540"),i("2877")),u=Object(o["a"])(r,s,a,!1,null,"cb3f9caa",null);t["default"]=u.exports},"2e8a":function(e,t,i){e.exports=i.p+"img/fond3.72ad5192.png"},3245:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var s=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=s},4540:function(e,t,i){"use strict";i("d551")},5129:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var s=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=s},"5f54":function(e,t,i){},ac6c:function(e,t,i){"use strict";i("5f54")},ada4:function(e,t,i){e.exports=i.p+"img/fond1.ff698da3.png"},bb51:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"flex1"},[i("div",{staticClass:"home"},[e._m(0),i("p",[e._v("Nous vous proposons une transition vers le minimalisme adaptée uniquement pour vous car chaque personne peut avoir sa propre vision du minimalisme.")]),i("p",{staticClass:"inputlabel"},[e._v("S'incrire à la Newsletter")]),i("form",{on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[i("v-container",{staticClass:"inscription"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"9"}},[i("b-form-input",{staticClass:"input",attrs:{type:"email",name:"customer_email",state:e.nameState,placeholder:"Votre adresse mail"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("v-col",{attrs:{cols:"12",sm:"3"}},[i("b-button",{staticClass:"btn marginLeft",attrs:{type:"submit"}},[e._v("S'incrire")])],1)],1)],1)],1)]),e._m(1)]),e._m(2),i("div",{staticClass:"flex2"},[e._m(3),i("v-divider",{staticClass:"mx-4 divider hidden"}),i("v-divider",{staticClass:"mx-4 divider show",attrs:{vertical:""}}),e._m(4),i("v-divider",{staticClass:"mx-4 divider hidden"}),i("v-divider",{staticClass:"mx-4 divider show",attrs:{vertical:""}}),e._m(5),i("v-divider",{staticClass:"mx-4 divider hidden"}),i("v-divider",{staticClass:"mx-4 divider show",attrs:{vertical:""}}),e._m(6)],1),e._m(7),e._m(8),e._m(9),i("div",[i("div",{staticClass:"div4"},[i("h2",[e._v("Formules d’abonnement")]),i("p",[e._v("Des formules adaptées à vos besoins")]),i("div",{staticClass:"flex3"},[i("div",{staticClass:"prices"},[i("h4",[e._v("Essentiel")]),e._m(10),i("v-list",{attrs:{dense:"",dark:""}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Coaching vidéo/conférence ")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Guide ")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Suivi simple ")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Vidéos et replays ")])],1),i("v-list-item",{attrs:{disabled:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{disabled:""}},[e._v("mdi-close")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Coach personnel ")])],1),i("v-list-item",{attrs:{disabled:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{disabled:""}},[e._v("mdi-close")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" 7 jours d'essai gratuit ")])],1)],1),i("b-button",{staticClass:"btn"},[e._v("Commencer")])],1),i("div",{staticClass:"prices"},[i("h4",[e._v("Premium")]),e._m(11),i("v-list",{attrs:{dense:"",dark:""}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Coaching vidéo/conférence ")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Guide ")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Suivi simple ")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Vidéos et replays ")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" Coach personnel ")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v("mdi-check")])],1),i("v-list-item-content",{staticClass:"marginLeft"},[e._v(" 15 jours d'essai gratuit ")])],1)],1),i("b-button",{staticClass:"btn"},[e._v("Commencer")])],1)])])]),i("div",{staticClass:"div5"},[i("h2",[e._v("S'inscrire à la newsletter")]),i("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[i("v-container",{staticClass:"inscription newsletter"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"9"}},[i("b-form-input",{staticClass:"input",attrs:{type:"email",name:"customer_email",state:e.nameState,placeholder:"Votre adresse mail"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("v-col",{attrs:{cols:"12",sm:"3"}},[i("b-button",{staticClass:"btn marginLeft",attrs:{type:"submit"}},[e._v("S'incrire")])],1)],1)],1)],1)])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[e._v("Le "),i("span",[e._v("mentoring")]),e._v(" qui permet aux nouveaux minimalistes d'êtres coachés")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"img"},[s("img",{attrs:{src:i("ada4"),width:"100%",alt:"fond1"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"div2"},[i("h2",[e._v("Notre objectif est d’accompagner nos futurs minimalistes")]),i("p",[e._v("Notre but est d’offrir aux minimalistes la meilleure transition propre a eux-mêmes. Minimalistic vous propose une plateforme de mentoring qui permettra aux nouveaux minimalistes d’être coaché par des minimalistes experts sur plusieurs sujets (mode de vie, mobilier, décoration, alimentation...)")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cardnumber"},[i("p",{staticClass:"number"},[e._v("25")]),i("p",[e._v("pays")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cardnumber"},[i("p",{staticClass:"number"},[e._v("183")]),i("p",[e._v("clients")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cardnumber"},[i("p",{staticClass:"number"},[e._v("100")]),i("p",[e._v("mentors")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cardnumber"},[i("p",{staticClass:"number"},[e._v("+500")]),i("p",[e._v("visiteurs")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"paddingImg"},[s("img",{attrs:{src:i("c556"),width:"100%",alt:"videos"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"div3"},[s("div",{staticClass:"img"},[s("img",{attrs:{id:"img",src:i("2e8a"),alt:"img"}})]),s("div",{staticClass:"home"},[s("h2",[e._v("Tout se passe à distance")]),s("p",[e._v("Pas besoin de vous déplacer, nos coachs sont prêts à vous recevoir. En quelques clics, vous vous connectez et commencez votre premier cours !")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"div5 padding"},[i("div",[e._v(" Images ")]),i("h2",[e._v("Des milliers de coachs spécialisés pour vous")]),i("p",[e._v("Nous avons des milliers de coachs venant du monde entier qui sont là pour vous aider !")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h3",{staticClass:"number"},[e._v("10€"),i("span",{staticClass:"details"},[e._v("par mois")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h3",{staticClass:"number"},[e._v("20€"),i("span",{staticClass:"details"},[e._v("par mois")])])}],n=(i("b0c0"),i("0f91")),r=i.n(n),o={name:"Home",methods:{sendEmail:function(e){r.a.sendForm("service_jigdj2r","template_1z1zwi9",e.target,"user_jCrnz8KGYvv1r02jdXO6Y").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}},computed:{nameState:function(){return this.name.length>2||0===this.name.length}},data:function(){return{name:""}}},u=o,c=(i("ac6c"),i("2877")),m=Object(c["a"])(u,s,a,!1,null,"82196cfc",null);t["default"]=m.exports},c556:function(e,t,i){e.exports=i.p+"img/fond2.e35b6340.png"},cddc:function(e,t,i){"use strict";i("fbab")},d2e5:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("h1",[e._v("À propos")]),i("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis! ")])])}],n={name:"apropos"},r=n,o=(i("cddc"),i("2877")),u=Object(o["a"])(r,s,a,!1,null,"51d9d4a4",null);t["default"]=u.exports},d551:function(e,t,i){},fbab:function(e,t,i){}}]);
//# sourceMappingURL=home.ae8c708e.js.map
<template>
<div class="div">
  <div class="div1">
      <h1>Minimalistic_</h1>
      <b-btn class="button" to="/apropos">Découvrez le projet</b-btn>
  </div>

    <div>
      <form class="contact-form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="customer_name">
        <label>Email</label>
        <input type="email" name="customer_email">
        <input type="submit" value="Send">
      </form>
    </div>
  <iframe width="540" height="305" src="https://68b5df3a.sibforms.com/serve/MUIEACMq6FqOpsmRjneAL_Wc-5016CCWK2b4gVFB9Ze29PNPwZ9CLf9UQtb6FvV5X6eqM3U_z_fL6zcxqF2ISfQ3PGPAjRRkEKXC8R9n9UBTG8nP_uzM1ECextkbz2M-7x6lMZHqGxLevDa1OVfvtM8pGE7m-Cwff1WSOSOzkVJdjcEq-9E8JScA_-0WByP-ocJTkdCMsNNixdN2" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe></div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
name: "Home",

  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_xiuzwbp', 'template_1z1zwi9', e.target,
          'user_jCrnz8KGYvv1r02jdXO6Y')
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
          }, (error) => {
            console.log('FAILED...', error);
          });
    }
  }
}
</script>

<style lang="css">

h1 {
  font-family: 'Roboto Condensed';
  font-size: 5em;
  color: black;
  margin-bottom: 2rem;
}

.div1 {
  width: 100%;
  background-image: url("./../assets/img/minimalism.gif");
  background-size: cover;
  height: 80vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

input {
  color: white;
}

.contact-form {
  color: white;
}

.button {
  background-color: black;
  padding: 1rem;
  color: white;
  border-radius: 0;
  border: solid 2px black;
}

.button:hover {
  background-color: white;
}

</style>
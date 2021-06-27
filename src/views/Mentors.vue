<template>
  <div>
    <h1>Mentors</h1>
  </div>
</template>

<script>
import {db} from '@/main.js';

export default {
name: "Mentors",
  data(){
  return {
    mentors: [],
  }
  },
  mounted(){
      db.collection('articles').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.data().fullname)
        });
      });
  }
}
</script>

<style scoped>

</style>
<template>
<div>
  <slot />
</div>
</template>

<script>
export default {
  name: "Nothing",
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>

.no-padding {
  padding: 0 !important;
}

</style>
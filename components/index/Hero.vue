<template>
  <div class="flex flex-col justify-center content-center text-center">
    <HeroText />
    <div class="flex flex-row mt-5">
      <Button page="projets">Voir mes projets</Button>
      <Button page="contact">Me contacter</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Hero',
});
</script>

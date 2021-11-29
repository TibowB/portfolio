<template>
  <div class="flex flex-col justify-center content-center text-center">
    <HeroText />
    <div class="flex flex-row">
      <Button>Voir mes projets</Button>
      <Button>Me contacter</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Hero',
});
</script>

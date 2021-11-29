<template>
  <nav class="flex justify-center m-2">
    <NuxtLink to="/">
      <h1
        class="text-2xl uppercase text-headline font-sans hover:scale-125 tracking-widest"
      >
        bruggeman.dev
      </h1>
    </NuxtLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'NavBar',
});
</script>

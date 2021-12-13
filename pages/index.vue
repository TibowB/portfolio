<template>
  <div class="flex justify-center items-center">
    <Hero />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Index',
  layout: 'default',
  head() {
    return {
      title: 'Home',
    };
  },
});
</script>

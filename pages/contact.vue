<template>
  <div class="flex justify-center content-center text-center">
    <ContactCard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contact',
  layout: 'default',
  head() {
    return {
      title: 'Contact',
    };
  },
});
</script>

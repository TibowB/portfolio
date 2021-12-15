<template>
  <a :href="url" target="_blank" rel="nofollow noopener noreferrer">
    <img
      class="w-6 h-6 object-cover cursor-pointer transform transition duration-300 hover:scale-110"
      :src="`/img/${icon}.png`"
      alt="Thibault Bruggeman contact picture"
    />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ContactIcon',
  props: {
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

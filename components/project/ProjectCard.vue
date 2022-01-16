<template>
  <div class="mx-5 min-h-screen grid place-content-center">
    <div
      class="bg-card py-4 px-6 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-s mx-auto"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ProjectCard',
});
</script>

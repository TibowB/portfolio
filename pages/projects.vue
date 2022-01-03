<template>
  <ProjectCard />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
  layout: 'default',
  head() {
    return {
      title: 'Projects',
    };
  },
});
</script>

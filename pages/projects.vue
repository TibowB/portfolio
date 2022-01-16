<template>
  <div class="flex justify-center content-center text-center mx-auto">
    <ProjectCard v-for="project in projects" :key="project.id">
      <h4 class="font-semibold mb-2">{{ project.name }}</h4>
      <img
        class="max-w-70 max-h-60 rounded-md mx-auto shadow-lg"
        :src="project.imagePath"
        :alt="project.imageAlt"
      />
      <div class="flex flex-row justify-between items-center">
        <Button :page="project.live" isProject> Live </Button>
        <Button :page="project.code" isProject> Code </Button>
      </div>
    </ProjectCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
  layout: 'default',
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    },
  },
  head() {
    return {
      title: 'Projects',
    };
  },
});
</script>

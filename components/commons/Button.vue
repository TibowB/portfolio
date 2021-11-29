<template>
  <button
    class="btn bg-button-default hover:bg-button-dark text-buttonText hover:text-primary max-w-md mx-auto m-5"
    @click="goToProjectsPage"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  methods: {
    goToProjectsPage() {
      this.$router.push({ name: 'projets' });
    },
  },
});
</script>
<style lang="postcss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
</style>

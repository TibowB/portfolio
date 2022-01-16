<template>
  <button
    class="btn bg-button-default hover:bg-button-dark text-buttonText hover:text-primary max-w-md mx-auto m-5 transform transition duration-300 hover:scale-110"
    @click="linkToPage()"
  >
    <a v-if="isProject" :href="page" target="_blank">
      <slot></slot>
    </a>
    <slot v-else></slot>
  </button>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: {
    page: {
      type: String,
      required: true,
    },
    isProject: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    linkToPage() {
      return this.$props.isProject
        ? null
        : this.$router.push({ name: this.$props.page });
    },
  },
});
</script>
<style lang="postcss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
</style>

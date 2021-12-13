<template>
  <div class="fixed inset-y-0 m-5" :class="`${position}-0`">
    <div class="flex flex-col justify-center items-center h-screen">
      <NuxtLink
        :to="`/${name}`"
        class="transform transition duration-300 hover:scale-110"
      >
        <div class="text-headline uppercase flex flex-col text-2xl">
          <span v-for="(letter, index) of name" :key="index">
            {{ letter }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: 'Sidebar',
    },
    position: {
      type: String,
      default: 'left',
    },
  },
  methods: {
    getClass(position: string): string {
      return `fixed inset-y-0 ${position}-0 h-screen flex items-center m-5`;
    },
  },
  name: 'SideBar',
  layout: 'default',
});
</script>

<style scoped></style>

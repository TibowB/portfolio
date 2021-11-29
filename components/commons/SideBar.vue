<template>
  <div :class="getClass(position)">
    <NuxtLink :to="`/${name}`" class="hover:bg-red">
      <div class="text-headline uppercase flex flex-col text-2xl">
        <span v-for="(letter, index) of name" :key="index">
          {{ letter }}
        </span>
      </div>
    </NuxtLink>
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
      return `fixed bottom-0 ${position}-0 h-screen flex items-center m-5`;
    },
  },
  name: 'SideBar',
  layout: 'default',
});
</script>

<style scoped></style>

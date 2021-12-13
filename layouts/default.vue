<template>
  <div>
    <NavBar />
    <div class="flex">
      <SideBar name="projets" position="left" />
      <Nuxt class="h-screen m-auto" />
      <SideBar name="contact" position="right" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Default',
});
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  background-color: #fef6e4;
}
</style>

<template>
  <div>
    <NavBar />
    <SideBar name="projets" position="left" />
    <SideBar name="contact" position="right" />
    <Nuxt class="h-screen flex justify-center content-center" />
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

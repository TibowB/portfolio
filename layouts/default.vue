<template>
  <div>
    <NavBar />
    <SideBar name="projets" position="left"/>
    <SideBar name="contact" position="right"/>
    <Nuxt class="h-screen flex justify-center content-center"/>
  </div>
</template>

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

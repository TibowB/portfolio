<template>
  <div class="mx-5 min-h-screen grid place-content-center">
    <div
      class="bg-card py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-s mx-auto"
    >
      <img
        class="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
        src="/img/contact/contact.jpeg"
        alt="Thibault Bruggeman contact picture"
      />
      <p class="capitalize text-2xl text-buttonText m-3">Thibault Bruggeman</p>
      <div class="flex flex-row space-x-4 justify-center mt-2 items-center">
        <ContactIcon url="https://github.com/TibowB" icon="github" />
        <ContactIcon
          url="https://www.linkedin.com/in/thibault-bruggeman-435b0687/"
          icon="linkedin"
        />
        <ContactIcon url="mailto:bruggeman.dev@gmail.com" icon="email" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ContactCard',
});
</script>

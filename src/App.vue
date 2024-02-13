<template>
  <v-app>
    <Nav />
    <v-main>
      <RouterView />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
</script>

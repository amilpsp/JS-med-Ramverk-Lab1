<script setup>
</script>

<template>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Application Bar</v-app-bar-title>
      <v-button icon>
        <Router-link to="/"><v-icon>mdi-home</v-icon>Home</Router-link>
      </v-button>
      <v-button icon>
        <Router-link to="/about"><v-icon>mdi-info</v-icon>About</Router-link>
      </v-button>
      <v-button icon>
        <Router-link to="/contact"><v-icon>mdi-email</v-icon>Contact</Router-link>
      </v-button>
    </v-app-bar>
</template>
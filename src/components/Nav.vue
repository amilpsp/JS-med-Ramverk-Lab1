<script setup>
</script>

<template>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
    
      <v-app-bar-title>Application Bar</v-app-bar-title>
        <ul>
          <li><Router-link to="/">Home</Router-link></li>
          <li><Router-link to="/about">About</Router-link></li>
          <li><Router-link to="/contact">Contact</Router-link></li>
        </ul>
    </v-app-bar>
</template>
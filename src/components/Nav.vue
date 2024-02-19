<script setup></script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <Router-link to="/">
        <img id="app-bar-logo" src="../assets/logo.png" />
      </Router-link>
    </template>
    <v-app-bar-title id="store-name">NURDS</v-app-bar-title>
    <Router-link to="/">
      <v-btn class="ma-2" variant="tonal">
        <v-icon start icon="mdi-home"></v-icon>
        Home
      </v-btn>
    </Router-link>
    <Router-link to="/checkout">
      <v-btn class="ma-2" variant="tonal">
        <v-icon start icon="mdi-cart-variant"></v-icon>
        Checkout
      </v-btn>
    </Router-link>
    <v-app-bar-nav-icon icon="mdi-magnify"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap");

#store-name {
  font-family: "Protest Guerrilla", sans-serif;
  font-size: 2em;
}
#app-bar-logo {
  height: 2em;
}
a {
  text-decoration: none;
}
v-btn {
  flex-direction: row;
  justify-content: center;
}
</style>

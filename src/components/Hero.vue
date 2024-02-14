<template>
  <v-container id="hero-container">
    <v-responsive class="align-center text-center" id="hero-div">
      <!-- <img :src="heroImgSrc" /> -->
      <div class="text-h4 mb-n1">Welcome to</div>
      <h1 class="text-h1 font-weight-bold" id="store-name">NURDS</h1>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  props: {
    heroImgSrc: "",
    /* passing the imgSrc to the component from the view through a String prop instead */
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap");

#hero-div {
  height: 90vh;
}

#store-name {
  font-family: "Protest Guerrilla", sans-serif;
  font-size: 2em;
}
</style>

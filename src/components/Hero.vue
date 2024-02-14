<template>
  <div id="hero-img">
    <v-container id="hero-container">
      <v-responsive class="align-center text-center shade" id="hero-div">
        <!-- <img :src="heroImgSrc" /> -->
        <div class="text-h4 mb-n1">Welcome to</div>
        <h1 class="text-h1 font-weight-bold" id="store-name">NURDS</h1>
      </v-responsive>
    </v-container>
  </div>
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

.shade {
  background: radial-gradient(
    circle,
    rgb(27, 27, 27) 0%,
    rgba(27, 27, 27, 0.502) 15%,
    rgba(255, 255, 255, 0) 40%
  );
}
#hero-img {
  background-image: url(../src/assets/img/mini-army.jpeg);
  background-position: center;
  background-size: cover;
  width: 100vw;
  filter: grayscale();
}
#hero-div {
  height: 90vh;
}
#store-name {
  font-family: "Protest Guerrilla", sans-serif;
  font-size: 2em;
}
</style>

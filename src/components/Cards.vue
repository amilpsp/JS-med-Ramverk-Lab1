<template>
  <v-col cols="3">
    <v-card>
      <v-img :src="cardImgSrc" height="200px" cover />

      <v-card-title> {{ product.title }} </v-card-title>

      <v-card-subtitle> {{ product.description }} </v-card-subtitle>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
    cardImgSrc: {
      type: String,
    },
  },
};
</script>
<!-- /* {
      "id": "",
      "title": "",
      "brand": "",
      "author": "",
      "category": "",
      "price": "",
      "sizes": ["xs", "s", "m", "l", "xl"],
      "img-src": "",
      "alt": "",
      "best-seller": "false",
      "available": "true"
    } */ -->

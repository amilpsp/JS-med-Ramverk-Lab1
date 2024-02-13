<template>
  <v-col cols="auto" class="align-items-center">
    <v-card min-width="300" max-width="344">
      <v-img src="../assets/img/combat-map.jpeg" height="200px" cover></v-img>

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

<script setup>
import Hero from "@/components/Hero.vue";
import Store from "@/components/Store.vue";
</script>
<template>
  <Hero id="hero" :heroImgSrc="heroBackground" />
  <v-row class="d-flex align-center justify-center">
    <Store
      v-for="product in products"
      :key="product.id"
      :product="product"
      :cardImgSrc="product.imgSrc"
    />
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      categories: ["Books", "Supplies", "Electronics", "Clothes"],
      heroBackground: "../src/assets/img/mini-army.jpeg",
    };
  },
  name: "HomeView",
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch("../src/products.json")
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          this.products = result;
        });
    },
  },
};
</script>
<style>
#hero {
  background-image: url(../src/assets/img/mini-army.jpeg);
  background-position: center;
  background-size: cover;
  width: 100vw;
  filter: grayscale() contrast(1.2);
}
</style>

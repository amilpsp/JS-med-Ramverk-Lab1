<script setup>
import Hero from "@/components/Hero.vue";
import Cards from "@/components/Cards.vue";
</script>
<template>
  <Hero :heroImgSrc="heroBackground" />
  <v-row class="d-flex align-center justify-center pa-10">
    <Cards
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
      categories: [
        { name: "Books", active: true },
        { name: "Supplies", active: true },
        { name: "Electronics", active: true },
        { name: "Clothes", active: true },
      ],
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

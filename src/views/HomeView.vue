<script setup>
import Hero from "@/components/Hero.vue";
import Store from "@/components/Store.vue";
</script>
<template>
  <Hero />
  <v-row class="d-flex align-center justify-center">
    <Store v-for="product in products" :key="product.id" :product="product" />
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  name: "HomeView",
  components: { store: Store },
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
<style></style>

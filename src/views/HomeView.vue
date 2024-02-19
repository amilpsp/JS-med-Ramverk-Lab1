<script setup>
import Hero from "@/components/Hero.vue";
import Cards from "@/components/Cards.vue";
</script>
<template>
  <Hero :heroImgSrc="heroBackground" />

  <v-row class="d-flex my-10 ml-3" no-gutters>
    <v-col cols="3" class="d-flex flex-column pt-3">
      <v-sheet>
        <v-list>
          <v-list-item v-for="category in categories" :status="category.active">
            <v-btn
              :color="category.active ? 'green' : ''"
              @click="category.active = !category.active"
            >
              {{ category.name }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>
    <v-col class="d-flex flex-wrap align-center" no-gutters>
      <Cards
        v-for="product in products"
        :key="product.id"
        :product="product"
        :cardImgSrc="product.imgSrc"
      />
    </v-col>
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

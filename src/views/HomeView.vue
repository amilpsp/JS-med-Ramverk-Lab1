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
          <v-list-item v-for="category in categories">
            <v-btn
              width="100%"
              @click="toggleCategoryStatus(category)"
              :color="category.name === activeCategory ? 'green' : ''"
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
        :category="product.category"
        :activeCategory="activeCategory"
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      activeCategory: "All",
      categories: [
        { name: "Books", active: false },
        { name: "Supplies", active: false },
        { name: "Electronics", active: false },
        { name: "Clothes", active: false },
        { name: "Merch", active: false },
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
      fetch("../products.json")
        .then((response) => response.json())
        .then((result) => {
          this.products = result;
        });
    },
    toggleCategoryStatus(clickedCategory) {
      clickedCategory.active = !clickedCategory.active;
      if (clickedCategory.active === true) {
        this.activeCategory = clickedCategory.name;
      } else {
        this.activeCategory = "All";
      }
      console.log(this.activeCategory);
    },
  },
};
</script>

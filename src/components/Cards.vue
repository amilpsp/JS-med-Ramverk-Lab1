<template>
  <v-col cols="3">
    <v-card>
      <v-img :src="cardImgSrc" cover />

      <v-card-title>
        <!-- <v-card-title class="text-wrap"> -->
        {{ product.title }}
      </v-card-title>

      <v-card-subtitle>SEK {{ product.price }}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Read more </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ product.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
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

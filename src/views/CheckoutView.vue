<script setup>
import CheckoutForm from "@/components/CheckoutForm.vue";
import Cart from "@/components/Cart.vue";
</script>
<template>
  <v-row class="my-4">
    <v-col class="ml-3">
      <h1 class="text-center">Your Cart</h1>
      <Cart></Cart>
    </v-col>
    <v-col class="mr-3" cols="4">
      <h1 class="text-center">Checkout</h1>
      <CheckoutForm></CheckoutForm>
    </v-col>
  </v-row>
</template>

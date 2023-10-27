<template>
  <v-carousel hide-delimiters class="swiper d-xs-flex d-sm-flex d-md-none">
    <div v-show="isVisible" class="swiper__cart">
      <app-body-cart></app-body-cart>
    </div>
    <v-carousel-item
      v-for="(product, index) in products"
      :key="index"
      :src="`/images/${product}.jpg`"
      contain
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/stores/useCart";

const products = ref<string[]>([
  "image-product-1",
  "image-product-2",
  "image-product-3",
  "image-product-4",
]);

const store = useCartStore();
const { isVisible } = storeToRefs(store);
</script>

<style lang="scss">
@import "/assets/scss/styles/body/app-body-swiper-mobile.scss";
</style>

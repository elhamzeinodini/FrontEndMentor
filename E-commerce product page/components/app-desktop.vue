<template>
  <div class="d-none d-sm-none d-md-flex d-lg-flex flex-column">
    <app-navigation-desktop></app-navigation-desktop>
    <div class="wrapper">
      <div v-show="cart.isVisible" class="wrapper__cmp">
        <app-body-cart></app-body-cart>
      </div>
      <app-body-product-desktop></app-body-product-desktop>
      <app-body-product-info></app-body-product-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/useCart';

const cart = useCartStore()
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding-inline: 4rem;
  position: relative; 
  z-index: 1 !important;
  &__cmp{
    position: absolute;
    inset: -4rem 0 auto auto;
    width: 20rem;
    z-index: 9999;
    border-radius: $rm-0-5;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
}
</style>
<template>
  <section class="cart">
    <h3 class="cart__title">Cart</h3>
    <p class="cart__status" v-show="!count">your card is empty</p>
    <div
      class="cart__item"
      v-show="count"
      v-for="product in productList"
      :key="product.id"
    >
      <img
        src="/images/image-product-1-thumbnail.jpg"
        alt="cart image"
        class="cart__item__img"
      />
      <div class="cart__item__info">
        <p class="cart__item__name">Fall Limited Edition Sneakers</p>
        <p class="cart__item__price">
          <span>${{ product.price }}</span>
          <span>&nbsp x {{ count }}</span>
          <strong>&nbsp ${{ totalPrice }}</strong>
        </p>
      </div>
      <img
        src="/images/icon-delete.svg"
        alt="delete icon"
        class="cart__item__icon"
        @click="cart.removeFromCart(product.id)"
      />
    </div>
    <button v-show="count" class="cart__btn">checkout</button>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/stores/useCart";
const cart = useCartStore();
const { totalPrice, productList, count } = storeToRefs(cart);
</script>

<style lang="scss">
@import "/assets/scss/styles/body/app-body-cart-mobile.scss";
</style>

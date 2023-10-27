<template>
  <section class="product">
    <h5 class="product__name">Sneaker Company</h5>
    <div class="product__info" v-for="product in productList" :key="product.id">
      <h2 class="product__title">{{ product.title }}</h2>
      <p class="product__description">{{ product.description }}</p>
      <div class="product__price">
        <div class="product__price__left">
          <span class="product__price__after">${{ product.price }}</span>
          <span class="product__price__discount">50%</span>
        </div>
        <div class="product__price__right">
          <span class="product__price__before">$250.00</span>
        </div>
      </div>
      <div class="product__btns">
        <div class="product__count">
          <div class="product__count__plus">
            <img
              src="/images/icon-plus.svg"
              alt="plus icon"
              class="product__btn__plus__item"
              @click="cart.increment()"
            />
          </div>
          <span class="product__count__num">{{ count }}</span>
          <div class="product__count__minus">
            <img
              src="/images/icon-minus.svg"
              alt="minus icon"
              class="product__btn__minus__item"
              @click="cart.decrement()"
            />
          </div>
        </div>
        <button class="product__btn" @click="cart.addToCart(product.id)">
          <img
            src="/images/icon-add-to-cart.svg"
            alt="add to cart icon"
            class="product__btn__icon"
          />
          <span class="product__btn__text">Add to cart</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/stores/useCart";

const cart = useCartStore();
const { count, productList } = storeToRefs(cart);
</script>

<style lang="scss">
@import "/assets/scss/styles/body/app-body-product-info-mobile.scss";
@import "/assets/scss/styles/body/app-body-product-info-desktop.scss";
</style>

<template>
  <nav class="nav d-none d-md-flex">
    <div class="nav__left">
      <img src="/images/logo.svg" alt="logo" class="nav__logo" />
      <ul class="nav__list">
        <li class="nav__item" v-for="(link, index) in links" :key="index">{{ link }}</li>
      </ul>
    </div>
    <div class="nav__right">
      <div class="nav__cart">
        <span class="nav__cart__count" v-show="inCart">{{ count }}</span>
        <img
          src="/images/icon-cart.svg"
          alt="cart icon"
          class="nav__cart__item"
          @click="cart.toggleCmp"
        />
      </div>
      <img
        src="/images/image-avatar.png"
        alt="profile icon"
        class="nav__profile"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/stores/useCart";

const links = ref<string[]>(["Collection", "Men", "Women", "About", "Contact"]);

const cart = useCartStore();
const { count, inCart } = storeToRefs(cart);
</script>


<style lang="scss">
@import '/assets/scss/styles/navigation/app-navigation-desktop.scss';
@import '/assets/scss/styles/navigation/app-navigation-tablet.scss';
</style>
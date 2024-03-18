<template>
  <header>
    <nav class="navbar">
      <div class="left">
        <img
          src="/images/icons/icon-menu.svg"
          alt="menu"
          @click="isNavDrawerOpen = true"
        />
        <img src="/images/app/logo.svg" alt="logo" />
      </div>

      <div class="right">
        <img
          src="/images/icons/icon-cart.svg"
          alt="shopping cart"
          @click="isAddToCartModalVisible = true"
        />
        <img src="/images/app/image-avatar.png" alt="avatar" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";
import { useProductStore } from "~/store/product";

///////////////////////////// app store
const { isNavDrawerOpen } = storeToRefs(useAppStore());

//////////////////////////// product store
const { isAddToCartModalVisible } = storeToRefs(useProductStore());
</script>

<style lang="scss">
@import "./assets/styles/components/navbar.scss";
</style>

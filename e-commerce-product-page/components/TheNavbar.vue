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
        <img src="/images/icons/icon-cart.svg" alt="shopping cart" />
        <img src="/images/app/image-avatar.png" alt="avatar" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";

///////////////////////////// app store
const { isNavDrawerOpen } = storeToRefs(useAppStore());
</script>

<style lang="scss">
@import "./assets/styles/components/navbar.scss";
</style>

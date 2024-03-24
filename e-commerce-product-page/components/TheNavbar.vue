<template>
  <header>
    <nav class="navbar">
      <div class="left">
        <img
          src="/images/icons/icon-menu.svg"
          alt="menu"
          class="hidden-sm-and-up"
          @click="isNavDrawerOpen = true"
        />

        <img src="/images/app/logo.svg" alt="logo" />

        <ul class="route-list hidden-xs-only">
          <li v-for="route in NavRoutes" :key="route.id">
            <nuxt-link>{{ route.name }}</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="right">
        <div class="shop-icon">
          <span v-if="itemQuantity">{{ itemQuantity }}</span>

          <el-icon @click="isAddToCartModalVisible = true">
            <ShoppingTrolley />
          </el-icon>
        </div>

        <img src="/images/app/image-avatar.png" alt="avatar" class="avatar" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ShoppingTrolley } from "@element-plus/icons-vue";
import "element-plus/theme-chalk/display.css";
import { useAppStore } from "~/store/app";
import { useProductStore } from "~/store/product";

///////////////////////////// app store
const { isNavDrawerOpen } = storeToRefs(useAppStore());

//////////////////////////// product store
const { isAddToCartModalVisible, itemQuantity } = storeToRefs(
  useProductStore()
);

/////////////////////////// statics
const NavRoutes = [
  { id: 1, name: "Collections" },
  { id: 2, name: "Men" },
  { id: 3, name: "Women" },
  { id: 4, name: "About" },
  { id: 5, name: "Contact" },
];
</script>

<style lang="scss">
@import "./assets/styles/components/navbar.scss";
</style>

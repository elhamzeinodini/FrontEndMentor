<template>
  <aside>
    <div class="close-icon" @click="isNavDrawerOpen = false">
      <img src="/images/icons/icon-close.svg" alt="close" />
    </div>

    <ul class="links">
      <li v-for="link in drawerLinks" :key="link.id">
        <nuxt-link :to="link.routeName">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";

///////////////////////////// app store
const { isNavDrawerOpen } = storeToRefs(useAppStore());

///////////////////////////// statics
const drawerLinks = [
  { id: 1, name: "Collections", routeName: "" },
  { id: 2, name: "Men", routeName: "" },
  { id: 3, name: "Women", routeName: "" },
  { id: 4, name: "About", routeName: "" },
  { id: 5, name: "Contact", routeName: "" },
];
</script>

<style lang="scss">
@import "/assets/styles/components/navigation-drawer.scss";
</style>

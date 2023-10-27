<template>
  <v-layout class="nav d-xs-flex d-sm-flex d-md-none">
    <v-app-bar class="elevation-0">
      <img
        src="/images/icon-menu.svg"
        alt="bars icon"
        class="nav__icon"
        v-show="!drawer"
        @click="handleDrawer()"
      />
      <img
        src="/images/icon-close.svg"
        alt="close icon"
        v-show="drawer"
        @click="handleDrawer()"
        class="nav__icon"
      />
      <img src="/images/logo.svg" alt="sneakers logo" class="nav__logo" />

      <v-spacer></v-spacer>

      <div class="nav__cart">
        <span class="nav__cart__count" v-show="inCart">{{ count }}</span>
        <img
          src="/images/icon-cart.svg"
          alt="cart"
          class="nav__cart__item"
          @click="store.toggleCmp"
        />
      </div>
      <img src="/images/image-avatar.png" alt="avatar" class="nav__profile" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/stores/useCart";

interface Items {
  title: string;
  value: string;
}

const drawer = ref<boolean>(false);
const group = ref<string | null>(null);
const items = ref<Items[]>([
  {
    title: "Collection",
    value: "collection",
  },
  {
    title: "Men",
    value: "men",
  },
  {
    title: "Women",
    value: "women",
  },
  {
    title: "Abput",
    value: "about",
  },
]);

watch(group, () => {
  return (drawer.value = false);
});

const handleDrawer = (): boolean => {
  return (drawer.value = !drawer.value);
};

const store = useCartStore();
const { inCart, count } = storeToRefs(store);

</script>

<style lang="scss">
@import "/assets/scss/styles/navigation/app-navigation-mobile.scss";
</style>

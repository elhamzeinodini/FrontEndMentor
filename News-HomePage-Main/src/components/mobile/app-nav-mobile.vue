<template>
  <nav class="nav invisible sm:visible md:visible">
    <img src="/images/logo.svg" alt="logo" class="nav__logo" />
    <img
      src="/images/icon-menu.svg"
      alt="bars"
      class="nav__bars"
      @click="toggleSideNav"
      v-show="!toggleNav"
    />
    <div class="nav__menu" v-show="toggleNav">
      <img
        src="/images/icon-menu-close.svg"
        alt="close"
        class="nav__close"
        @click="toggleSideNav"
        v-show="toggleNav"
      />
      <ul class="nav__list" role="list">
        <li class="nav__item hover:text-soft-red" v-for="link in links" :key="link.id">
          {{ link.route }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const toggleNav = ref<boolean>(false);

interface Links {
  route: string;
  id: number;
}

const links = ref<Links[]>([
  { route: "Home", id: 1 },
  { route: "New", id: 2 },
  { route: "Popular", id: 3 },
  { route: "Trending", id: 4 },
  { route: "Categories", id: 5 },
]);

const toggleSideNav = () => {
  toggleNav.value = !toggleNav.value;
};
</script>

<style lang="scss">
@import "/src/assets/scss/styles/mobile/app-nav-mobile.scss";
</style>

<template>
  <nav class="nav">
    <div class="nav__logo">
      <img src="/images/logo.svg" alt="logo" class="nav__logo__item" />
    </div>
    <ul class="nav__list" role="list">
      <li
        class="nav__item hover:text-soft-red"
        v-for="link in links"
        :key="link.id"
      >
        {{ link.title }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Links {
  title: string;
  id: number;
}

const links = ref<Links[]>([
  { title: "Home", id: 1 },
  { title: "New", id: 2 },
  { title: "Popular", id: 3 },
  { title: "Trending", id: 4 },
  { title: "Categories", id: 5 },
]);
</script>

<style lang="scss">
@import '/src/assets/scss/styles/desktop/app-nav-desktop.scss';
</style>
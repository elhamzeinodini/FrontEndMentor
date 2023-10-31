<template>
  <header class="header hidden-sm-and-up">
    <ul class="header__pagination">
      <li
        v-for="pagination in paginationData"
        :key="pagination.id"
        class="header__pagination__item"
      >
        <NuxtLink :to="pagination.route">{{ pagination.id }}</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
//////////////////////////////// component data
const paginationData = [
  { id: 1, route: "" },
  { id: 2, route: "" },
  { id: 3, route: "" },
  { id: 4, route: "" },
];
</script>

<style lang="scss" scoped>
@import "/assets/sass/components/Header/header-mobile.scss";
</style>

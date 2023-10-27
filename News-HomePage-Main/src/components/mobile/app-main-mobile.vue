<template>
  <div class="hidden md:block sm:block">
    <app-nav-mobile></app-nav-mobile>
    <app-landing-mobile></app-landing-mobile>
    <app-news></app-news>
  </div>
</template>

<script setup>
import appNavMobile from "./app-nav-mobile.vue";
import appLandingMobile from "./app-landing-mobile.vue";
import appNews from "/src/components/app-news.vue";
</script>

<template>
  <app-main-mobile></app-main-mobile>
  <app-main-desktop></app-main-desktop>
  <app-posts></app-posts>
</template>

<script setup>
import appMainMobile from '/src/components/mobile/app-main-mobile.vue';
import appMainDesktop from '/src/components/desktop/app-main-desktop.vue'
import appPosts from "/src/components/app-posts.vue";
import appNews from "/src/components/app-news.vue";
</script>

<style lang="scss">
@import "/src/assets/scss/base/base.scss";
</style>

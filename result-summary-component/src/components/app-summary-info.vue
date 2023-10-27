<template>
  <section class="info" v-for="item in items" :key="item.score" :style="{backgroundColor: item.color}">
    <div class="info__left">
      <img :src="item.icon" alt="icon" class="info__left__icon" />
      <span class="info__left__title" :style="{color: item.textColor}">{{ item.title }}</span>
    </div>
    <div class="info__right">
      <span class="info__right__score">{{ item.score }}</span>
      <span class="info__right__num">/ 100</span>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const items = reactive([
  {
    icon: "/images/icon-reaction.svg",
    title: "Reaction",
    score: 80,
    color: "hsl(0, 50%, 95%)",
    textColor: "hsl(0, 100%, 67%)",
  },
  {
    icon: "/images/icon-memory.svg",
    title: "Memory",
    score: 92,
    color: "rgb(255, 246, 248)",
    textColor: "hsl(39, 100%, 56%)",
  },
  {
    icon: "/images/icon-verbal.svg",
    title: "Verbal",
    score: 61,
    color: "hsl(166, 100%, 95%)",
    textColor: "hsl(166, 100%, 37%)",
  },
  {
    icon: "/images/icon-visual.svg",
    title: "Visual",
    score: 72,
    color: "hsl(221, 100%, 96%)",
    textColor: "hsl(234, 85%, 45%)",
  },
]);
</script>


<style lang="scss">
@import '/src/assets/scss/styles/app-summary-info-desktop.scss';
</style>
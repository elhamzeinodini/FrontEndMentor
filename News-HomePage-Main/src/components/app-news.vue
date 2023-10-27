<template>
  <section class="news">
    <h2 class="news__title">New</h2>
    <div class="news__info divide-y">
      <div class="news__content" v-for="news in newsInfo" :key="news.id">
        <h4 class="news__content__title hover:text-soft-orange">
          {{ news.title }}
        </h4>
        <p class="news__content__subtitle">{{ news.subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface NewsInfo {
  title: string;
  subtitle: string;
  id: number;
}

const newsInfo = ref<NewsInfo[]>([
  {
    title: "Hydrogen VS Electric",
    subtitle: "Cars Will hydrogen-fueled cars ever catch up to EVs?",
    id: 1,
  },
  {
    title: "The Downsides of AI Artistry",
    subtitle:
      "What are the possible adverse effects of on-demand AI image generation?",
    id: 2,
  },
  {
    title: "Is VC Funding Drying Up?",
    subtitle:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    id: 3,
  },
]);
</script>

<style lang="scss">
@import "/src/assets/scss/styles/mobile/app-news-mobile.scss";
@import "/src/assets/scss/styles/tablet/app-news-tablet.scss";
@import "/src/assets/scss/styles/desktop/app-news-desktop.scss";
</style>

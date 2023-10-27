<template>
  <section class="post">
    <div class="post__content" v-for="post in postInfo" :key="post.id">
      <div class="post__img">
        <img :src="post.img" :alt="post.title" class="post__img__item" />
      </div>
      <div class="post__info">
        <span class="post__count">{{ post.id }}</span>
        <h3 class="post__title hover:text-soft-red">{{ post.title }}</h3>
        <p class="post__subtitle">{{ post.subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface PostInfo {
  title: string;
  subtitle: string;
  img: string;
  id: string;
}

const postInfo = ref<PostInfo[]>([
  {
    title: "Reviving Retro PCs",
    subtitle: "What happens when old PCs are given modern upgrades?",
    img: "/images/image-retro-pcs.jpg",
    id: "01",
  },
  {
    title: "Top 10 Laptops of 2022",
    subtitle: "Our best picks for various needs and budgets.",
    img: "/images/image-top-laptops.jpg",
    id: "02",
  },
  {
    title: "The Growth of Gaming",
    subtitle: "How the pandemic has sparked fresh opportunities.",
    img: "/images/image-gaming-growth.jpg",
    id: "03",
  },
]);
</script>

<style lang="scss">
@import "/src/assets/scss/styles/mobile/app-posts-mobile.scss";
@import "/src/assets/scss/styles/tablet/app-posts-tablet.scss";
@import "/src/assets/scss/styles/desktop/app-posts-desktop.scss";
</style>

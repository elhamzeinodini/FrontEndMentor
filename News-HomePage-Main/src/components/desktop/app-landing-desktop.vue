<template>
  <section class="landing">
    <div class="landing__info">
      <img
        src="/images/image-web-3-desktop.jpg"
        alt="landing desktop"
        class="landing__img"
      />
      <div class="landing__content">
        <div class="landing__content__left">
          <h2 class="landing__content__left__title">The Bright Future of Web 3.0?</h2>
        </div>
        <div class="landing__content__right">
          <p class="landing__content__right__subtitle">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button class="landing__btn">READ MORE</button>
        </div>
      </div>
    </div>
    <div class="landing__news">
      <app-news></app-news>
    </div>
  </section>
</template>

<script setup>
import appNews from "/src/components/app-news.vue";
</script>

<style lang="scss">
@import "/src/assets/scss/styles/desktop/app-landing-desktop.scss";
</style>

<template>
  <section class="container">
    <div class="container__img">
      <img
        src="/images/illustration-sign-up-desktop.svg"
        alt="desktop illustration"
        class="container__img__item container__img__item--desktop"
      />
      <img
        src="/images/illustration-sign-up-mobile.svg"
        alt="desktop illustration"
        class="container__img__item container__img__item--mobile"
      />
    </div>
    <div class="container__content">
      <h1 class="container__title">Stay updated!</h1>
      <p class="container__subtitle">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul class="container__list">
        <div class="container__list__content"  v-for="(info,index) in infos" :key="index">
          <img src="/images/icon-list.svg" alt="list icon" class="container__icon" /> 
          <li class="container__item">{{ info }}</li>
        </div>
      </ul>
      <app-form></app-form>
    </div>
  </section>
</template>

<script setup lang="ts">
const infos = ref<string[]>([
  "Product discovery and building what matters",
  " Measuring to ensure updates are a success",
  "And much more!",
]);
</script>

<style lang="scss">
@import '/assets/scss/styles/app-news-letter-desktop.scss';
@import '/assets/scss/styles/app-news-letter-mobile.scss';
</style>
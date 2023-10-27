<template>
    <section class="summary">
        <h2 class="summary__title">Summary</h2>
        <app-summary-info></app-summary-info>
        <button class="summary__btn">continue</button>
    </section>
</template>

<script setup>
import appSummaryInfo from './app-summary-info.vue';
</script>

<style lang="scss">
@import '/src/assets/scss/styles/app-summary-desktop.scss';
@import '/src/assets/scss/styles/app-summary-mobile.scss';
</style>
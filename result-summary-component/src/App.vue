<template>
    <section class="container">
        <app-result></app-result>
        <app-summary></app-summary>
    </section>
</template>

<script setup>
import appResult from '/src/components/app-result.vue';
import appSummary from './components/app-summary.vue';
</script>

<style lang="scss">
@import './assets/scss/base/base';
</style>
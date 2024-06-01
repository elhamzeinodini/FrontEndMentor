<template>
  <section class="home-page">
    <h1 class="title">Our Pricing</h1>

    <ToggleButton />

    <div class="plans-wrapper">
      <AppPlans
        v-for="details in planDetails"
        :key="details.type"
        :plan-details="details"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { annual, monthly } from "~/assets/static-data/plans";
import { useAppStore } from "~/store/app";
const { annualPlans, monthlyPlans, isAnnual } = storeToRefs(useAppStore());

const planDetails = computed(() => {
  if (isAnnual.value) {
    return annualPlans.value;
  } else return monthlyPlans.value;
});

watch(
  () => isAnnual.value,
  (newVal) => {
    if (newVal) {
      annualPlans.value = annual;
    } else monthlyPlans.value = monthly;
  },
  { immediate: true }
);
</script>

<style lang="scss">
@import "/assets/sass/pages/home-page.scss";
</style>

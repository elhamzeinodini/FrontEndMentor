<template>
  <section class="home-page">
    <h1>Our Pricing</h1>

    <ToggleButton />

    <div class="plans">
      <ProductPlans v-for="info in plansInfo" :key="info.id" :plan="info" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IPlansInfo } from "~/typescript/app";

//////////////////////////// statics
const plansInfo: IPlansInfo[] = [
  {
    id: 1,
    type: "Basic",
    price: "199.99",
    options: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    id: 1,
    type: "Basic",
    price: "199.99",
    options: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    id: 3,
    type: "Master",
    price: "399.99",
    options: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];
</script>

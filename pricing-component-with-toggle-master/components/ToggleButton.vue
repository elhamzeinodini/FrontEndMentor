<template>
  <div class="toggle-button">
    <span>Annually</span>

    <div
      :class="['toggle-item', 'monthly-plan' && !isAnnualPlan]"
      @click="isAnnualPlan = !isAnnualPlan"
    >
      <div class="toggle-circle"></div>
    </div>

    <span>Monthly</span>
  </div>
</template>

<script setup lang="ts">
////////////////////////// app store
import { useAppStore } from "~/store/app";
const { isAnnualPlan } = storeToRefs(useAppStore());
</script>

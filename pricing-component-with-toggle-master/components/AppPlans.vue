<template>
  <div class="app-plans">
    <b>{{ planDetails.type }}</b>

    <span>{{ planDetails.price }}</span>

    <ul>
      <li v-for="option in planDetails.options" :key="option">{{ option }}</li>
    </ul>

    <button>Learn More</button>
  </div>
</template>

<script setup lang="ts">
import type { IPlan } from "~/typescript/interfaces";

const props = defineProps({
  planDetails: {
    type: Object as PropType<IPlan>,
    required: true,
  },
});
</script>

<style lang="scss">
@import "/assets/sass/components/plans.scss";
</style>

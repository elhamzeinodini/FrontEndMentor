<template>
  <div class="product-plans">
    <b class="type">{{ plan.type }}</b>

    <span class="price">{{ plan.price }}</span>

    <ul class="options">
      <li v-for="option in plan.options" :key="option">
        <span>{{ option }}</span>
      </li>
    </ul>

    <button>Learn More</button>
  </div>
</template>

<script setup lang="ts">
import type { IPlan } from "~/typescript/interfaces";

defineProps({
  plan: {
    type: Object as PropType<IPlan>,
    required: true,
  },
});
</script>

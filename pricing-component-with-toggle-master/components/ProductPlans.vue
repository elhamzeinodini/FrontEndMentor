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
import type { IPlansInfo } from '~/typescript/app';

defineProps({
  plan: {
    type: Object as PropType<IPlansInfo>,
    required: true,
  },
});
</script>

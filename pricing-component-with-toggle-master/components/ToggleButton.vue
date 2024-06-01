<template>
  <div class="toggle-button">
    <span>Annually</span>

    <div class="toggle" @click="switchPricingType">
      <div class="circle"></div>
    </div>

    <span>Monthly</span>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";
const { isAnnual } = storeToRefs(useAppStore());
const { $gsap } = useNuxtApp();

const switchPricingType = () => {
  const timeline = $gsap.timeline({
    onStart() {
      isAnnual.value = !isAnnual.value;
    },
  });

  if (isAnnual.value) {
    timeline.fromTo(
      ".toggle .circle",
      { x: 0 },
      { x: 30, ease: "power4.inOut", duration: 0.5 }
    );
  } else {
    timeline.fromTo(
      ".toggle .circle",
      { x: 30 },
      { x: 0, ease: "back(1.4)", duration: 0.5 }
    );
  }
};
</script>

<style lang="scss">
@import "/assets/sass/components/toggle-button.scss";
</style>

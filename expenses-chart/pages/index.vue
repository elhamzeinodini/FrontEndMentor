<template>
  <section class="expenses-chart">
    <div class="top-header">
      <TheHeader bg-clr="hsl(10, 79%, 65%)">
        <template v-slot:left>
          <span class="top-title">My balance</span>
          <b class="top-price">$ 921.48</b>
        </template>

        <template v-slot:right>
          <img src="/images/logo.svg" alt="logo" />
        </template>
      </TheHeader>
    </div>

    <div class="chart-wrapper">
      <TheChart />

      <div class="footer">
        <TheHeader bg-clr="hsl(33, 100%, 98%)">
          <template v-slot:left>
            <span class="bottom-title">Total this month</span>
            <b class="bottom-price">$ 478.33</b>
          </template>

          <template v-slot:right>
            <b>+2.4%</b>
            <span>From last month</span>
          </template>
        </TheHeader>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// //////////////////////// page title
useHead({
  title: "Expenses Chart",
});

// /////////////////////// animation
const { $gsap } = useNuxtApp();

const animateCard = () => {
  const tl = $gsap.timeline();

  tl.fromTo(
    ".expenses-chart",
    { y: 300, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, ease: "elastic.out" }
  );
};

// /////////////////////// mounted
onMounted(() => {
  animateCard();
});
</script>

<style lang="scss">
@import "/assets/pages/home.scss";
</style>

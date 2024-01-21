<template>
  <section class="chart">
    <h4>Spending - Last 7 days</h4>

    <div class="chart-item">
      <ul>
        <li
          v-for="col in columns"
          :key="col"
          :style="{ height: `${col}px` }"
          :class="['column', { highest: col === highestScore }]"
        ></li>
      </ul>

      <ul>
        <li v-for="day in days" :key="day">{{ day }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";

// /////////////////////////// interfaces
interface IChart {
  amount: number;
  day: string;
}

// /////////////////////////// states
const chartInfo = ref<IChart[]>([]);

// /////////////////////////// method
async function getChartData() {
  const { data } = await axios.get<IChart[]>("/data.json");
  chartInfo.value = data;
  return chartInfo.value;
}

//////////////////////////// computed properties
const days = computed(() => {
  return chartInfo.value.map((item: IChart) => item.day);
});

const columns = computed(() => {
  return chartInfo.value.map((item: IChart) => item.amount);
});

const highestScore = computed(() => {
  return Math.max(...columns.value);
});

// /////////////////////////// mounted
onMounted(() => {
  getChartData();
});
</script>

<style lang="scss">
@import "/assets/components/chart.scss";
</style>

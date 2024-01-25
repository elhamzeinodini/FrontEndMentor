<template>
  <section class="chart">
    <h4>Spending - Last 7 days</h4>

    <div class="chart-item">
      <div v-for="col in formattedColumns" :key="col.day" class="wrapper">
        <div
          :class="['column', col.amount === highestScore && 'high-score']"
          :style="{ height: `${col.amount}px` }"
          @click="showColumnTooltip(col.amount)"
        >
          <span v-show="col.tooltipVisible" class="tooltip"
            >${{ col.amount }}</span
          >
        </div>

        <span>{{ col.day }}</span>
      </div>
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
const formattedColumns = computed(() => {
  const chartColumn = ref<
    {
      amount: number;
      tooltipVisible: boolean;
      day: string;
    }[]
  >([]);

  chartInfo.value.map((item) => {
    return chartColumn.value.push({
      amount: item.amount,
      tooltipVisible: false,
      day: item.day,
    });
  });
  return chartColumn.value;
});

const columns = computed(() => {
  return chartInfo.value.map((item) => item.amount);
});

const highestScore = computed(() => {
  return Math.max(...columns.value);
});

const showColumnTooltip = (colWidth: number) => {
  const selectedCol = formattedColumns.value.find(
    (item) => item.amount === colWidth
  );
  if (selectedCol) selectedCol.tooltipVisible = !selectedCol.tooltipVisible;
};

// /////////////////////////// mounted
onMounted(() => {
  getChartData();
});
</script>

<style lang="scss">
@import "/assets/components/chart.scss";
</style>

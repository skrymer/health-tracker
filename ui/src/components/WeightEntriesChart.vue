<template>
  <Line
    :data="{
      labels: entries?.map((entry) => entry.timestamp.substring(0, entry.timestamp.indexOf('T'))),
      datasets: [
        {
          label: 'Weight',
          backgroundColor: '#427913',
          data: entries ? entries?.map((entry) => entry.weight as number) : [],
        },
        {
          label: 'Fat percentage',
          backgroundColor: '#fc034e',
          data: entries ? entries?.map((entry) => entry.fatPercentage as number) : [],
        },
      ],
    }"
    :options="{
      responsive: true,
      maintainAspectRatio: false,
    }"
  />
</template>

<script lang="ts" setup>
import { WeightEntry } from "@/types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

defineProps<{entries: WeightEntry[]}>()

</script>

<style lang="scss" scoped></style>

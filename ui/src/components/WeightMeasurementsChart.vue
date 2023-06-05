<template>
  <Line
    :data="chartData"
    :options="{
      responsive: true,
      maintainAspectRatio: false,
    }"
  />
</template>

<script lang="ts" setup>
import { WeightMeasurement } from "@/types";
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
import { watch } from "vue";
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

const props = defineProps<{measurements: WeightMeasurement[]}>()

watch(props.measurements, () => {
  console.log(`Chart: measurements changed`);
  
})

const chartData = {
      labels: props.measurements?.map((entry) => entry.timestamp.substring(0, entry.timestamp.indexOf('T'))),
      datasets: [
        {
          label: 'Weight',
          backgroundColor: '#427913',
          data: props.measurements ? props.measurements?.map((entry) => entry.weight as number) : [],
        },
        // {
        //   label: 'Fat percentage',
        //   backgroundColor: '#fc034e',
        //   data: entries ? entries?.map((entry) => entry.fatPercentage as number) : [],
        // },
      ],
    }

</script>

<style lang="scss" scoped></style>

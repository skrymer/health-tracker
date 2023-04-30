<template>
  <v-card class="ma-2 pa-2" elevation="6">
    <v-card-item>
      <v-card-title>
        <span>Median Weight Lost</span>
        <v-card-subtitle>Over the past seven days</v-card-subtitle>
      </v-card-title>
    </v-card-item>

    <v-card-text>
      <span class="text-h4">{{ medianWeightLost() }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { WeightMeasurement } from "@/types";

const props = defineProps<{
  measurements?: WeightMeasurement[];
}>();

const medianWeightLost = () => {
  if (props.measurements === undefined) return 0;

  const lastSevenMeasurement = props.measurements.slice(
    props.measurements.length - 7,
    props.measurements.length
  );
  const median = lastSevenMeasurement
    .map((entry) => entry.weight)
    .sort((a, b) => a - b)
    .splice(4, 4)[0];

  return median.toFixed(2);
};
</script>

<style lang="scss" scoped></style>

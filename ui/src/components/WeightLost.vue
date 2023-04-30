<template>
  <v-card class="ma-2 pa-2" elevation="6">
    <v-card-item>
      <v-card-title>Weight Lost</v-card-title>
      <v-card-subtitle>Since beginning</v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <span class="text-h4">{{ lost() }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { WeightMeasurement } from "@/types";

const props = defineProps<{
  measurements?: WeightMeasurement[];
}>();

const lost = () => {
  if (props.measurements === undefined) return 0;

  const first = props.measurements[0].weight;
  const last = props.measurements[props.measurements.length - 1].weight;
  return (first - last).toFixed(2);
};
</script>

<style scoped></style>

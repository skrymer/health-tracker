<template>
  <v-card class="ma-2 pa-2" elevation="6">
    <v-card-item>
      <v-card-title>
        <span>BMI</span>
      </v-card-title>
    </v-card-item>

    <v-card-text>
      <span class="text-h4">{{ bmi() }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { WeightMeasurement } from "@/types";

const props = defineProps<{
  measurements?: WeightMeasurement[];
}>();

const bmi = () => {
  if (props.measurements === undefined) return 0;

  const latest = props.measurements[props.measurements.length - 1].weight;
  return (latest / Math.pow(1.95, 2)).toFixed(2); // TODO calculate based on user values
};
</script>

<style scoped></style>

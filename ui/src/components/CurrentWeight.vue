<template>
  <v-card class="ma-2 pa-2" elevation="6">
    <v-card-item>
      <v-card-title>
        <span>Current Weight</span>
      </v-card-title>
      v-s
    </v-card-item>

    <v-card-text>
      <span class="text-h4">{{ currentWeight() }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { WeightMeasurement } from "@/types";

const props = defineProps<{
  measurements?: WeightMeasurement[];
}>();

const currentWeight = () => {
  if (props.measurements === undefined) return 0;

  const latest = props.measurements[props.measurements.length - 1].weight;
  return latest.toFixed(2);
};
</script>

<style scoped></style>

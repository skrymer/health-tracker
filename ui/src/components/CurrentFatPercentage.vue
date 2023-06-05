<template>
  <v-card class="ma-2 pa-2" elevation="6">
    <v-card-item>
      <v-card-title>
        <span>Current Fat %</span>
      </v-card-title>
      <v-card-subtitle></v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <span class="text-h4">{{ currentFatPercentage() }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { WeightMeasurement } from "@/types";
import {last} from "@/utils/WeightUtils"

const props = defineProps<{
  measurements?: WeightMeasurement[];
}>();

const currentFatPercentage = () => {
  if (props.measurements === undefined || props.measurements.length === 0) return 0;

  const latestMeasurement = last(props?.measurements);
  return latestMeasurement?.fatPercentage.toFixed(2);
};
</script>

<style scoped></style>

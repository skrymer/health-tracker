<template>
  <v-card class="ma-2 pa-2" elevation="6">
    <v-card-item>
      <v-card-title>
        <span>Current Weight</span>
      </v-card-title>
      <v-card-subtitle>{{latest?.timestamp}}</v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <span class="text-h4">{{ currentWeight() }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { WeightMeasurement } from "@/types";
import {last} from "@/utils/WeightUtils"

const props = defineProps<{
  measurements?: WeightMeasurement[];
}>();

const latest = last(props.measurements)

const currentWeight = () => {
  if (props.measurements === undefined  || props.measurements.length === 0) return 0;

  const latest = props.measurements[props.measurements.length - 1].weight;
  return latest.toFixed(2);
};
</script>

<style scoped></style>

<template>
  <v-card class="ma-2 pa-2" elevation="6">
    <v-card-item>
      <v-card-title>
        <span>Median Weight</span>
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
import { medianWeight, lastSevenMeasurements } from "@/utils/WeightUtils";

const props = defineProps<{
  measurements?: WeightMeasurement[];
}>();

const medianWeightLost = () => {
  if (props.measurements === undefined) {
    return 0;
  }
  
  return medianWeight(lastSevenMeasurements(props.measurements)).toFixed(2);
};
</script>

<style lang="scss" scoped></style>

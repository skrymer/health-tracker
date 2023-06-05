<template>
  <v-card class="ma-2 pa-2" elevation="6">
    <v-card-item>
      <v-card-title>Trending<v-icon size="large" :color="trendingUp() ? 'red-darken-2' : 'green-darken-2'" :icon="trendingUp() ? 'mdi-trending-up' : 'mdi-trending-down'"/>     </v-card-title>
    </v-card-item>

    <v-card-text>
      {{`Your weight is trending ${trendingUp() ? 'up, eat less and/or increase energy expenditure.' : 'down, great job!'}` }}  
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { WeightMeasurement } from "@/types";
import { lastSevenMeasurements, medianWeight } from "@/utils/WeightUtils";

const props = defineProps<{
  measurements?: WeightMeasurement[];
}>();

const trendingUp = () => {
  if (props.measurements === undefined) return 0;

  const thisWeeksMeasurements = lastSevenMeasurements(props.measurements)
  const lastWeeksMeasurements = lastSevenMeasurements(props.measurements.slice(0, props.measurements.length - 7))
  
  const thisWeeksMedian = medianWeight(thisWeeksMeasurements);
  const lastWeeksMedian = medianWeight(lastWeeksMeasurements)
  
  return thisWeeksMedian > lastWeeksMedian;
};
</script>

<style scoped></style>

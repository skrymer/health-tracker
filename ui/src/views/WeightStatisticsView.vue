<template>
    <v-container >
      <v-row justify="center">
        <v-col xs="12">
          <h2>Weight statistics</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="12">
          <v-sheet class="ma-2 pa-2" elevation="6" height="500">            
            <WeightMeasurementsChart v-if="result" :measurements="result.weightMeasurements" />
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" lg="2">
          <WeightTrend :measurements="result?.weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <WeightLost :measurements="result?.weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <Bmi :measurements="result?.weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <CurrentWeight :measurements="result?.weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <MedianWeightLost :measurements="result?.weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <CurrentFatPercentage :measurements="result?.weightMeasurements" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import Bmi from "@/components/Bmi.vue";
import CurrentWeight from "@/components/CurrentWeight.vue";
import MedianWeightLost from "@/components/MedianWeightLost.vue";
import WeightMeasurementsChart from "@/components/WeightMeasurementsChart.vue";
import WeightLost from "@/components/WeightLost.vue";
import { WeightMeasurement } from "@/types/index";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import CurrentFatPercentage from "@/components/CurrentFatPercentage.vue";
import WeightTrend from "@/components/WeightTrend.vue";

const { result, refetch } = useQuery<{ weightMeasurements: WeightMeasurement[] }>(gql`
  {
    weightMeasurements(userNameFilter: "skrymer") {
      weight
      fatPercentage
      timestamp
      userName
      unit
    }
  }
`);

const saved = () => {
  refetch();
};
</script>

<style lang="scss" scoped></style>

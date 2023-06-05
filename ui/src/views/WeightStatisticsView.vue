<template>
    <v-container >
      <v-row justify="center">
        <v-col xs="12">
          <h2>Weight Statistics</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="12">
          <v-sheet class="ma-2 pa-2" elevation="6" height="500">            
            <WeightMeasurementsChart :measurements="weightMeasurements" />
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" lg="2">
          <WeightTrend :measurements="weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <WeightLost :measurements="weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <Bmi :measurements="weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <CurrentWeight :measurements="weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <MedianWeight :measurements="weightMeasurements" />
        </v-col>
        <v-col sm="12" lg="2">
          <CurrentFatPercentage :measurements="weightMeasurements" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import Bmi from "@/components/Bmi.vue";
import CurrentWeight from "@/components/CurrentWeight.vue";
import MedianWeight from "@/components/MedianWeight.vue";
import WeightMeasurementsChart from "@/components/WeightMeasurementsChart.vue";
import WeightLost from "@/components/WeightLost.vue";
import CurrentFatPercentage from "@/components/CurrentFatPercentage.vue";
import WeightTrend from "@/components/WeightTrend.vue";
import { useAppStore } from "@/store/app";
import { watch } from "vue";
import { storeToRefs } from "pinia";

const store = useAppStore()
const {weightMeasurements} = storeToRefs(store)

watch(weightMeasurements, () => {
  console.log(`measurements changed`);  
})

</script>

<style lang="scss" scoped></style>

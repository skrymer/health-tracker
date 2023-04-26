<template>
  <v-sheet class="ma-5 pa-4">
    <v-container class="ma-2 pa-2">
      <v-row>
        <v-col sm="10">
          <v-sheet class="ma-2 pa-2" elevation="6" height="400">
            <h2>Weight</h2>
            <WeightEntriesChart v-if="result" :entries="result.weightEntries" />
          </v-sheet>
        </v-col>
        <v-col sm="2">
          <SingleStat title="Lost" :value="lost()" title-color="text-red-darken-1"/>
          <SingleStat title="BMI" :value="bmi()" title-color="text-light-blue-darken-1"/>
          <SingleStat title="Current Weight" :value="currentWeight()" title-color="text-green-darken-1"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="3">
          <v-sheet class="ma-2 pa-2" elevation="6">
            <h2>Add entry</h2>
            <AddWeightEntry />
          </v-sheet>
        </v-col>
        <v-col sm="6">
          <v-sheet class="ma-2 pa-2" elevation="6">
            <h2>Entries</h2>
            <WeightEntryTable v-if="result" :items="result.weightEntries" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
import gql from "graphql-tag";
import WeightEntriesChart from "@/components/WeightEntriesChart.vue";
import WeightEntryTable from "@/components/WeightEntryTable.vue";
import AddWeightEntry from "@/components/AddWeightEntry.vue";
import SingleStat from "@/components/SingleStat.vue";
import { useQuery } from "@vue/apollo-composable";
import { watch } from "vue";
import {WeightEntry} from "@/types/index"

const { result } = useQuery<{ weightEntries: WeightEntry[] }>(gql`
  {
    weightEntries(userNameFilter: "sonni.nielsen@gmail.com") {
      weight
      fatPercentage
      timestamp
      userName
      unit
    }
  }
`);

watch(result, (currentValue, oldValue) => {
  console.log(currentValue);
  console.log(oldValue);
});

const lost = () => {
  if (result === undefined || result.value === undefined || result.value.weightEntries === undefined) return 0;

  const first = result.value.weightEntries[0].weight;
  const last =
    result.value.weightEntries[result.value.weightEntries.length - 1].weight;
  return (first - last).toFixed(2);
};

const bmi = () => {
  if (result === undefined || result.value === undefined || result.value.weightEntries === undefined) return 0;

  const latest =
    result.value.weightEntries[result.value.weightEntries.length - 1].weight;
  return (latest / Math.pow(1.95, 2)).toFixed(2);
};

const currentWeight = () => {
  if (result === undefined || result.value === undefined || result.value.weightEntries === undefined) return 0;

  const latest =
    result.value.weightEntries[result.value.weightEntries.length - 1].weight;
  return latest.toFixed(2);
};
</script>

<style lang="scss" scoped></style>

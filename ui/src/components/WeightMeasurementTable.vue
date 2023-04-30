<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="$props.measurements"
    item-value="name"
    scrollable
  />
</template>

<script lang="ts" setup>
import { WeightMeasurement } from "@/types";

defineProps<{ measurements: WeightMeasurement[] }>();

const itemsPerPage = 5;
const headers = [
  {
    title: "Weight",
    align: "start",
    key: "weight",
  },
  { title: "Timestamp", align: "end", key: "timestamp" },
];
</script>

<style lang="scss" scoped></style>

<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="items !==null ? items : []"
    item-value="name"
    scrollable
  />
</template>

<script lang="ts">

export default {
  name: "WeightEntryTable",
  props: {
    items: { type: Array<{ timestamp: String; weight: Number }> },
  },
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        {
          title: "Weight",
          align: "start",
          key: "weight",
        },
        { title: "Timestamp", align: "end", key: "timestamp" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>


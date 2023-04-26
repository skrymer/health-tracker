<template>
  <v-card class="ma-2 pa-2" elevation="6" variant="outlined">
    <v-card-item>
      <v-card-title
        ><span :class="$props.titleColor">{{ $props.title }}</span></v-card-title
      >
    </v-card-item>

    <v-card-text
      ><h1>{{ $props.value }}</h1></v-card-text
    >
  </v-card>
</template>

<script lang="ts" setup>
defineProps<{
  value: string | number;
  title: string;
  titleColor: string
}>();
</script>

<style lang="scss" scoped></style>

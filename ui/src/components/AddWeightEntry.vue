<template>
  <form @submit.prevent="submit" >
    <v-text-field
      v-model="weight.value.value"
      suffix="kgs"
      label="Weight"
      required
    ></v-text-field>

    <v-text-field
      v-model="fatPercentage.value.value"
      label="Fat percentage"
      required
      suffix="%"
    ></v-text-field>

    <v-text-field
      v-model="timestamp.value.value"
      label="Date"
      type="date"
      required
    ></v-text-field>
    <v-btn class="me-4" type="submit"> submit </v-btn>
  </form>
</template>

<script lang="ts" setup>
import { useField, useForm } from "vee-validate";

const { handleSubmit } = useForm();

const submit = handleSubmit((values) => {
  fetch("/api/weight", {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify({
      ...values,
      userName: "sonni.nielsen@gmail.com",
      unit: "KILO_GRAM",
    }),
  });
});

const weight = useField("weight");
const fatPercentage = useField("fatPercentage");
const timestamp = useField("timestamp");
</script>

<style lang="scss" scoped></style>

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

const emit = defineEmits(['saved'])

const { handleSubmit } = useForm();

const submit = handleSubmit((values) => {
  fetch("/api/weight/measurement", {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify({
      ...values,
      userName: "sonni.nielsen@gmail.com", // TODO get from user pref
      unit: "KILO_GRAM", // TODO get from user pref
      timestamp: values.timestamp + 'T00:00:00'
    }),
  }).then(() => emit('saved'));
});

const weight = useField("weight");
const fatPercentage = useField("fatPercentage");
const timestamp = useField("timestamp");
</script>

<style lang="scss" scoped></style>

<template>
  <form @submit.prevent="submit">
    <v-container class="w-75" elevation="6">
      <v-sheet class="ma-6 pa-6" elevation="6">
      <v-row justify="center">
        <v-col >
          <!-- TODO get suffix from user preferences -->
          <v-text-field
            v-model="weight.value.value"
            :error-messages="errors.weight"
            suffix="kgs"
            label="Weight"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col >
          <v-text-field
            v-model="fatPercentage.value.value"
            :error-messages="errors.fatPercentage"
            label="Fat percentage"
            required
            suffix="%"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col >
          <v-text-field
            v-model="timestamp.value.value"
            :error-messages="errors.timestamp"
            label="Date"
            type="date"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col sm="1">
          <v-btn class="me-4" type="submit"> submit </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
    </v-container>
  </form>
</template>

<script lang="ts" setup>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits(["saved"]);

const validationSchema = yup.object({
  weight: yup.number().required(),
  fatPercentage: yup.number().required(),
  timestamp: yup.date().required(),
});

const { handleSubmit, errors } = useForm({ validationSchema });

const submit = handleSubmit((values) => {
  fetch("/api/weight/measurement", {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify({
      ...values,
      userName: "sonni.nielsen@gmail.com", // TODO get from user pref
      unit: "KILO_GRAM", // TODO get from user pref
      timestamp: values.timestamp + "T00:00:00",
    }),
  }).then(() => emit("saved"));
});

const weight = useField("weight");
const fatPercentage = useField("fatPercentage");
const timestamp = useField("timestamp");
</script>

<style lang="scss" scoped></style>

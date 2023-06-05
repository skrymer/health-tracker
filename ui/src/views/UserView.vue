<template>
  <v-container class="w-75">
    <h2 class="text-center">User details</h2>
    <form @submit.prevent="submit">
      <v-sheet class="ma-6 pa-6">
        <v-expansion-panels variant="accordion" elevation="6">
          <v-expansion-panel title="Personal Details">
            <v-expansion-panel-text>
              <v-text-field
                v-model="userName.value.value"
                label="User Name"
                name="userName"
                disabled
              ></v-text-field>
              <v-text-field
                v-model="firstName.value.value"
                label="First Name"
                name="firstName"
                :error-messages="errors.firstName"
              ></v-text-field>
              <v-text-field
                v-model="lastName.value.value"
                label="Last Name"
                name="lastName"
                :error-messages="errors.lastName"
              ></v-text-field>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel title="Preferences">
            <v-expansion-panel-text>
              <v-select
                label="Weight Unit"
                name="weightUnit"
                :items="[
                  { key: 'KILO_GRAM', text: 'Kgs' },
                  { key: 'LBS', text: 'Lbs' },
                ]"
                item-title="text"
                item-value="key"
                v-model="preferredWeightUnit.value.value"
              ></v-select>
              <v-select
                label="Height Unit"
                name="heightUnit"
                :items="[
                  { key: 'CENTIMETERS', text: 'Centimeters' },
                  { key: 'INCHES', text: 'Inches' },
                ]"
                item-title="text"
                item-value="key"
                v-model="heightUnit.value.value"
              ></v-select>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel title="Contact Info">
            <v-expansion-panel-text>
              <v-text-field
                label="Email"
                name="email"
                placeholder="daffy.duck@fake.com"
                v-model="email.value.value"
                :error-messages="errors.email"
              ></v-text-field>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel title="Birthday">
            <v-expansion-panel-text>
              <v-text-field
                type="date"
                label="Date of birth"
                name="dob"
                v-model="dob.value.value"
              ></v-text-field>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-row justify="center">
          <v-col class="ma-6 pa-6" sm="1">
            <v-btn type="submit"> save </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </form>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const validationSchema = yup.object({
  userName: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  heightUnit: yup.string().required(),
  preferredWeightUnit: yup.string().required(),
  dob: yup.date().required(),
});

const { user } = useAppStore();

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: { ...user },
});

const submit = handleSubmit((values) => {
  console.log(values);

  // fetch("/api/weight/measurement", {
  //   method: "POST",
  //   headers: new Headers({ "content-type": "application/json" }),
  //   body: JSON.stringify({
  //     ...values,
  //     userName: "skrymer", // TODO get from user pref
  //     unit: "KILO_GRAM", // TODO get from user pref
  //     timestamp: values.timestamp + "T00:00:00",
  //   }),
  // });
});

const userName = useField("userName");
const firstName = useField("firstName");
const lastName = useField("lastName");
const heightUnit = useField("heightUnit");
const preferredWeightUnit = useField("preferredWeightUnit");
const email = useField("email");
const dob = useField("dob");
</script>

<style scoped></style>

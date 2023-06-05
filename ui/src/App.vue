<template>
  <router-view />
</template>

<script lang="ts" setup>
import { oktaAuth } from "@/plugins/okta";
import { useAppStore } from "@/store/app";
import { User, WeightMeasurement } from "@/types";
import { UserClaims } from "@okta/okta-auth-js";
import { useLazyQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref, watch } from "vue";

const { updateUser, updateWeightMeasurements } = useAppStore();

const oktaUser = ref<UserClaims>();

oktaAuth.getUser().then((res) => {
  oktaUser.value = res;
});

const { load: loadUser, result: usersResult } = useLazyQuery<{
  users: User[];
}>(
  gql`
    query user($userName: String!) {
      users(userNameFilter: $userName) {
        userName
        firstName
        lastName
        email
        height
        heightUnit
        preferredWeightUnit
      }
    }
  `
);

watch(oktaUser, () => {
  if (oktaUser.value?.preferred_username) {
    loadUser(undefined, {
      userName: oktaUser.value.preferred_username,
    });
  }
});

const { load: loadWeightMeasurements, result: weightMeasurementsResult } =
  useLazyQuery<{
    weightMeasurements: WeightMeasurement[];
  }>(gql`
    query weight($userName: String!) {
      weightMeasurements(userNameFilter: $userName) {
        weight
        fatPercentage
        timestamp
        userName
        unit
      }
    }
  `);

watch(usersResult, (newValue) => {
  if (newValue?.users && newValue.users[0].userName) {
    updateUser(newValue.users[0]);
    loadWeightMeasurements(undefined, {userName: newValue.users[0].userName});
  }
});

watch(weightMeasurementsResult, (newValue) => {
  if (newValue && newValue.weightMeasurements.length > 0) {
    updateWeightMeasurements(newValue.weightMeasurements);
  }
});
</script>

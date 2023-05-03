<template>
  <router-view />
</template>

<script lang="ts" setup>
import { User } from "@/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useAppStore } from "@/store/app";
import { watch } from "vue";

const { updateUser } = useAppStore();

const { result } = useQuery<{ users: User[] }>(gql`
  {
    users(userNameFilter: "skrymer") {
      userName
      email
      firstName
      lastName
    }
  }
`);

watch(result, (newValue) => {
  if (newValue?.users) {
    updateUser(newValue?.users[0]);
  }
});
</script>

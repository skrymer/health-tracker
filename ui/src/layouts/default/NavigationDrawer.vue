<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/3.jpg"
            title="Sonni Nielsen"
            subtitle="sonni.nielsen@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" v-for="link in links" nav>
          <router-link :to="link.to">
            <v-list-item
              :prepend-icon="link.icon"
              :title="link.title"
              :value="link.value"
              nav
            >
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 1000px"> <router-view /></v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      links: [
        {
          to: "/",
          title: "Home",
          icon: "mdi-home",
          value: "home",
        },
        {
          to: "/weight",
          title: "Weight",
          icon: "mdi-weight",
          value: "weight",
        },
        {
          to: "/goals",
          title: "Goals",
          icon: "mdi-flag-checkered",
          value: "goals",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

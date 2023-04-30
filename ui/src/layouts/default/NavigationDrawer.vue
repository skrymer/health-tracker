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
          <router-link
            exactActiveClass="background-color: 'green'"
            :to="link.to"
          >
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

      <v-main class="h-screen">
        <router-view />
      </v-main>
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
          to: "/weight/statistics",
          title: "Weight Statistics",
          icon: "mdi-chart-line",
          value: "statistics",
        },
        {
          to: "/weight/create",
          title: "Create Weight Entry",
          icon: "mdi-plus",
          value: "create",
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

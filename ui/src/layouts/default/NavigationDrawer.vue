<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover permanent>
        <v-list>
          <router-link to="/user">
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/3.jpg"
              title="Sonni Nielsen"
              subtitle="sonni.nielsen@gmailcom"
            ></v-list-item>
          </router-link>
        </v-list>
        <v-divider></v-divider>

        <v-list nav>
        <router-link to="/">
          <v-list-item prepend-icon="mdi-home" title="Home" nav></v-list-item>
        </router-link>
        </v-list>
        <v-list nav>
          <v-list-group value="Weight">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-weight"
                title="Weight"
              ></v-list-item>
            </template>

            <span density="compact" v-for="menu in weightMenus">
              <router-link :to="menu.to">
                <v-list-item
                  :prepend-icon="menu.icon"
                  :title="menu.title"
                  :value="menu.value"
                  nav
                >
                </v-list-item>
              </router-link>
            </span>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

      <v-main class="h-screen">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";

const weightMenus = [
  {
    to: "/weight/statistics",
    title: "Statistics",
    icon: "mdi-chart-line",
    value: "statistics",
  },
  {
    to: "/weight/create",
    title: "Add measurement",
    icon: "mdi-plus",
    value: "create",
  },
];
</script>

<style lang="scss" scoped></style>

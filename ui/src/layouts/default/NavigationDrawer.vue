<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail permanent>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/3.jpg"
            :title="`${user.firstName} ${user.lastName}`"
            :subtitle="user.email"
            to="/user"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list nav>
          <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            to="/"
            nav
          ></v-list-item>
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

            <v-list-item
              :to="menu.to"
              v-for="menu in weightMenus"
              :title="menu.title"
              :value="menu.value"
              nav
            />
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <v-responsive class="d-flex align-center">
            <router-view />
          </v-responsive>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { useAppStore } from "@/store/app";

const { user } = useAppStore();

const weightMenus = [
  {
    to: "/weight/statistics",
    title: "Statistics",
    value: "statistics",
  },
  {
    to: "/weight/create",
    title: "Add measurement",
    value: "create",
  },
];
</script>

<style lang="scss" scoped></style>

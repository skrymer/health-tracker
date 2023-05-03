<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail permanent>
        <v-list>
          <router-link to="/user">
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/3.jpg"
              :title=" `${user.firstName} ${user.lastName}`"
              :subtitle="user.email"
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

            <router-link :to="menu.to" v-for="menu in weightMenus">
              <v-list-item :title="menu.title" :value="menu.value" nav />
            </router-link>
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
import { useAppStore } from "@/store/app";

const {user} = useAppStore() 

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

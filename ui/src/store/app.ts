// Utilities
import { User } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const user = ref<User>({
    userName: "guest",
    email: "guest@mail.com",
    firstName: "Guest",
    lastName: "User",
    height: 1.95,
    heightUnit: "CENTIMETERS",
    preferredWeightUnit: "KILO_GRAM",
  });

  const updateUser = (newUser: User) => {
    user.value = newUser;
  };

  return { user, updateUser };
});

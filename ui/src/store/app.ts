// Utilities
import { User, WeightMeasurement } from "@/types";
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

  const weightMeasurements = ref<WeightMeasurement[]>([])

  const updateUser = (newUser: User) => {
    user.value = newUser;
  };

  const updateWeightMeasurements = (newMeasurements: WeightMeasurement[]) => {
    weightMeasurements.value = newMeasurements
  }

  return { user, updateUser, weightMeasurements, updateWeightMeasurements };
});

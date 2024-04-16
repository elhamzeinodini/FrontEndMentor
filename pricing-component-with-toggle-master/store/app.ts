import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  // states
  const isAnnualPlan = ref(true);
  return { isAnnualPlan };
});

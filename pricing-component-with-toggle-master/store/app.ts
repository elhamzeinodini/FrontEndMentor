import type { IPlan } from "~/typescript/interfaces";

export const useAppStore = defineStore("app", {
  state: () => ({
    isAnnual: true,
    annualPlans: [] as IPlan[],
    monthlyPlans: [] as IPlan[],
  }),
});

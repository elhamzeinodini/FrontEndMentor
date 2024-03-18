import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => ({
    isNavDrawerOpen: false,
  }),
  actions: {
    formatPrice(price: number) {
      return price.toLocaleString("en-us", {
        style: "currency",
        minimumFractionDigits: 2,
        currency: "USD",
      });
    },
  },
});

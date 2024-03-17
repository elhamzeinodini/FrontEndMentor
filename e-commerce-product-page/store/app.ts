import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => ({
    isNavDrawerOpen: false,
  }),
});

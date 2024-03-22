import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    itemQuantity: 0,
    isAddToCartModalVisible: false,
  }),
});

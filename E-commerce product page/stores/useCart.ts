import { defineStore } from "pinia";

interface Products {
  title: string;
  id: number;
  description: string;
  price: number;
}

interface State {
  count: number;
  inCart: boolean;
  productList: Products[];
  totalPrice: number;
  isVisible: boolean;
}

export const useCartStore = defineStore("cart", {
  state: (): State => ({
    count: 0,
    inCart: false,
    totalPrice: 0,
    isVisible: false,
    productList: [
      {
        id: 1,
        title: "Fall Limited Edition Sneakers",
        description:
          "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 125,
      },
    ],
  }),
  actions: {
    increment(): number {
      return this.count++;
    },
    decrement(): number {
      if (this.count <= 0) {
        return 0;
      }
      return this.count--;
    },
    addToCart(productID: number) {
      this.inCart = true;
      const clickedProduct = this.productList.find(
        (product: Products): boolean => {
          return product.id === productID;
        }
      );
      if (clickedProduct) {
        this.totalPrice = clickedProduct.price * this.count;
      }
    },
    removeFromCart(productID: number) {
      const clickedProduct = this.productList.find(
        (product: Products): boolean => {
          return product.id === productID;
        }
      );
      this.count--;
      if (clickedProduct) {
        this.totalPrice = clickedProduct.price * this.count;
      }
    },
    toggleCmp(): boolean {
      return (this.isVisible = !this.isVisible);
    },
  },
});

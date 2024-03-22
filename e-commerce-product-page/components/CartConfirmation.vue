<template>
  <section class="cart-confirmation">
    <div class="head">
      <h3>Cart</h3>

      <img
        src="/images/icons/icon-close.svg"
        alt="close icon"
        @click="isAddToCartModalVisible = false"
      />
    </div>

    <div class="checkout-list">
      <b v-if="!itemQuantity" :class="itemQuantity && 'empty-cart-alert'">Your cart is empty</b>

      <div class="shop-details" v-else>
        <div class="shop-item">
          <img
            src="/images/product/image-product-1-thumbnail.jpg"
            alt="shoe thumbnail"
          />

          <div class="content">
            <span>Full Limited Edition Sneakers</span>
            <span>$125</span>
            <span>x</span>
            <span>{{ itemQuantity }}</span>
            <b class="total">{{ formatPrice(itemQuantity * 125) }}</b>
          </div>

          <img
            src="/images/icons/icon-delete.svg"
            alt="delete icon"
            @click="itemQuantity = 0"
          />
        </div>

        <button>Checkout</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from "~/store/product";
import { useAppStore } from "~/store/app";

//////////////////////////////// app store
const { formatPrice } = useAppStore();

//////////////////////////////// product store
const { itemQuantity, isAddToCartModalVisible } = storeToRefs(
  useProductStore()
);
</script>

<style lang="scss">
@import "/assets/styles/components/cart-confirmation.scss";
</style>

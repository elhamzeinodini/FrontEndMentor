<template>
  <section class="home-page">
    <TheNavbar />

    <div v-if="isNavDrawerOpen" class="hidden-sm-and-up">
      <NavigationDrawer />
    </div>

    <div v-if="isAddToCartModalVisible">
      <CartConfirmation />
    </div>

    <div class="main">
      <div class="carousel">
        <el-carousel>
          <el-carousel-item v-for="item in carouselInfo" :key="item.id">
            <img
              :src="`/images/product/${item.imgName}.jpg`"
              alt="product img"
            />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="content">
        <b>{{ title }}</b>
        <h1>{{ subtitle }}</h1>
        <p>{{ paragraphText }}</p>

        <div class="pricing">
          <div class="left">
            <b>{{ formatPrice(discountedPrice) }}</b>
            <span>{{ discount }}%</span>
          </div>

          <div class="right">
            <span>{{ formatPrice(price) }}</span>
          </div>
        </div>

        <div class="actions">
          <button>
            <img
              src="/images/icons/icon-plus.svg"
              alt="plus"
              @click="increment"
            />

            <span>{{ itemQuantity }}</span>

            <img
              src="/images/icons/icon-minus.svg"
              alt="minus"
              :class="itemQuantity <= 0 && 'disabled'"
              @click="decrement"
            />
          </button>

          <button>
            <img src="/images/icons/icon-cart-white.svg" alt="cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";
import { useProductStore } from "~/store/product";
import "element-plus/theme-chalk/display.css";
import { homeContent } from "~/assets/staticData";
const { title, subtitle, paragraphText, price, discount, discountedPrice } =
  homeContent;

///////////////////////////// app store
const { formatPrice } = useAppStore();
const { isNavDrawerOpen } = storeToRefs(useAppStore());

//////////////////////////// product store
const { isAddToCartModalVisible, itemQuantity } = storeToRefs(
  useProductStore()
);

///////////////////////////// statics
const carouselInfo = [
  { id: 1, imgName: "image-product-1" },
  { id: 2, imgName: "image-product-2" },
  { id: 3, imgName: "image-product-3" },
  { id: 4, imgName: "image-product-4" },
];

/////////////////////////// states
const isCarouselModalVisible = ref(true);

/////////////////////////// methods
const increment = () => {
  itemQuantity.value++;
};

const decrement = () => {
  if (itemQuantity.value > 0) {
    itemQuantity.value--;
  } else itemQuantity.value = 0;
};
</script>

<style lang="scss">
@import "/assets/styles/pages/home-page.scss";
</style>

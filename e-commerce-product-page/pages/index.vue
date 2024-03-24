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
      <div class="hidden-md-and-up">
        <ProductCarousel />
      </div>

      <div class="product-img-selection hidden-sm-and-down">
        <div class="main-img">
          <img :src="mainImgUrl" alt="product" />
        </div>

        <ul class="thumbnails-list">
          <li
            v-for="img in thumbnails"
            :key="img.id"
            :class="mainImgUrl === img.fullSizeImgURL && 'selected-product'"
            @click="mainImgUrl = img.fullSizeImgURL"
          >
            <img :src="img.url" alt="product thumbnail" />
          </li>
        </ul>
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

//////////////////////////// states
const mainImgUrl = ref("/images/product/image-product-1.jpg");

/////////////////////////// statics
const thumbnails = ref([
  {
    id: 1,
    url: "/images/product/image-product-1-thumbnail.jpg",
    fullSizeImgURL: "/images/product/image-product-1.jpg",
  },
  {
    id: 2,
    url: "/images/product/image-product-2-thumbnail.jpg",
    fullSizeImgURL: "/images/product/image-product-2.jpg",
  },
  {
    id: 3,
    url: "/images/product/image-product-3-thumbnail.jpg",
    fullSizeImgURL: "/images/product/image-product-3.jpg",
  },
  {
    id: 4,
    url: "/images/product/image-product-4-thumbnail.jpg",
    fullSizeImgURL: "/images/product/image-product-4.jpg",
  },
]);

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

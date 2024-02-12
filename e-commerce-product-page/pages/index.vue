<template>
  <section class="home-page">
    <TheNavbar />

    <div class="carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in carouselInfo" :key="item.id">
          <img :src="`/images/product/${item.imgName}.jpg`" />
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
          <img src="/images/icons/icon-plus.svg" alt="plus" />
          <span>0</span>
          <img src="/images/icons/icon-minus.svg" alt="minus" />
        </button>

        <button>
          <img src="/images/icons/icon-cart-white.svg" alt="cart" />
          Add to cart
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { homeContent } from "~/assets/staticData";
const { title, subtitle, paragraphText, price, discount, discountedPrice } =
  homeContent;

///////////////////////////// static data
const carouselInfo = [
  { id: 1, imgName: "image-product-1" },
  { id: 2, imgName: "image-product-2" },
  { id: 3, imgName: "image-product-3" },
  { id: 4, imgName: "image-product-4" },
];

/////////////////////////// methods
const formatPrice = (price: number) => {
  return price.toLocaleString("en-us", {
    style: "currency",
    minimumFractionDigits: 2,
    currency: "USD",
  });
};
</script>

<style lang="scss">
@import "/assets/styles/pages/home-page.scss";
</style>

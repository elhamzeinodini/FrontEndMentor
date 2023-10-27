<template>
  <section class="info">
    <div class="info__img">
      <img
        :src="`/images/${imgVariant}.jpg`"
        alt="shoes"
        class="info__img__item"
      />
    </div>
    <div class="info__thumbnail">
      <img
        v-for="product in productInfo"
        :key="product.id"
        :src="`/images/${product.thumbnail}.jpg`"
        alt="shoe thumbnail"
        :class="[
          { 'info__thumbnail__item--selected': product.isSelected },
          'info__thumbnail__item',
        ]"
        @click="switchImages(product.id)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProductInfo {
  img: string;
  thumbnail: string;
  isSelected: boolean;
  id: number;
}

const imgVariant = ref<string>("image-product-1");

const productInfo = ref<ProductInfo[]>([
  {
    img: "image-product-1",
    thumbnail: "image-product-1-thumbnail",
    isSelected: false,
    id: 1,
  },
  {
    img: "image-product-2",
    thumbnail: "image-product-2-thumbnail",
    isSelected: false,
    id: 2,
  },
  {
    img: "image-product-3",
    thumbnail: "image-product-3-thumbnail",
    isSelected: false,
    id: 3,
  },
  {
    img: "image-product-4",
    thumbnail: "image-product-4-thumbnail",
    isSelected: false,
    id: 4,
  },
]);

const switchImages = (productId: number) => {
  productInfo.value.forEach((info: ProductInfo) => {
    if (info.id === productId) {
      info.isSelected = true;
      imgVariant.value = info.img;
    } else {
      info.isSelected = false;
    }
  });
};
</script>

<style lang="scss">
@import "/assets/scss/styles/body/app-body-product-desktop.scss";
@import '/assets/scss/styles/body/app-body-product-tablet.scss';
</style>

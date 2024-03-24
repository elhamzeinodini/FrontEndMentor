<template>
  <div class="carousel">
    <el-carousel>
      <el-carousel-item v-for="item in carouselInfo" :key="item.id">
        <img :src="`/images/product/${item.imgName}.jpg`" alt="product img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
///////////////////////////// statics
const carouselInfo = [
  { id: 1, imgName: "image-product-1" },
  { id: 2, imgName: "image-product-2" },
  { id: 3, imgName: "image-product-3" },
  { id: 4, imgName: "image-product-4" },
];
</script>

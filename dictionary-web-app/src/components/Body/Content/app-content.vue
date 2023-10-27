<template>
  <div class="content" :style="fontStyle">
    <h1 class="content__word dark:text-white">{{ wordText }}</h1>
    <div class="content__phonetic">
      <span class="content__phonetic__item">{{ wordPhonetic }}</span>
      <div class="content__phonetic__audio" v-show="showAudio">
        <audio controls>
          <source
            :src="wordAudio"
            type="audio/mpeg"
            class="content__phonetic__audio__item"
          />
        </audio>
      </div>
    </div>
    <div class="content__part">
      <p class="content__part__item" v-for="part in partArray" key="part">
        {{ part }}
      </p>
    </div>
    <div class="content__def dark:text-white" v-for="def in defArrayNoun" :key="def">
      <span class="content__def__divider">noun</span>
      <div class="content__def__list" v-for="item in def" :key="item">
        <li class="content__def__item">{{ item.definition }}</li>
      </div>
    </div>
    <div class="content__def dark:text-white" v-for="def in defArrayVerb">
      <span class="content__def__divider">verb</span>
      <div class="content__def__list" v-for="item in def" :key="item">
        <li class="content__def__item">{{ item.definition }}</li>
      </div>
    </div>
    <div class="content__def dark:text-white" v-for="def in defArrayAdj">
      <span class="content__def__divider">Adj</span>
      <div class="content__def__list" v-for="item in def" :key="item">
        <li class="content__def__item">{{ item.definition }}</li>
      </div>
    </div>
    <div class="content__def dark:text-white" v-for="def in defArrayInterject">
      <span class="content__def__divider">Int</span>
      <div class="content__def__list" v-for="item in def" :key="item">
        <li class="content__def__item">{{ item.definition }}</li>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "wordPhonetic",
  "wordText",
  "fontStyle",
  "partArray",
  "wordAudio",
  "showAudio",
  "defArrayNoun",
  "defArrayAdj",
  "defArrayVerb",
  "defArrayInterject",
]);
</script>

<style lang="scss">
@import "./app-content-desktop.scss";
@import "./app-content-mobile.scss";
</style>

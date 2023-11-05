<template>
  <div class="form__action">
    <button>Next Step</button>
    <button v-show="isBackBtnVisible">Go Back</button>
  </div>
</template>

<script setup lang="ts">
/////////////////////////////// props
const props = defineProps<{
  isBackBtnVisible: boolean;
}>();
</script>

<style lang="scss" scoped>
@import "/assets/sass/components/Buttons/buttons-mobile.scss";
</style>

<template>
  <section class="header">
    <div class="content">
      <div v-if="$slots.left" class="left">
        <slot name="left" />
      </div>

      <div v-if="$slots.right" class="right">
        <slot name="right" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// //////////////////////// props
const props = defineProps({
  bgClr: {
    type: String,
    required: true,
  },
});

const backgroundClr = props.bgClr;
</script>

<style lang="scss">
@import "/assets/components/header.scss";

.header {
  background-color: v-bind(backgroundClr);
}
</style>

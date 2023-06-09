<script setup lang="ts">
defineProps({
  size: {
    type: String,
    validator: (val: string) => ['small', 'middle', 'big'].includes(val)
  },
  style: {
    type: String,
    validator: (val: string) => ['light', 'light-solid', 'blue', 'yellow'].includes(val)
  }
})
</script>

<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style lang="scss">
.base-button {
}
</style>

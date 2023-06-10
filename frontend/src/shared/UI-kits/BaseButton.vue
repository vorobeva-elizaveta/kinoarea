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
  <button class="base-button" :class="`${style} ${size}`">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  display: block;
  font-weight: 700 !important;
  border-radius: 10px;
  @apply p-5;
  transition: 0.2s;

  &.blue {
    background: $blue;
    color: $white !important;

    &:hover {
      box-shadow: 0px 0px 15px rgba(72, 113, 255, 0.8);
    }
  }

  &.light {
    background: $white;
    color: $blue !important;
    &:hover {
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
    }
  }

  &.light-solid {
    @apply border-[2px] border-solid text-white;
    &:hover {
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
    }
  }

  &.yellow {
    @apply bg-yellow;
    &:hover {
      box-shadow: 0px 0px 15px rgba(251, 255, 26, 0.5);
    }
  }
}
</style>

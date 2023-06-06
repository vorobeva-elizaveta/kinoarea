<script setup lang="ts">
import UserHeader from '@/widgets/user/navigation/TheUserHeader.vue'
</script>

<template>
  <div class="base-user-cabinet">
    <div class="base-user-cabinet__container">
      <user-header></user-header>
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss"></style>

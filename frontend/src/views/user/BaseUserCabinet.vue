<script setup lang="ts">
import UserHeader from '@/widgets/user/navigation/TheUserHeader.vue'
</script>

<template>
  <div class="main base-user-cabinet" id="main">
    <div class="base-user-cabinet__container">
      <user-header></user-header>
      <main class="main" id="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.base-user-cabinet {
  background: $darkBlue;
  height: 100%;

  &__container {
    @apply flex flex-col h-full;
  }

  .main {
    flex: 0 0 auto;
  }
}
</style>

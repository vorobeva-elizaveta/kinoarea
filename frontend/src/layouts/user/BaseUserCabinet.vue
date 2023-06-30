<script setup lang="ts">
import UserHeader from "@/widgets/user/navigation/TheUserHeader.vue";
</script>

<template>
  <div class="main base-user-cabinet" id="main">
    <div class="base-user-cabinet__container">
      <user-header></user-header>
      <main class="main" id="main">
        <div class="main__container">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.base-user-cabinet {
  background: $darkBlue;
  height: max-content;
  min-height: 100%;

  &__container {
    @apply flex flex-col h-full;
  }

  .main {
    flex: 0 0 auto;
    display: flex;
    align-items: start;
    justify-content: center;

    &__container {
      width: 74.3%;

      @media (max-width: 1024px) {
        width: 85%;
      }
      @media (max-width: 768px) {
        width: 86%;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

/**
 * компонент шапки для кабинета пользователя
 */
interface IItem {
  name: string
  path?: string
}

const menuItems = ref<IItem[]>([
  { name: 'Афиша', path: '/' },
  { name: 'Фильмы', path: '/' }
])
</script>

<template>
  <header class="user-header" id="user-header">
    <div class="user-header__container">
      <span class="user-header__logo-span">
        <img src="/icons/logo.svg" alt="kinoarea-logo" />
      </span>
      <ul class="user-header__menu">
        <li class="menu__item" v-for="(item, i) in menuItems" :key="i">
          <RouterLink v-if="item != null && item.path != null" :to="{ path: item.path }">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
      <div class="user-header__right-block">
        <base-button :style="'light'">
          <i-fa icon="fa-solid fa-magnifying-glass" />
        </base-button>
        <base-button :style="'blue'" class="ml-3"> <p>Выход</p> </base-button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.user-header {
  @apply p-6;
  &__container {
    @apply flex items-center justify-between;
  }

  &__right-block {
    @apply flex items-center;
  }

  &__menu {
    @apply flex items-center;
    .menu__item {
      margin-right: 12px;
      font-weight: 700;
      color: $white;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>

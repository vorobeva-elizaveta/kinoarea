<script setup lang="ts">
import type IMovie from '@/shared/types/IMovie'

defineProps<{
  movie: IMovie
}>()
</script>

<template>
  <div class="base-movie-card" v-if="movie != null">
    <div class="base-movie-card__container">
      <img src="" alt="" v-if="movie.poster != null" />
      <h3 v-if="movie.name != null">{{ movie.name }}</h3>
      <h3 v-if="movie.name != null">Название не задано</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-movie-card {
  &__container {
  }
}
</style>

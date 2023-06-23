<script setup lang="ts">
import type IMovie from "@/shared/types/IMovie";

defineProps<{
  movie: IMovie;
}>();
</script>

<template>
  <div class="base-movie-card" v-if="movie != null">
    <!-- <pre>{{ movie }}</pre> -->
    <div class="base-movie-card__container">
      <div class="base-movie-card__poster-block">
        <img
          :src="movie.poster.previewUrl"
          alt=""
          v-if="movie.poster != null"
          class="base-movie-card__poster-image"
        />
      </div>
      <h2 v-if="movie.name != null">{{ movie.name }}</h2>
      <h2 v-else>Название не задано</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-movie-card {
  &__container {
  }
  &__poster-block {
    border-radius: 8px;
    overflow: hidden;
    width: 340px;
    height: 480px;
    object-fit: cover;
  }

  &__poster-image {
    width: 100%;
    height: 100%;
  }
}
</style>

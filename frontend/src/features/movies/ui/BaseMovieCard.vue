<script setup lang="ts">
import type { IMovie, IMovieGenre } from "@/shared/types/IMovie";
import { computed, toRefs } from "vue";

const props = defineProps<{
    movie: IMovie;
  }>(),
  { movie } = toRefs(props);

const movieGenresReduceCb = (
  accumulator: string,
  currentValue: IMovieGenre,
  currentValueIndex: number
) => {
  accumulator += currentValue.name;
  return movie.value.genres != null &&
    currentValueIndex < movie.value.genres.length - 1
    ? (accumulator += ", ")
    : accumulator;
};
const movieGenres = computed(() => {
  if (movie.value != null && movie.value.genres != null) {
    return movie.value.genres.reduce(movieGenresReduceCb, "");
  }
  return null;
});

const movieRatingColor = computed(() => {
  if (
    movie.value != null &&
    movie.value.rating != null &&
    movie.value.rating.imdb != null
  ) {
    if (movie.value.rating.imdb > 8) return "green";
    else if (movie.value.rating.imdb >= 5 && movie.value.rating.imdb < 8)
      return "lightGreen";
    else return "red";
  }
  return null;
});
</script>

<template>
  <div class="base-movie-card" v-if="movie != null">
    <!-- <pre>{{ movie }}</pre> -->
    <div class="base-movie-card__container">
      <div class="base-movie-card__poster-block">
        <span class="base-movie-card__rating-tag" :class="movieRatingColor">
          {{ movie.rating.imdb }}
        </span>
        <img
          :src="movie.poster.previewUrl"
          alt=""
          v-if="movie.poster != null"
          class="base-movie-card__poster-image"
        />
      </div>
      <div class="base-movie-card__text-block">
        <h2 v-if="movie.name != null">{{ movie.name }}</h2>
        <h2 v-else>Название не задано</h2>
        <p class="text-block__genres">
          {{ movieGenres }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-movie-card {
  &__container {
    @apply flex flex-col;
    gap: 11px;
    height: 100%;
  }
  &__poster-block {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    @apply h-5/6;
  }
  &__rating-tag {
    display: block;
    position: absolute;
    right: 0;
    margin: 12px;
    padding: 5px 10px;
    line-height: 22px;
    border-radius: 5px;

    &.green {
      background: $green;
    }
    &.lightGreen {
      background: $lightGreen;
    }
    &.red {
      background: $red;
    }
  }

  &__text-block {
    display: grid;
    gap: 4px;
    @apply h-fit;

    .text-block__genres {
      @apply text-yellow;
      color: $yellow;
      line-height: 18px;
    }
  }

  &__poster-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>

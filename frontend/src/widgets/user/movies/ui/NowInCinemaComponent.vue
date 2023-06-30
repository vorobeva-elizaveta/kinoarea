<script setup lang="ts">
import { storeToRefs } from "pinia";

import useMovieStore from "@/store/movies";
import BaseMovieCard from "@/features/movies/ui/BaseMovieCard.vue";

const { requestGetAllMovies } = useMovieStore(),
  movieStore = useMovieStore(),
  { movies } = storeToRefs(movieStore);

requestGetAllMovies();
</script>

<template>
  <div class="now-in-cinema-component" v-if="movies != null">
    <div class="now-in-cinema-component__container">
      <h1>Сейчас в кино</h1>
      <div
        class="now-in-cinema-component__movies-block"
        v-if="movies.length > 0"
      >
        <base-movie-card
          v-for="i of 8"
          :key="i"
          :movie="movies[i - 1]"
          class="movies-block__movie-card"
        />
      </div>
      <base-button
        class="now-in-cinema-component__all-movies-button"
        :style="`light-solid`"
      >
        Все новинки
      </base-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.now-in-cinema-component {
  &__container {
    display: grid;
    row-gap: 50px;
  }

  &__movies-block {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 22px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 540px) {
      grid-template-columns: 1fr 1fr;
    }

    .movies-block__movie-card {
    }
  }

  &__all-movies-button {
    position: relative;
    width: fit-content;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>

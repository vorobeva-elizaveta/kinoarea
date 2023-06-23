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
  <div class="now-in-cinema-component">
    <div class="now-in-cinema-component__container">
      <h1>Сейчас в кино</h1>
      <div class="now-in-cinema-component__movies-block">
        <base-movie-card v-for="i of 8" :key="i" :movie="movies[i - 1]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.now-in-cinema-component {
  &__movies-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>

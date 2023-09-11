<script setup lang="ts">
import { storeToRefs } from 'pinia'

import useMovieStore from '@/store/movies'
import BaseMovieCard from '@/features/movies/ui/BaseMovieCard.vue'
import NowInCinemaFilterComponent from '@/features/movies/ui/NowInCinemaFilterComponent.vue'
import { ref } from 'vue'
import type { IMovie } from '@/shared/types/IMovie'

const { requestGetAllMovies } = useMovieStore(),
  movieList = ref<IMovie[]>([])

const setMovieList = (value: IMovie[]) => (movieList.value = value)

requestGetAllMovies()
</script>

<template>
  <div class="now-in-cinema-component" v-if="movieList != null">
    <div class="now-in-cinema-component__container">
      <now-in-cinema-filter-component @change="setMovieList" />
      <div class="now-in-cinema-component__movies-block" v-if="movieList.length > 0">
        <base-movie-card
          v-for="i of 8"
          :key="i"
          :movie="movieList[i - 1]"
          class="movies-block__movie-card"
        />
      </div>
      <base-button class="now-in-cinema-component__all-movies-button" :style="`light-solid`">
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

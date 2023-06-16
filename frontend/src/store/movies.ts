import { defineStore } from 'pinia'
import { ref } from 'vue'
import type IMovie from '@/shared/types/IMovie'

const useMoviesStore = defineStore('movies', () => {
  const movies = ref<IMovie[]>([])

  const requestGetAllMovies = () => {}

  return {
    movies,
    requestGetAllMovies
  }
})

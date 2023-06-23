import { defineStore } from 'pinia'
import { ref } from 'vue'
import type IMovie from '@/shared/types/IMovie'
import MovieApi from '@/shared/api/movies'

const useMoviesStore = defineStore('movies', () => {
  const movies = ref<IMovie[]>([])

  const requestGetAllMovies = async () => {
    await MovieApi.fetchAllMovies().then((data) => {
      
      if (data.error === false && data.result != null) {
        movies.value = data.result
      }
      return data.result
    })
  }

  return {
    movies,
    requestGetAllMovies
  }
})

export default useMoviesStore

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IMovie } from '@/shared/types/IMovie'
import MovieApi from '@/shared/api/movies'

const useMoviesStore = defineStore('movies', () => {
  const movies = ref<IMovie[]>([])

  const setMoviesStoreValue = (data: IMovie[]) => {
    movies.value = data
  }

  const movieList = computed(() => movies.value)

  const requestGetAllMovies = async () => {
    const result = await MovieApi.fetchAllMovies().then((data) => data.result)
    if (result != null) setMoviesStoreValue(result)
    return result
  }

  const getMoviesByGenre = (genre: string) => {
    const movieList = [...movies.value],
      regExp = new RegExp(`${genre}`, 'gi'),
      searchCb = (el: IMovie) =>
        el.genres?.reduce((accum, current) => (accum += current.name), '').search(regExp)

    movieList.filter((el) => {
      const result = searchCb(el)
      return result != null && result > -1
    })
    return movieList
  }

  const getTrillerMovies = computed(() =>
    movieList.value != null ? getMoviesByGenre('триллер') : null
  )

  return {
    movieList,
    getTrillerMovies,
    getMoviesByGenre,
    requestGetAllMovies
  }
})

export default useMoviesStore

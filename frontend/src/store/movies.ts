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
      searchCb = (el: IMovie) => el.genres?.map((element) => element.name).includes(genre)

    return movieList.filter((el) => {
      const result = searchCb(el)
      return result == true ? el : null
    })
  }

  const getTrillerMovies = computed(() =>
    movieList.value != null ? getMoviesByGenre('триллер') : []
  )
  const getActionMovies = computed(() =>
    movieList.value != null ? getMoviesByGenre('боевик') : []
  )
  const getDramaticsMovies = computed(() =>
    movieList.value != null ? getMoviesByGenre('драма') : []
  )

  return {
    movieList,
    getTrillerMovies,
    getActionMovies,
    getDramaticsMovies,
    getMoviesByGenre,
    requestGetAllMovies
  }
})

export default useMoviesStore

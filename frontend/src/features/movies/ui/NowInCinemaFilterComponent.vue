<script lang="ts" setup>
import useMovieStore from '@/store/movies'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import type { IMovie } from '@/shared/types/IMovie'

const movieStore = useMovieStore(),
  { movieList, getTrillerMovies, getActionMovies, getDramaticsMovies } = storeToRefs(movieStore),
  mainFilter = ref('')

const emit = defineEmits(['change'])

const changeFilter = (emit: any, filter: string, filteredMoviesList: IMovie[]) => {
  mainFilter.value = filter
  emit('change', filteredMoviesList)
}

const stop = watch(
  () => movieList.value,
  () => {
    if (movieList.value != null) {
      changeFilter(emit, 'all', movieList.value)
      stop()
    }
  }
)
</script>

<template>
  <div class="now-in-cinema-filter-component">
    <div class="now-in-cinema-filter-component__container">
      <h1>Сейчас в кино</h1>
      <span class="now-in-cinema-filter-component__separator"></span>
      <div class="now-in-cinema-filter-component__filters-block">
        <span
          class="now-in-cinema-filter-component__filter-span"
          :class="{ active: mainFilter === 'all' }"
          @click="changeFilter($emit, 'all', movieList)"
        >
          Все
        </span>
        <span
          class="now-in-cinema-filter-component__filter-span"
          :class="{ active: mainFilter === 'action' }"
          @click="changeFilter($emit, 'action', getActionMovies)"
        >
          Боевик
        </span>
        <span
          class="now-in-cinema-filter-component__filter-span"
          :class="{ active: mainFilter === 'triller' }"
          @click="changeFilter($emit, 'triller', getTrillerMovies)"
        >
          Триллеры
        </span>
        <span
          class="now-in-cinema-filter-component__filter-span"
          :class="{ active: mainFilter === 'drama' }"
          @click="changeFilter($emit, 'drama', getDramaticsMovies)"
        >
          Драма
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.now-in-cinema-filter-component {
  &__separator {
    display: block;
    width: 100px;
    height: 2px;
    background: $white;
  }
  &__container {
    @apply flex justify-between items-center;
  }
  &__filters-block {
    @apply flex items-center gap-9;
  }
  &__filter-span {
    @apply font-bold text-lg opacity-30 cursor-pointer;
    &.active {
      @apply opacity-100;
    }
  }
}
</style>

<script setup>
const {
    data: products,
    pending,
    error,
  } = await useFetch("https://api.kinopoisk.dev/v1.3/movie/random", {
    headers: {
      "X-API-KEY": "55NC2F3-4244ZY8-K8V339X-48BR2V9",
    },
  }),
  { data: testData } = useFetch("/api/hello");
</script>

<template>
  <div>
    <h2>About!</h2>
    {{ testData }}
    {{ pending }}
    {{ error }}
    <pre>{{ products }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>

<template>
    <div>
      <TemplateManyMovies :movies="movies" :titulo="titulo"></TemplateManyMovies>
    </div>
  </template>
  
  <script setup>
  
  const { gender } = useRoute().params;
  const url = "http://localhost:3001/moviesbygender/" + gender;
  const titulo = gender;
  const { data: movies } = await useFetch(url, { key: gender });

  const props = defineProps({
    titulo: String,
    movies: Array
  });
  
  </script>
  
  <style scoped>
  
  </style>

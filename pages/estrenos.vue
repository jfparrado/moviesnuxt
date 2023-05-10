<template>
    <div>
        <TemplateManyMovies :movies="movies" :titulo="titulo"></TemplateManyMovies>
    </div>
</template>

<script setup lang="ts">
 definePageMeta({
    middleware:['auth']
  })
  import { getLatestMoviesPreview } from '../plugins/api/movies'; 
    const titulo="Estrenos";
    const movies= await getLatestMoviesPreview()
</script>

<style scoped>

</style>
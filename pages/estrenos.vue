<template>
    <div>
        <TemplateManyMovies :movies="movies" :titulo="titulo"></TemplateManyMovies>
    </div>
</template>

<script setup lang="ts">
    const titulo="Estrenos";
    const {data: movies} = await useFetch("http://localhost:3001/latestmovies")
</script>

<style scoped>

</style>
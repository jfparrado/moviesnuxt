<template>
    <div>
        <TemplateManyMovies :movies="movies" :titulo="titulo"></TemplateManyMovies>
    </div>
</template>

<script setup>
    const {movie_name} = useRoute().params
    const titulo="Resultados";
    const {data: movies} = await useFetch("http://localhost:3001/search/" + movie_name)
</script>

<style scoped>

</style>
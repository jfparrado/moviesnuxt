<template>
    <div>
        <TemplatePreview :movies="movies" :titulo="titulo"></TemplatePreview>
    </div>
</template>

<script setup>
    const titulo="Estrenos";
    const {data: movies} = await useFetch("http://localhost:3001/latestmovies")
</script>

<style scoped>

</style>
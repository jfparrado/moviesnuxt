<template>
    <div>
        <TemplatePreview :movies="movies" :titulo="titulo"></TemplatePreview>
    </div>
</template>

<script setup>
import { getLatestMoviesPreview } from '../plugins/api/movies'; 
    const titulo="Estrenos";
    const movies= await getLatestMoviesPreview()
</script>

<style scoped>

</style>
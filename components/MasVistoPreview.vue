<template>
    <div>
        <TemplatePreview :movies="movies" :titulo="titulo"></TemplatePreview>
    </div>
</template>

<script setup>
import { getTopranked } from '../plugins/api/movies'; 
    const titulo="Mas Visto";
    const movies= await getTopranked()
</script>

<style scoped>

</style>
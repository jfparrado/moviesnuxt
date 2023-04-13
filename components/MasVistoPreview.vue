<template>
    <div>
        <TemplatePreview :movies="movies" :titulo="titulo"></TemplatePreview>
    </div>
</template>

<script setup>
    const titulo="Mas Visto";
    const {data: movies} = await useFetch("http://localhost:3001/topranked")
</script>

<style scoped>

</style>
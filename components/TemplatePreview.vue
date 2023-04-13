<template>
  <div v-if="movies">
    <h2>{{titulo}}</h2>
    <section class="image-section">
      <div v-for="video in movies.slice(0, 5)" :key="video.id" class="image-container">
        <nuxt-link :to="'/detailmovie/' + video.id">
          <img :src="'https://image.tmdb.org/t/p/w185/' + video.poster_path" :alt="'poster of ' + video.original_title" />
          <p class="image-text">{{video.original_title}}</p>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    movies: Array
  }
}
</script>

  <style scoped>
  h2 {    
    color: white;
    margin-top: 5%;
    margin-left: 5%;
    font-size: 36px;
  }
  
  section {
    margin-left: 5%;
    margin-right: 5%;
  }
  
  .image-text {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: white;
    text-align: center;
  }
  
  .image-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  p{
    text-decoration: underline;
    text-decoration-color: #384047;;
  }
  
  a {
    text-align: center;
  }
  </style>
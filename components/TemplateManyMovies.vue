<template>
  <div>
    <br />
    <h2>{{titulo}}</h2>
    <template v-if="movies.length !== 0">
      <template v-for="index in [0, 1, 2, 3]">
        <section class="image-section">
          <template v-for="video in movies.slice(index * 5, (index + 1) * 5)">
            <div class="image-container">
              <nuxt-link :to="'/detailmovie/' + video.id">
                <img :src="'https://image.tmdb.org/t/p/w185/' + video.poster_path" :alt="'poster of ' + video.original_title"/>
                <p class="image-text">{{ video.original_title }}</p>
              </nuxt-link>
            </div>
          </template>
        </section>
      </template>
    </template>
    <template v-else>
      <slot name="loading"><img src="~/assets/loading.gif" alt="loading" /></slot>
      <slot name="no-results"><p id="noResults">No se encontraron resultados</p></slot>
    </template>
  </div>
</template>

  

<script>
export default {
  props: {
    titulo: String,
    movies: Array
  },
  data() {
    return {
      showNoResults: false
    };
  },
  mounted() {
    setTimeout(() => {
      if (this.movies.length === 0) {
        this.showNoResults = true;
      }
    }, 3000);
  }
};
</script>

<style scoped>

  #noResults{
    font-size: 3rem;
    color: white;
    text-shadow: 1px 1px 2px black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

img {
    max-width: 100%;
    max-height: 300px;
    left: 0;
  }
  
  .image-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .image-container {
    width: 18%;
    text-align: center;
  }
  
  .image-text {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: white;
  }
  p{
    text-decoration: underline;
    text-decoration-color: #384047;;
  }
  
  section {
    margin-left: 5%;
    margin-right: 5%;
  }
  
  h2 {
    color: white;
    margin-top: 5%;
    font-size: 36px;
    margin-left: 5%;
  }
  
  .imgContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #384047;
  }
  
  .imgContainer img {
    display: block;
    margin: 0 auto;
  }
</style>
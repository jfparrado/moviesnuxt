<template>
    <div v-if="detailMovie.id === parseInt(id)" class="detail-movie-container">
      <h2>{{detailMovie.original_title}}</h2>
      <div class="detail-movie-info-container">
        <img :src="'https://image.tmdb.org/t/p/w185/' + detailMovie.poster_path" :alt="'poster of ' + detailMovie.original_title" class="detail-movie-poster" />
        <div class="detail-movie-text-container">
          <table>
            <tr>
              <td>
                <p><strong>Original Title:</strong> {{detailMovie.original_title}}</p>
                <p><strong>Original Language:</strong> {{detailMovie.original_language}}</p>
                <p><strong>Genres:</strong> {{detailMovie.genres && detailMovie.genres.join(', ')}}</p>
                <p><strong>Release Date:</strong> {{detailMovie.release_date}}</p>
                <p><strong>Duration:</strong> {{detailMovie.runtime}}</p>
                <p><strong>Homepage:</strong> {{detailMovie.homepage}}</p>
              </td>
              <td>
                <p><strong>Popularity:</strong> {{detailMovie.popularity}}</p>
                <p><strong>Budget:</strong> {{detailMovie.budget}}</p>
                <p><strong>Revenue:</strong> {{detailMovie.revenue}}</p>
                <p><strong>Spoken Languages:</strong> {{ detailMovie.spoken_languages && detailMovie.spoken_languages.join(', ')}}</p>
                <p><strong>Status:</strong> {{detailMovie.status}}</p>
                <p><strong>Vote Average:</strong> {{detailMovie.vote_average}}</p>
              </td>
            </tr>
          </table>
          <p><strong>Overview:</strong> {{detailMovie.overview}}</p>
        </div>
      </div>
    </div>
    <div v-else class="imgContainer">
      <img src="../../static/loading.gif" alt="loading" />
    </div>
  </template>
  

<script setup>
    const {id} = useRoute().params
    const url="http://localhost:3001/detailmovie/" + id;
    const {data: detailMovie} = await useFetch(url, {key:id})
</script>

<style scoped>
.detail-movie-container {
    color: #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-size: 16px;
  }
  
  h2 {
    color: white;
    margin-top: 5%;
    font-size: 36px;
  }
  
  .detail-movie-info-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
  }
  
  .detail-movie-poster {
    width: 20%;
    height: auto;
    margin-right: 20px;
  }
  
  .detail-movie-text-container {
    width: 80%;
    font-size: 75%;
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
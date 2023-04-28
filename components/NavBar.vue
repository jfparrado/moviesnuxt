<template>
  <nav id="container-nav">
    <div id="logo-container">
      <nuxt-link to="/">
        <img src="~/assets/logo.png" alt="logo" />
      </nuxt-link>
    </div>
    <div class="navbar-collapse" :class="{ 'show': isMenuOpen }">
      <div class="navbar-nav">
        <div class="column">
          <div id="options-container">
            <nuxt-link to="/">Inicio</nuxt-link>
            <a @click="handleMousePeliculas" class="main-item">Peliculas</a>
            <div v-if="isPeliculasExpanded" class="categorias-container">
              <p><nuxt-link to="/estrenos" class="justtext">Estrenos</nuxt-link></p>
              <a @click="handleMouseGeneros" class="justtext">Generos</a>
              <div id="secondcont" v-if="isGenerosPeliculasExpanded" >
                <ul class="generos">
                  <li v-for="category in categories" :key="category.id" class="opciones">
                    <nuxt-link :to="'/categorias/' + category.name" class="opcion">{{ category.name }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="search-container">
            <input type="text" placeholder="Movie Name" v-model="movieName" @keyup.enter="handleEnter($event)" />
          </div>
        </div>
      </div>
    </div>
    <button class="navbar-toggler d-lg-none" type="button" @click="toggleMenu()">
      <img src="~/assets/menu-button.png" alt="Toggle menu icon">
    </button>
  </nav>
</template>

<script setup>
import DOMPurify from 'dompurify';

const movieName = ref('')
const isPeliculasExpanded = ref(false)
const isGenerosPeliculasExpanded = ref(false)
const isMenuOpen = ref(false)
const {data: categories} = await useFetch("http://localhost:3001/moviegenders")

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
function handleMousePeliculas() {
  isPeliculasExpanded.value = !isPeliculasExpanded.value;
}
function handleMouseGeneros() {
  isGenerosPeliculasExpanded.value = !isGenerosPeliculasExpanded.value;
}
function handleEnter(event) {
  const input = event.target;
  const movieName = DOMPurify.sanitize(input.value.trim()); // use DOMPurify to sanitize the input value
  if (movieName.length > 0) {
    const encodedMovieName = encodeURIComponent(movieName);
    navigateTo(`/search/${encodedMovieName}`);
  }
}
</script>



<style scoped>
#container-nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 999;
  background-color: #333;
  color: #fff;
  height: 56px;
}

#logo-container img {
  width: 50px;
  height: 30px;
}

#options-container {
  display: flex;
  width: 100%;
  margin-left: 15%;
  justify-content: left;
  align-items: center;
  position: relative;
}

#options-container a {
  color: #fff;
  text-decoration: none;
  padding: 10px 10px;
  margin-right: 10px;
  cursor: pointer;
}

#options-container a:hover {
  background-color: #555;
}

#search-container input[type="text"] {
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 300px;
  background-color: #555;
  color: #fff;
}

#search-container input[type="text"]:focus {
  outline: none;
  box-shadow: 0 0 5px #aaa;
}

.categorias-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  background-color: #555;
  min-width: 150px;
  left: 100px;
}



.generos {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 100%;
  background-color: #6d6c6c;
  min-width: 150px;
  max-height: 2000px;
  left: 25px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #8e8e8e #d6d6d6;
}
.generos::-webkit-scrollbar{
  width: 8px;
}
.generos::-webkit-scrollbar-track{
  background: #d6d6d6;
}
.generos::-webkit-scrollbar-thumb{
  background-color: #8e8e8e;
  border-radius: 20px;
  border: 3px solid #d6d6d6;
}
.generos::-webkit-scrollbar-thumb:hover{
  background-color: #555;
}
.generos li a {
  color: #fff;
  text-decoration: none;
}

.generos li a:hover {
  background-color: #333;
}

#firstcont{
  display: flex;
}

.justtext{
  padding: 10px;
  margin: 0px;
}
.opcion{
  padding: 0px 100% 0px 0px!important;
}
nav #options-container a:hover, nav .justtext:hover {
  background-color: #333;
}
.container-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;
}
.navbar-collapse  {
  display: flex;
  width: 100%;
}

.navbar-toggler {
  display: none;
  border: none;
  background-color: transparent;
}
.navbar-nav {
  display: flex;
  width: inherit;
  height: inherit;
}
.column{
  display: flex;
  width: inherit;
  height: inherit;
  }
@media only screen and (max-width: 768px) and (max-height: 1350px) {
  .navbar-toggler {
    display: block;
  }

  .navbar-toggler img {
    display: block;
    width: 30px;
    height: 30px;
  }

  .navbar-nav {
  display: none;
  background-color: #333;
  position: absolute;
  left: 0;
  top: 100%;
  width: max-content;
  height: 100vh;
  }

  .column{
  display: flex;
  flex-direction: column-reverse;
  width: max-content;
  justify-content: flex-end;
  }

  .show .navbar-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #search-container input[type="text"] {
    width: 200px;
    padding: 6px;
    margin: 10px 20px;
  }

  #options-container {
    align-items: flex-start;
    flex-direction: column;
    width: 70%;
    margin-left: 10%;
  }
  #secondcont .generos {
    width: 200px;
    height: 200px;
  }
  .main-item {
    border-bottom: 1px solid white !important;
    width: 100%;
  }

  .categorias-container {
    display: flex;
    background-color:inherit;
    left: 0px;
  }
  .justtext {
    font-size: 0.9rem;
    color: #ababab !important
  }
  .generos {
    background-color: inherit;
    left: 8%;
  }
  .opcion {
    font-size: 0.8rem;
    color: #ababab !important;
  }
} 


</style>
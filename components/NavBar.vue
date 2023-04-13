<template>
  <nav id="container-nav">
    <div id="logo-container">
      <img src="~/assets/logo.png" alt="logo" />
    </div>

    <div id="menu-icon" @click="showMenu = !showMenu">
      <img src="~/assets/menu-button.png" alt="menu icon" />
    </div>

    <div id="options-container" :class="{ 'show': showMenu }">
      <nuxt-link to="/">Inicio</nuxt-link>

      <a @click="handleMousePeliculas()">Peliculas</a>
      <div v-if="isPeliculasExpanded" class="categorias-container">
        <nuxt-link to="/estrenos">Estrenos</nuxt-link>
        <a @click="handleMouseGeneros()">Generos</a>
        <div id="secondcont" v-if="isGenerosPeliculasExpanded" >
          <ul class="generos">
            <li v-for="category in categories" :key="category.name" class="opciones">
              <nuxt-link :to="'/categorias/' + category.name" @click="handleMousePeliculas(); handleMouseGeneros();">{{ category.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div id="search-container">
        <input type="text" placeholder="Movie Name" v-model="movieName" @keyup.enter="handleEnter(movieName)" />
      </div>
    </div>
  </nav>
</template>

<script setup>
  const movieName = ref('')
  const isPeliculasExpanded = ref(false)
  const isGenerosPeliculasExpanded = ref(false)
  const { data: categories } = await useFetch('http://localhost:3001/moviegenders')
  const showMenu = ref(false)

  function handleMousePeliculas() {
    isPeliculasExpanded.value = !isPeliculasExpanded.value
  }

  function handleMouseGeneros() {
    isGenerosPeliculasExpanded.value = !isGenerosPeliculasExpanded.value
  }

  function handleEnter(movieName) {
    if (movieName.trim().length > 0) {
      const encodedMovieName = encodeURIComponent(movieName.trim())
      navigateTo(`/search/${encodedMovieName}`)
    }
  }

  // Hide the menu when a link is clicked
  watchEffect(() => {
    const links = document.querySelectorAll('#options-container a')
    links.forEach(link => {
      link.addEventListener('click', () => {
        showMenu.value = false
      })
    })
  })
</script>



<style scoped>
#container-nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
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

.categoria-container {
  padding: 10px;
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

#firstcont {
  display: flex;
}

.justtext {
  padding: 10px;
  margin: 0px;
}

nav #options-container a:hover, nav .justtext:hover {
  background-color: #333;
}

@media screen and (max-width: 767px) {
  .header {
    padding: 20px;
  }

  .navbar {
    display: none;
  }

  .navbar-icon {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .sidebar {
    display: none;
  }

  .content {
    width: 100%;
  }
}

/* Styles for medium screens */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .header {
    padding: 30px;
  }

  .navbar {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }

  .navbar-icon {
    display: none;
  }

  .sidebar {
    display: none;
  }

  .content {
    width: 100%;
  }
}

/* Styles for large screens */
@media screen and (min-width: 992px) {
  .header {
    padding: 40px;
  }

  .navbar {
    display: block;
    width: 25%;
    float: left;
    margin-right: 20px;
  }

  .navbar-icon {
    display: none;
  }

  .sidebar {
    display: block;
    width: 25%;
    float: right;
    margin-left: 20px;
  }

  .content {
    width: 50%;
    float: left;
  }
}
</style>
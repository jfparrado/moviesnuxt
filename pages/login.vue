<template>
  <br>
  <br>
    <div>
      <h2 class='titulologin'>Inicio de sesion</h2>
      <form @submit.prevent="onLogin">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" v-model="password" required>
        </div>
        <p class='simple_paragraph'>No tienes cuenta? <nuxt-link to="/register">Registrate</nuxt-link></p>
        <button type="submit">Iniciar sesion</button>
        <!-- <button class='google-button' @click="googleLogin">Iniciar sesion con google</button> -->
      </form>
    </div>
  </template>

<script setup lang="ts">
 definePageMeta({
    middleware:['auth']
  })
const email = ref('')
const password = ref('')
// const isSignUp = ref(false)
const client = useSupabaseClient()
  
const onLogin = async () => {
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    navigateTo('/')
  } catch (error) {
    console.log(error)
  }
}
const user = useSupabaseUser()
onMounted(()=>{
  console.log("user:",user.value);
  
  // if (!user.value || user.value===null) {
  //   navigateTo('/login')
  // }else{
  //   navigateTo('/')
  // }
})
  </script>
  
    <style scoped>
    h2 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: max-content;
    margin-left: auto;
    margin-right: auto;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 90%;
    padding: 5%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }
  
  p {
    margin-top: 20px;
    text-align: center;
  }
  
  a {
    color: #337ab7;
    text-decoration: none;
  }
  

  button{
    background-color: #337ab7;
    color: white;
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin: 0.5%;
  }
  button[type="submit"]{
    background-color: #337ab7;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin: 0.5%;
    width: 240px;
  }
  button:hover {
    background-color: #23527c;
  }
  .titulologin{
    text-align: center;
    margin-left:none !important;
    display: flex;
    justify-content: center;
  }
.simple_paragraph, .titulologin, label{
  color:white
}
  </style>
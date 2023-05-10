<template>
    <div>
        <br>
        <br>
      <h2 class="titulologin">Registro de usuarios</h2>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" v-model="password" required>
        </div>
        <p class="simple_paragraph">Ya tienes cuenta? <nuxt-link to="/login">Logeate</nuxt-link></p>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">

const email = ref('')
const password = ref('')
// const isSignUp = ref(false)
const client = useSupabaseClient()
  
      const register=async() =>{
        try {
          const {data,error}= await client.auth.signUp({
            email: email.value,
            password: password.value,
          })
        console.log("user:",data.user);
        console.log("error:",error);
        
        } catch (error) {
          console.log(error)
        }
      }
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
  
  </style>
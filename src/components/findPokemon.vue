<template>
    <div>
      <form @submit.prevent="buscarPokemon">
        <div class="items-form">
          <input
            type="text"
            id="name"
            v-model="namePokemon"
            placeholder=" "
            class="input-form"
            required
          />
          <label for="name" class="lbl-form">Nombre del Pokémon</label>
        </div>
        <button type="submit">Buscar</button>
      </form>
      <div v-if="pokemon">
        <h2>{{ pokemon.name }}</h2>
        <p><strong>Altura:</strong> {{ pokemon.height }}</p>
        <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
        <p><strong>Habilidades:</strong> {{ abilities }}</p>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      </div>
      <div v-else-if="error" style="color: red;">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        namePokemon: "", // Inicializar como string vacío
        pokemon: null, // Donde guardaremos la respuesta de la API
        error: null, // Para manejar errores
      };
    },
    computed: {
      abilities() {
        return this.pokemon
          ? this.pokemon.abilities.map((a) => a.ability.name).join(", ")
          : "";
      },
    },
    methods: {
      async buscarPokemon() {
        try {
          // Reseteamos los datos previos
          this.error = null;
          this.pokemon = null;
  
          // URL de la API
          const url = `https://pokeapi.co/api/v2/pokemon/${this.namePokemon.toLowerCase()}`;
  
          // Realizamos la solicitud
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error(`No se encontró el Pokémon ${this.namePokemon}`);
          }
  
          // Procesamos la respuesta
          this.pokemon = await response.json();
        } catch (e) {
          // Manejamos errores
          this.error = e.message;
        } finally {
          // Limpiamos el campo de texto
          this.namePokemon = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Agrega tus estilos aquí */
  .items-form{
    position: relative;
    width: 100%;
    margin: 20px auto;
  }
  .input-form{
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    background: none;
    box-sizing: border-box;
    color: #fff;
  }
  .input-form:focus{
    border-color: #FFCC00;
  }
  .lbl-form{
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }
  .input-form:focus + .lbl-form,
  .input-form:not(:placeholder-shown) + .lbl-form {
    top: 0px;
    font-size: 0.8rem;
    color: #FFCC00;
    padding: 3px;
  }
  button{
    border: 2px solid #FFCC00;
    color: #fff;
    border-radius: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    font-size: 1.3rem;
    transition: all 1s ease;
  }
  button:hover{
    background-color: #FFCC00;
    color: #000;
  }
  </style>
  
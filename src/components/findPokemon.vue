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
    
    <!-- Información del Pokémon -->
    <div v-if="pokemon">
      <h2>{{ pokemon.name }}</h2>
      <p><strong>Altura:</strong> {{ pokemon.height }}</p>
      <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
      <p><strong>Habilidades:</strong> {{ abilities }}</p>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
    
    <!-- Tablas dinámicas -->
    <div v-if="tables.length > 0">
      <div v-for="(table, index) in tables" :key="index">
        <h2>Tabla {{ index + 1 }}: {{ table.name }}</h2>
        <table border="1">
          <thead>
            <tr>
              <th v-for="(key, idx) in table.keys" :key="idx">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in table.data" :key="idx">
              <td v-for="key in table.keys" :key="key">{{ row[key] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
      namePokemon: "", // Nombre del Pokémon a buscar
      pokemon: null, // Datos del Pokémon
      tables: [], // Tablas generadas dinámicamente
      error: null, // Manejo de errores
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
        this.error = null; // Reinicia el estado de errores
        this.tables = []; // Limpia las tablas previas

        // Llama a la API
        const url = `https://pokeapi.co/api/v2/pokemon/${this.namePokemon.toLowerCase()}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`No se encontró el Pokémon: ${this.namePokemon}`);
        }

        const data = await response.json();
        this.pokemon = data;

        // Procesa el JSON para encontrar todos los arreglos
        this.processJson(data);
      } catch (err) {
        this.error = err.message;
        this.pokemon = null;
      }
    },
    processJson(json) {
      // Recorre todas las claves del JSON
      for (const key in json) {
        if (Array.isArray(json[key])) {
          const arrayData = json[key];

          // Verifica si los elementos del arreglo son objetos
          if (arrayData.length > 0 && typeof arrayData[0] === "object") {
            const keys = Object.keys(arrayData[0]); // Claves de los objetos
            this.tables.push({
              name: key, // Nombre del arreglo
              keys, // Columnas de la tabla
              data: arrayData, // Datos para las filas
            });
          } else {
            // Arreglos simples (ej. números o strings)
            this.tables.push({
              name: key,
              keys: ["value"], // Una columna genérica
              data: arrayData.map((item) => ({ value: item })),
            });
          }
        }
      }
    },
  },
};
</script>

<style scoped>
/* Agrega tus estilos aquí */
.items-form {
  position: relative;
  width: 100%;
  margin: 20px auto;
}
.input-form {
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
.input-form:focus {
  border-color: #FFCC00;
}
.lbl-form {
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
button {
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
button:hover {
  background-color: #FFCC00;
  color: #000;
}
</style>

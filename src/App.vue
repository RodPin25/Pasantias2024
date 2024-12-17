<template>
  <div class="tmp-div">
    <div class="navbar-div">
      <navBar />
    </div>
    <div class="content">
      <!-- Componente del formulario -->
      <formIndex @form-enviado="mostrarAlerta" />

      <!-- Componente de notificación, visible solo si `mostrarNotificacion` es verdadero -->
      <alertCompo
        v-if="mostrarNotificacion" 
        :name="formData.name" 
        :lastName="formData.lastName" 
        :phoneNumber="formData.phoneNumber" 
        :address="formData.address" 
        @cerrar="ocultarAlerta" 
      />
      <calendarDay />
      <calculatorOperator />
      <h1>Buscador de Pokémon</h1>
      <!-- Componente de búsqueda -->
      <FindPokemon @pokemon-encontrado="mostrarPokemon" />

      <!-- Mostramos los detalles del Pokémon -->
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
    <covidApi />
  </div>
</template>

<script>
import formIndex from './components/formIndex.vue';
import alertCompo from './components/alertCompo.vue';
import calendarDay from './components/calendarDay.vue';
import calculatorOperator from './components/calculatorOperator.vue';
import FindPokemon from './components/findPokemon.vue';
import navBar from './components/navBar.vue';
import covidApi from './components/covidApi.vue';

export default {
  name: 'App',
  components: {
    navBar,
    formIndex,
    alertCompo,
    calendarDay,
    calculatorOperator,
    FindPokemon,
    covidApi
  },
  data() {
    return {
      mostrarNotificacion: false, // Controla si la alerta está visible
      formData: {
        name: "",
        lastName: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    mostrarAlerta(datos) {
      this.formData = datos; // Guarda los datos del formulario
      this.mostrarNotificacion = true; // Muestra la notificación
    },
    ocultarAlerta() {
      this.mostrarNotificacion = false; // Oculta la notificación
    },
  },
};
</script>

<style scoped>
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #2c3e50;
}

.tmp-div {
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: #2c3e50;
  color: #fff;
}

/* Estilos para el navbar */
.navbar-div {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: #460e5f;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

/* Contenido principal */
.content {
  flex-grow: 1;
  padding: 20px;
  width: 100%;
}

/* Estilos para centrar y organizar el contenido */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #2c3e50;
}
</style>

<template>
  <div>
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
  </div>
</template>

<script>
import formIndex from './components/formIndex.vue';
import alertCompo from './components/alertCompo.vue';
import calendarDay from './components/calendarDay.vue';
import calculatorOperator from './components/calculatorOperator.vue';


export default {
  name: 'App',
  components: {
    formIndex,
    alertCompo,
    calendarDay,
    calculatorOperator
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
}
</script>

<style>
*{
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>

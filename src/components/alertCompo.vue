<template>
    <div class="notification-container">
      <div class="notification">
        <button class="close-btn" @click="$emit('cerrar')">&times;</button>
        <h2>Datos ingresados:</h2>
        <p>Nombre: {{ name }} {{ lastName }}</p>
        <p>Teléfono: {{ phoneNumber }}</p>
        <p>Dirección: {{ address }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      lastName: String,
      phoneNumber: String,
      address: String,
    },
  };
</script>
  
<style scoped>
/* Contenedor general */
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

/* Notificación */
.notification {
    background: #6c63ff;
    color: #fff;
    padding: 15px 20px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    animation: slideIn 0.5s ease, fadeOut 0.5s ease 4.5s forwards;
    opacity: 1;
}

/* Botón de cerrar */
.notification .close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 15px;
    outline: none;
}
p,h2{
    background-color: #6c63ff;
}

/* Animaciones */
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeOut {
    to {
        opacity: 0;
        transform: translateX(100%);
    }
}
</style>
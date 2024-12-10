<template>
    <div>
      <h1 style="text-align: center;">Calendario</h1>
      <h2>{{ currentMonth }}</h2>
      <div class="calendar">
        <!-- Agrega espacios en blanco para los días previos al inicio del mes -->
        <div
          v-for="empty in emptyDays"
          :key="'empty-' + empty"
          class="calendar-day"
        ></div>
        
        <!-- Genera los días del mes -->
        <div
          v-for="day in daysInMonth"
          :key="day"
          :class="['calendar-day', { 'current-day': day === currentDay }]"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    data() {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth();
  
      return {
        year,
        month,
        currentMonth:new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(today),
        currentDay: today.getDate(),
        daysInMonth: new Date(year, month + 1, 0).getDate(),
        emptyDays: new Date(year, month, 1).getDay(), // Días vacíos al inicio del mes
      };
    },
  };
</script>
  
<style scoped>
    h2{
        text-transform: uppercase;
    }
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    width: 300px;
    margin: 20px auto;
    text-align: center;
  }
  
  .calendar-day {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    color: #000;
  }
  
  .current-day {
    background-color: #6c63ff;
    color: white;
    font-weight: bold;
  }
</style>
  
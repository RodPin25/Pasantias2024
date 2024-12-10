<template>
  <img alt="Vue logo" src="https://static.wixstatic.com/media/9726ef_c411753c1d2f444f9d63f94c85737f55~mv2.png/v1/fill/w_169,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9726ef_c411753c1d2f444f9d63f94c85737f55~mv2.png">
  <HelloWorld msg="Hola ing, bienvenido"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
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
}
</style>

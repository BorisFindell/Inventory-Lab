<template>
  <div id="app">
    <div>
        <Nav></Nav>
    </div>
    <div>
        <router-view/>
    </div>
  </div>


</template>




<script>

import Nav from './components/Nav.vue'


export default {
  name: 'App',
  components: { Nav }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/vendes-comp-bg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

</style>

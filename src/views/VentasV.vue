<template>
  <div class="cont" >
    <Nav></Nav>
    <Ventas></Ventas>
  </div>
</template>

<script>
// @ is an alias to /src

import Ventas from '../components/Ventas'
import Nav from '../components/Nav.vue'


export default {

  name: 'VentasV',
  components: { Ventas, Nav }
}
</script>

<style scoped>
</style>
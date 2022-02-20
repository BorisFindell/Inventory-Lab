<template>
  <div class="cont" >
    <Nav></Nav>
    <br>
    <Ventas></Ventas>
  </div>
</template>

<script>
// @ is an alias to /src

import Ventas from '../components/Ventas'
import Nav from '../components/Nav'


export default {

  name: 'VentasV',
  components: { Ventas, Nav }
}
</script>

<style scoped>
  .cont {
    background-color: rgb(241, 231, 201);
  }
</style>
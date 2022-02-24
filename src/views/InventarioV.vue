<template>
  <div>
    <Nav></Nav>
    <div class="inventari-cont">
      <Inventario></Inventario>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Inventario from '../components/Inventario'
import Nav from '../components/Nav.vue'


export default {

  name: 'InventarioV',
  components: { Inventario, Nav }
}
</script>


<style scoped>
  .inventari-cont {
    height: 100vh;
    margin-top: 3%;
  }
</style>
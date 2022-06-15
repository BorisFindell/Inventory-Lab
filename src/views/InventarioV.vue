<template>
  <div class="cont-gral">
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
  data() {
    return {
    
    }
  },
  components: { Inventario, Nav }
}
</script>


<style scoped>
  .inventari-cont {
    margin-top: 3%;
    
  }

  .cont-gral {
    background-color: azure;
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    height: 100vh;
    max-height: 100vh;
    overflow:auto;
  }
</style>
<template>
  <div class="inventari-cont">
    <Inventario></Inventario>
  </div>
</template>

<script>
// @ is an alias to /src

import Inventario from '../components/Inventario'

export default {

  name: 'InventarioV',
  components: { Inventario }
}
</script>


<style scoped>
  .inventari-cont {
    height: 100vh;
    margin-top: 3%;
  }
</style>
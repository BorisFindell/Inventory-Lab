<template>
  <div class="cont-gral" >
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

  data() {
    return {
        
    }
  },


  components: { Ventas, Nav }
}
</script>

<style scoped>

.cont-gral {
    height: 100vh;
    background-color: azure;
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    max-height: 100vh;
    overflow:auto;
}

</style>
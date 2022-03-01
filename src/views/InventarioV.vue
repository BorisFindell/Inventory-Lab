<template>
  <div class="cont-gral">
    <Nav :color="bgc" :logo="logoInv" :textLoginColor="textColor"></Nav>
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
        bgc: {
          backgroundColor: '#495371'
        },
        logoInv: require("../assets/logo.png"),
        textColor: 'text-light'
    }
  },
  components: { Inventario, Nav }
}
</script>


<style scoped>
  .inventari-cont {
    height: 100vh;
    margin-top: 3%;
    
  }

  .cont-gral {
    height: 100vh;
    background-image: url('../assets/vendes-comp-bg.jpeg');
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    height: max-content;
    max-height: 100vh;
    overflow:auto;
  }
</style>
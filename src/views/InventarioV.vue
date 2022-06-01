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
    margin-top: 3%;
    
  }

  .cont-gral {
    background-image: url('../assets/general-bg.jpeg');
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    height: 100vh;
    max-height: 100vh;
    overflow:auto;
  }
</style>
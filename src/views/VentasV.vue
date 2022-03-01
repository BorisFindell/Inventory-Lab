<template>
  <div class="cont-gral" >
    <Nav :color="bgc" :logo="logoVent" :textLoginColor="textColor"></Nav>
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
        bgc: {
          backgroundColor: '#E8E8A6'
        },
        logoVent: require("../assets/logoblack.png"),
        textColor: 'text-dark'
        
    }
  },


  components: { Ventas, Nav }
}
</script>

<style scoped>

.cont-gral {
    height: 100vh;
    background-image: url('../assets/vendes-comp-bg.jpeg');
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    max-height: 100vh;
    overflow:auto;
}

</style>
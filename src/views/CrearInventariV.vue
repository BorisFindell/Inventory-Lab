<template>
  <div class="cont-gral">
    <Nav :color="bgc" :logo="logoReg" :textLoginColor="textColor"></Nav>
    <CrearInventari></CrearInventari>
  </div>
</template>

<script>
// @ is an alias to /src

import CrearInventari from '../components/CrearInventari.vue'
import Nav from '../components/Nav.vue'


export default {

  name: 'CrearInventariV',
  components: { CrearInventari, Nav },
    data() {
      return {
        bgc: {
            backgroundColor: '#495371'
        },
        logoReg: require("../assets/logo.png"),
        textColor: 'text-light'
          
      }
  },
}
</script>


<style scoped>
  .cont-gral {
    height: 100%;
    background-image: url('../assets/general-bg.jpeg');
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    max-height: 100vh;
    overflow:auto;
  }
</style>
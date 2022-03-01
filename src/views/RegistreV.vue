<template>
  <div class="cont-gral">
    <Nav :color="bgc" :logo="logoReg" :textLoginColor="textColor"></Nav>
    <Registre></Registre>
  </div>
</template>

<script>
// @ is an alias to /src

import Registre from '../components/Registre'
import Nav from '../components/Nav.vue'


export default {

  name: 'RegistreV',
  components: { Registre, Nav },
    data() {
      return {
          bgc: {
            backgroundColor: '#C1F4C5'
          },
          logoReg: require("../assets/logoblack.png"),
          textColor: 'text-dark'
          
      }
  },
}
</script>


<style scoped>
  .cont-gral {
    height: 100%;
    background-image: url('../assets/vendes-comp-bg.jpeg');
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    max-height: 100vh;
    overflow:auto;
  }
</style>
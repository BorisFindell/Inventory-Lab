<template>
  <div class="cont-gral">
    <Nav></Nav>
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
          
      }
  },
}
</script>


<style scoped>
  .cont-gral {
    height: 100%;
    background-color: azure;
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    max-height: 100vh;
    overflow:auto;
  }
</style>
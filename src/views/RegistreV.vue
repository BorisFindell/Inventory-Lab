<template>
  <div>
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
  components: { Registre, Nav }
}
</script>
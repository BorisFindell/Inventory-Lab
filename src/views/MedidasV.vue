<template>
  <div>
    <Nav></Nav>
    <Medidas></Medidas>
  </div>
</template>

<script>
// @ is an alias to /src

import Medidas from '../components/Medidas'
import Nav from '../components/Nav.vue'


export default {

  name: 'MedidasV',
  components: { Medidas, Nav }
}
</script>
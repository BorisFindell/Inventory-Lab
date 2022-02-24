<template>
  <div class="home-cont">
    <Nav></Nav>
    <Home></Home>
  </div>
</template>

<script>
// @ is an alias to /src

import Home from '../components/Home'
import Nav from '../components/Nav.vue'

export default {

  name: 'HomeV',
  components: { Home, Nav}
}
</script>

<style scoped>
  .home-cont {
    height: 100vh;
}
</style>
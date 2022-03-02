<template>
  <div class="home-cont">
    <Nav :color="bgc" :logo="logoHome" :textLoginColor="textColor"></Nav>
    <Home></Home>
  </div>
</template>

<script>
// @ is an alias to /src

import Home from '../components/Home'
import Nav from '../components/Nav.vue'

export default {

  name: 'HomeV',
  data() {
    return {
        bgc: {
          backgroundColor: '#D82148'
        },
        logoHome: require("../assets/logo.png"),
        textColor: 'text-light'

    }
  },
  
  components: { Home, Nav}
}
</script>

<style scoped>
  .home-cont {
    height: 100vh;
    background-image: url('../assets/general-bg.jpeg');
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    height: max-content;
    max-height: 100vh;
    overflow:auto;
}
</style>
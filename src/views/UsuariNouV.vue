<template>
  <div class="cont-gral">
    <UsuariNou></UsuariNou>
  </div>
</template>

<script>
// @ is an alias to /src

import UsuariNou from '../components/UsuariNou'

export default {

  name: 'UsuariNouV',
  components: { UsuariNou }
}
</script>

<style scoped>

  .cont-gral {
    height: 100vh;
    background-image: url('../assets/usuariNou-bg.jpeg');
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    max-height: 100vh;
    overflow:auto;
  }
</style>
<template>
  <div class="cont-gral">
    <LogInPage></LogInPage>
  </div>
</template>

<script>
// @ is an alias to /src

import LogInPage from '../components/LogInPage'

export default {

  name: 'LogInPageV',
  components: { LogInPage },

  //ELIMINA "USER" DEL LOCALSTORAGE PARA QUE SE LIMPIE CUANDO SE CIERRE EL NAVEGADOR O LA PESTAÑA

  mounted() {
    window.localStorage.removeItem("user")
  },
}

</script>

<style scoped>
  .cont-gral {
    height: 100vh;
    background-image: url('../assets/login-bg.jpeg');
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    height: max-content;
    max-height: 100vh;
    overflow:auto;
  }
</style>
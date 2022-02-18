<template>
  <div id="app">
      <div class="login-wrapp">
        <LogInPage>
        </LogInPage>
       
      </div>
       <!-- <HomeV></HomeV> -->
  </div>


</template>

<script>

import LogInPage from './components/LogInPage.vue'


export default {
  name: 'App',
  components: {
    LogInPage
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  
}

</style>

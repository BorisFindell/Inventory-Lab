<template>
  <div class="logInCont">
    <LogInPage></LogInPage>
  </div>
</template>

<script>
// @ is an alias to /src

import LogInPage from '../components/LogInPage'

export default {

  name: 'LogInPageV',
  components: { LogInPage }
}
</script>

<style scoped>
  .logInCont {
    height: 100vh;
  }
</style>
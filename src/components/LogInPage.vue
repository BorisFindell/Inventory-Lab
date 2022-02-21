<template>
    <div class="container-gral">
        
      <div class="row justify-content-center" >
          <div class="contLG border rounded justify-content-center shadow rounded">
          
              <b-form-group
                  class="w-75 m-auto py-4"
                  id="fieldset-1"
                  label="Ingesa tus datos"
                  label-for="input-1"
                  valid-feedback="¡Perfecto!"
                  :invalid-feedback="invalidFeedback"
                  :state="state"
              >
                  <b-form-input class="mb-3" id="input-1" type="text" v-model="name" :state="state" trim></b-form-input>
                  <b-form-input id="input-2" type="password" v-model="password" :state="state" trim></b-form-input>
              </b-form-group>
                  
              <button type="button" class="btn btn-success btn-sm shadow rounded mb-3">Aceptar</button>
              <hr>
              <div class="registro-cont">
                <h6 class="reg-text" >¿No tens un compte?</h6>
              <router-link to="/UsuariNouV" class="btn btn-outline-danger btn-sm mb-3" tag="button" >¡Registra't!</router-link>
              </div>
              <router-link to="/HomeV" class="btn btn-sm btn-danger" tag="button" ></router-link>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        computed: {
      state() {
        return this.name.length >= 5
      },
      invalidFeedback() {
        if (this.name.length > 0) {
          return 'Mínimo 5 caracteres.'
        }
        return 'Este campo no puede quedar vacío .'
      }
    },
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {

    }
        
    }
</script>

<style scoped>

.container-gral {
  height: 100vh;
  background-image: url("../assets/login-bg.jpeg");

  /* Add the blur effect */
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  /* Full height */

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* .home-wrapp {
  height: 100vh;
  background-image: url("assets/pexels-quang-nguyen-vinh-2166456.jpeg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */

.contLG {
    width: 50%;
    padding: 60px 30px;
    margin-top: 10%;
    background-color: rgb(241, 252, 213, .8);
}

</style>
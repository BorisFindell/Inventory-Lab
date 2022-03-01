<template>
    <div class="container-gral">
        
      <div class="row justify-content-center" >
          <div class="contLG border rounded justify-content-center shadow rounded">

              <!-- USERNAME -->

              <b-form-group class="h5 mb-4 text-dark mx-auto" 
              id="input-group-5"
              label="Nom d'usuari: "
              label-cols-lg="3"
              label-for="input-5" >
                <b-form-input
                  id="input-5"
                  v-model="$v.form.name.$model"
                  :state="validateState('name')"
                  placeholder="Enter username"
                  class="py-4"
                ></b-form-input>
                <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-5-live-feedback"
                >This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
              </b-form-group>

              <!-- PASSWORD -->

              <b-form-group class="text-dark h5 mx-auto"
              id="input-group-4"
              label="Contrasenya:"
              label-cols-lg="3"
              label-for="input-4">
                <b-form-input
                  id="input-4"
                  v-model="$v.form.password.$model"
                  :state="validateState('password')"
                  type="password"
                  placeholder="Enter password"
                  class="py-4"
                  
                ></b-form-input>
                <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-4-live-feedback">This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
              </b-form-group>

              <button type="button" class="btn btn-success btn-sm shadow rounded mb-3" @click="LogIn">Aceptar</button>
              <hr>
              <div class="registro-cont">
                <h6 class="reg-text" >¿No tens un compte?</h6>
              <router-link to="/UsuariNouV" class="btn btn-outline-danger btn-sm mb-3" tag="button" >¡Registra't!</router-link>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, } from "vuelidate/lib/validators";

    export default {

    mixins: [validationMixin],
       
        data() {
          return {
            form: {
              name: '',
              password: ''
            }
          }
        },

        validations: {
          form: {
            name: {
              required,
              minLength: minLength(8)
            },
            password: {
              required,
              minLength: minLength(8)
            },
          }
        },
        created() {

          const displayNameJSON= (window.localStorage.getItem('administrator')) 
          const userObj = JSON.parse(displayNameJSON)
          if(displayNameJSON == null || userObj.password !== 'administrator'){
            const administrator = {name: 'administrator', password: 'administrator', role: 'administrator'}
            window.localStorage.setItem('administrator', JSON.stringify(administrator))
          }
        },
        
        methods: {
          LogIn(){
            this.$store.dispatch('LogIn', [this.form.name,this.form.password])
      
          },
          validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
          },

        }
    }
</script>

<style scoped>

.container-gral {
  max-width: 100%;
  height: 100vh;
  background-image: url("../assets/login-bg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.contLG {
    width: 50%;
    padding: 60px 30px;
    margin-top: 10%;
    background-color: rgb(241, 252, 213, .8);
}

</style>
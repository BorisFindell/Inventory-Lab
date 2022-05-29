<template>
  <div class="container-gral">
    <div class="alert-cont">
      <b-alert
        :show="dismissCountDown"
        class="alertBanner"
        fade
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{ errorBanner }}
      </b-alert>
      </div>

    <div class="row justify-content-center">
      <div class="contLG border rounded justify-content-center shadow rounded">
        
        <b-form @submit.stop.prevent="onSubmit">
        <!-- EMAIL -->

        <b-form-group
          class="h5 mb-4 text-dark mx-auto"
          id="input-group-5"
          label="Email: "
          label-cols-lg="3"
          label-for="input-5"
        >
       
          <b-form-input
            id="input-5"
            v-model="$v.form.email.$model"
            :state="validateState('email')"
            placeholder="Enter email"
            class="py-4"
            @blur="validationActive = true"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="!$v.form.email.required"
            class="text-dark font-weight-bold h5 text-left"
            id="input-5-live-feedback"
            >Campo requerido</b-form-invalid-feedback
          >
          <b-form-invalid-feedback
            v-if="!$v.form.email.email"
            class="text-dark font-weight-bold h5 text-left"
            id="input-5-live-feedback"
            >Formato de email incorrecto</b-form-invalid-feedback
          >
        </b-form-group>

        <!-- PASSWORD -->

        <b-form-group
          class="text-dark h5 mx-auto"
          id="input-group-4"
          label="Contrasenya:"
          label-cols-lg="3"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            type="password"
            placeholder="Enter password"
            class="py-4"
          ></b-form-input>
          <b-form-invalid-feedback
            class="text-dark font-weight-bold h5 text-left"
            id="input-4-live-feedback"
            >Campo requerido</b-form-invalid-feedback
          >
        </b-form-group>

        <button
          type="submit"
          class="btn btn-success btn-sm shadow rounded mb-3"
        >
          Aceptar
        </button>
        <hr />
        <div class="registro-cont">
          <h6 class="reg-text">¿No tens un compte?</h6>
          <router-link
            to="/UsuariNouV"
            class="btn btn-outline-danger btn-sm mb-3"
            tag="button"
            >¡Registra't!</router-link
          >
          
        </div>
        </b-form>

      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      errores: {
        password: 'El password es incorrecto',
        email: 'El email no existe en la base de datos'
      },
      errorBanner: '',
      validationActive: false
      

      
    };
  },

  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
      },
    },
  },

  

  methods: {
    LogIn() {
        this.$store.dispatch("LogIn", {
          email: this.form.email,
          password: this.form.password,
        }, this.showAlert())
        
    },
    
    validateState(name) {
      if (this.validationActive === true) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
      }
    },

    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      else if (!this.$v.form.$anyError) {
        return this.LogIn()
        
      }

    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    showAlert(error) {
      if (error == this.passErr) {
          this.errorBanner = this.errores.password
      }
      else if (error == this.emailErr) {
          this.errorBanner = this.errores.email
      }
      this.dismissCountDown = this.dismissSecs
    },
    pickError(num) {
      if (num == 1) {
          this.errorBanner = this.errores.passErr

      }
    }

  },
    
};
</script>

<style scoped>
.container-gral {
  max-width: 100%;
  height: 100vh;
}

.contLG {
  width: 50%;
  padding: 60px 30px;
  margin-top: 15px;
  background-color: rgb(241, 252, 213, 0.8);
}

.alertBanner{
  width: fit-content;
  margin: auto;
}

.alert-cont {
  height: 50px
}
</style>

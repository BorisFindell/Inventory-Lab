<template>
  <div class="container-gral">
    <div class="alert-cont">
      <!-- <b-alert
        :show="dismissCountDown"
        class="alertBanner"
        fade
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{ errores.email }}
    </b-alert> -->
    </div>
    <div class="titol-cont p-5 border">
      <h1 class="titol">
        Formulari de registre
      </h1>
    </div>
    <div class="btn-torna-cont">
      <router-link class=" font-weight-bold btn border btn-torna" to="/"> ⇠ LOGIN </router-link>
    </div>
    <div class="form-cont mx-auto">
      <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
        
        <!-- NOM -->

        <b-form-group 
        class=" h5 mb-4 text-dark mx-auto" 
        id="input-group-1" 
        label="Nom: " 
        label-cols-lg="3"
        label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="$v.form.name.$model"
            :state="validateState('name')"
            placeholder="Enter name"
            class="py-4"
            @blur="validationActive = true"
          ></b-form-input>
          <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        
        <!-- EMAIL -->

        <b-form-group class="h5 mb-4 text-dark mx-auto"
          id="input-group-3"
          label="Email:"
          label-cols-lg="3"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
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
            @blur="validationActive = true"
          ></b-form-input>
          <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-4-live-feedback">This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
        </b-form-group>

        <!-- TERMS AND COND -->
          
        <b-form-checkbox 
          v-model="form.checked"
          class="text-dark font-weight-bold h5 mr-3 accept-txt" value="acept">Subscribe to our newsletter</b-form-checkbox>

        <!-- BUTTONS -->

        <b-button class="mx-2 my-4" type="submit" variant="primary">Submit</b-button>
        <b-button class="mx-2 my-4" type="reset" variant="danger">Reset</b-button>

      </b-form>
    </div>
    <div>
      <b-modal id="modal-error" centered title="Email incorrecto" header-bg-variant="warning">
        <template #modal-header>
          <!-- Emulate built in modal header close button action -->
          <h5>Error</h5>
        </template>
        <pre class="my-4 error-modal">{{ errores.email }}</pre>
        <template #modal-footer>
          <div class="w-100">
            <p class="float-left"></p>
            <b-button
              variant="danger"
              size="sm"
              class="float-right"
              @click="closeModal()"
              
            >
              Close
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>

import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
  
  export default {
    mixins: [validationMixin],
    data() {
      return {
        form: {
          name:'',
          email: '',
          password: '',
          checked: [],
        },
        // dismissSecs: 5,
        // dismissCountDown: 0,
        errores: {
          email: 'Ups...¡El email ya existe en la base de datos! \n\nEscoge uno nuevo y vuelve a intentarlo'
        },
        show: true,
        validationActive: false
      }
    },
    validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
    }
  },
    methods: {
      
      validateState(name) {
        if (this.validationActive === true) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
        }
      },
      // countDownChanged(dismissCountDown) {
      //   this.dismissCountDown = dismissCountDown
      // },

      showModal() {
        this.$bvModal.show('modal-error');
      },

      closeModal() {
        this.$bvModal.hide('modal-error')
      },
      
      //VER COMPROBACIÓN DE USUSARIO EXISTENTE CON AGUS

      onSubmit() {
        
        this.$v.form.$touch();
          if (this.$v.form.$anyError) {
          return;
        }
          else {
        
            const newUser ={
              name:this.form.name,
              email:this.form.email,
              password: this.form.password,
              role: 'admin'
            }
          
            this.$store.dispatch('createUser', {newUser: newUser, showModal: this.showModal})
          }

      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.checked = []
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.validationActive = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

.container-gral {
  margin-top: 2%;
}

.form-cont {
    width: 60%;
    height: 100%;
    padding-top: 50px;
    background-color: rgb(185, 211, 211, .8);
    margin-top: 2%;

}

.form-group {
  width: 70%;
}

.titol-cont {
  background-color: rgb(255, 255, 255, 0.8);
}

.titol {
  color: rgb(107, 48, 30);
}

.btn-torna-cont{
  display: flex;
  justify-content: center;
  font-size: 1rem;
  padding: 20px;
}

.btn-torna {
  background-color: rgba(233, 149, 149, 0.9);
  color: rgb(107, 48, 30);
}

.alertBanner{
  width: fit-content;
  margin: auto;
}

.alert-cont {
  height: 50px
}

.error-modal {
  font-family: monospace;
  font-size: 1rem;
  text-align: center;
}

</style>
<template>
  <div class="container-gral">
    <div class="titol-cont p-5 border">
      <h1 class="titol">
        Formulari de registre
      </h1>
    </div>
    <div class="btn-torna">
      <router-link class="text-light btn border" to="/"> Tornar al Log In </router-link>
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
          ></b-form-input>
          <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- COGNOM -->

        <b-form-group class="h5 mb-4 text-dark mx-auto" 
        id="input-group-2" 
        label="Cognom:" 
        label-cols-lg="3"
        label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="$v.form.cog.$model"
            :state="validateState('cog')"
            placeholder="Enter last name"
            class="py-4"
          ></b-form-input>
          <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
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
            type="email"
            placeholder="Enter email"
            class="py-4"
          ></b-form-input>
          <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-3-live-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- USERNAME -->

        <b-form-group class="h5 mb-4 text-dark mx-auto" 
        id="input-group-5"
        label="Nom d'usuari: "
        label-cols-lg="3"
        label-for="input-5" >
          <b-form-input
            id="input-5"
            v-model="$v.form.username.$model"
            :state="validateState('username')"
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

        <!-- TERMS AND COND -->
          
        <b-form-checkbox 
          v-model="$v.form.checked.$model"
          :state="validateState('checked')"
          class="text-dark font-weight-bold h5 mr-3 accept-txt" value="acept">Accept terms and conditions</b-form-checkbox>

        <!-- BUTTONS -->

        <b-button class="mx-2 my-4" type="submit" variant="primary">Submit</b-button>
        <b-button class="mx-2 my-4" type="reset" variant="danger">Reset</b-button>

      </b-form>
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
          name:'',
          cog: '',
          email: '',
          password: '',
          username: '',
          checked: [],
        },
        show: true
      }
    },
    validations: {
    form: {
      name: {
        required
      },
      cog: {
        required
      },
      email: {
        required,
      },
      password: {
        required,
        minLength: minLength(8)
      },
      username: {
        required,
        minLength: minLength(8)
      },
      checked: {
        required
      }
    }
  },
    methods: {
      
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      },
      
      onSubmit() {
        const key = this.form.username
        const userEx = (window.localStorage.getItem(key) !==null)
        if(userEx){
          alert("¡El usuario ya existe!")
        }

        
        this.$v.form.$touch();
          if (this.$v.form.$anyError) {
          return;
        }
        
        else{
        const newUser ={
          name:this.form.name,
          cog:this.form.cog,
          email:this.form.email,
          username:this.form.username,
          password: this.form.password
        
        }
          
        window.localStorage.setItem(key, JSON.stringify(newUser))
        alert('¡Nuevo usuario registrado!')
        this.$router.push('/')
        }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.checked = []
        this.form.cog = ''
        this.form.username = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
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
    height: 100vh;
    padding-top: 50px;
    background-color: rgb(185, 211, 211, .5);
    margin-top: 2%;

}
.form-group {
  width: 70%;
}

.titol-cont {
  background-color: rgb(255, 255, 255, 0.3);
}

.titol {
  color: rgb(107, 48, 30);
}

.btn-torna{
  display: flex;
  justify-content: flex-start;
  font-size: 1rem;
  padding: 20px;
}

</style>
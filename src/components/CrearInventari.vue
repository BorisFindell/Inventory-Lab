<template>
  <b-container fluid class="d-flex justify-content-center container-gral">

    
    <b-form class="inputs">
      <b-form-group
      label="Producto">

        <b-form-input 
        v-model="name" 
        placeholder="Enter your product"
        ></b-form-input>
      </b-form-group>
        <!-- <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback> -->
<!-- :state="validateState('name')" -->
        <div class="d-flex">
          <p>Categoría</p>
          <b-form-input v-model="prop" placeholder="Enter your name"></b-form-input>
          <p>Propiedad</p>
          <b-form-input v-model="option" placeholder="Enter your name"></b-form-input>
          <b-button class="btn success btn-sm" @click="addMore">Agregar otra propiedad</b-button>
        </div>

        <button @click="submit" type="submit" >Add</button>
        {{this.$store.state.nouItem}}
    </b-form>

  </b-container>
</template>

<script>

// import { validationMixin } from "vuelidate";
// import { required } from "vuelidate/lib/validators";

  export default {
    name: 'CrearInventari',
    // mixins: [validationMixin],
    data() {
      return {
        name: '',
        prop: '',
        option: ''
      }
    },
    // validations: {
    //   name: {
    //     required
    //   }
    // },
    methods: {
      // validateState(name) {
      //   const { $dirty, $error } = this.$v[name];
      //   return $dirty ? !$error : null;
      // },
        submit() {

        // this.$v.$touch();
        //   if (this.$v.form.$anyError) {
        //   return;
        // }
        
        // else{
        
          this.$store.state.nouItem.name = this.name
          if (this.prop != '' && this.option != '')
          this.$store.state.nouItem[this.prop] = this.option
                  
          this.$store.dispatch('addItem')

          this.name = ''
          this.prop = ''
          this.option = ''

        
        },
        addMore() {
          this.$store.state.nouItem.name = this.name
          if (this.prop != '' && this.option != '')
          this.$store.state.nouItem[this.prop] = this.option

          this.prop = ''
          this.option = ''
          
        }
    }
  }
</script>


<style scoped>

.container-gral {
    margin: auto;
    margin-top: 2%;
    height: 100vh;
    display: inline-flex
}

.inputs {
    width: 60%;
}


</style>


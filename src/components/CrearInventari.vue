<template>
  <b-container fluid class="d-flex justify-content-center mt-5 container-gral">
    <b-form class="w-75 d-grid">
      <div class="row justify-content-center">
        <div class="col-4">   
          <!-- Agregar Producto -->
          <b-form-group class="form-inline">
            <b-label class="mr-3 h5">Producto:</b-label>
            <b-form-input
            id="name"
            v-model="$v.name.$model"
            placeholder="Nombre del producto"
            :state="validateState('name')"
            aria-describedby="name"
            ></b-form-input>
          <b-form-invalid-feedback class="text-dark font-weight-bold" id="name">Este campo no puede quedar en blanco.</b-form-invalid-feedback>

          </b-form-group>
        </div>

        <div class="col-4">   
          <!-- Agregar Stock Inicial -->
          <b-form-group class="form-inline">
            <b-label class="mr-3 h5">Stock inicial:</b-label>
            <b-form-input 
            v-model="stock" 
            type="number"
            ></b-form-input>
          </b-form-group>
        </div>    
      </div>

      <div class="row">

      <div class="col">
      <!-- Tabla para agregar propiedades -->
        <table class="table border shadow tableProps">
            <thead>
                <tr>
                    <td class="text-light"><strong>Propiedad</strong></td>
                    <td class="text-light"><strong>Opciones</strong></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index">

                    <td><b-form-input type="text" v-model="row.prop"></b-form-input></td>
                    <td><b-form-input type="text" v-model="row.option"></b-form-input></td>

                    <!-- AGREGAR ARCHIVO COMENTADO PARA USAR MÁS ADELANTE CON UNA FOTO DEL PRODUCTO -->

                    <!-- <td>
                        <label class="fileContainer">
                            {{row.file.name}}
                            <input type="file" @change="setFilename($event, row)" :id="index">
                        </label>
                    </td> -->
                    <td>
                        <b-button variant="danger" v-on:click="removeElement(index);" style="cursor: pointer">Borrar</b-button>
                    </td>


                </tr>
            </tbody>
            
            
        </table>
            <div>
              <b-button variant="warning" @click="addRow">Agregar</b-button>
            </div>
            <div class="d-flex justify-content-end">
              <b-button variant="success" class="border border-dark" @click="submit">Guardar</b-button>
            </div>
      </div>
      </div>

    
    </b-form>
    
  </b-container>
</template>

<script type="text/javascript">

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

  export default {


name: 'CrearInventari',
    mixins: [validationMixin],

  data() {
    return {
      rows: [
        {
          prop:'',
          option: ''
        }
      ],
      name: '',
      stock: null
    }

  },

  validations: {
    name: {
      required
    }
  },

  methods: {

      validateState(name) {
        const { $dirty, $error } = this.$v[name];
        return $dirty ? !$error : null;
      },

      addRow() {
          this.rows.push({
              prop: '',
              option: ''

              //PARA AGREGAR ARCHIVOS EN UN FUTURO

              // file: {
              //     fileName: 'Choose File'
              // }
          });
          
      },
      removeElement: function(index) {
          this.rows.splice(index, 1);
      },

      

      //PARA AGREGAR ARCHIVOS EN UN FUTURO

      // setFilename: function(event, row) {
      //     var file = event.target.files[0];
      //     row.file = file
      // },
      submit() {

        this.$v.$touch();
        if (this.$v.$anyError) {
          return;
        }
        alert("Form submitted!");

        this.$store.state.nouItem.name = this.name
        this.$store.state.nouItem.stock = this.stock
        this.$store.state.nouItem.custom = {}

        for (let i = 0; i < this.rows.length; i++) {
          if (this.rows[i].prop != '' && this.rows[i].option != '')
            this.$store.state.nouItem.custom[this.rows[i].prop] = this.rows[i].option
        }

        this.$store.dispatch('addItem')

        this.name = ''
        this.rows = []
        this.stock = ''
        // this.$store.state.nouItem = {}


      }

  }
}
 
</script>


<style scoped>

.container-gral {
    margin: auto;
    margin-top: 2%;
    height: 100vh;
    
}

/* label {
  display: inline-block;
  text-align: right;
} */


.btn-submit {
    margin-top: 15px;
    background-color: rgb(30, 114, 27);
}

.tableProps {
  background-color: #495371b4
}

</style>


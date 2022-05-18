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
        <table class="table border shadow-lg tableProps">

            <thead>
                <tr>
                    <td class="text-light"><strong>Propiedad</strong></td>
                    <td class="text-light"><strong>Opciones</strong></td>
                    <td></td>
                </tr>
            </thead>

            <tbody name="fade" is="transition-group">
                
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
                          <b-button variant="danger" class="border" @click="removeElement(index)" style="cursor: pointer">Borrar</b-button>
                      </td>
                    </tr>
                    
                
            </tbody>
            
            
        </table>

            <div>
              <b-button variant="info" class="shadow-sm" @click="addRow">Agregar</b-button>
            </div>
            <div class="d-flex justify-content-end">
              <b-button variant="success" type="button" class="shadow-sm" @click="submit">Guardar</b-button>
            </div>
            <b-alert
              :show="dismissCountDown"
              dismissible
              fade
              variant="warning"
              @dismissed="dismissCountDown=0"
              @dismiss-count-down="countDownChanged"
              class="alertBanner"
            >
              Guardado correctamente
              
            </b-alert>
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
      stock: 0,
      dismissSecs: 4,
    }

  },

  validations: {
    name: {
      required
    },
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

      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },

      showAlert() {
        this.dismissCountDown = this.dismissSecs
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

        this.$store.state.nouItem.name = this.name
        this.$store.state.nouItem.stock = this.stock
        this.$store.state.nouItem.custom = {}

        for (let i = 0; i < this.rows.length; i++) {
          if (this.rows[i].prop != '' && this.rows[i].option != '')
            this.$store.state.nouItem.custom[this.rows[i].prop] = this.rows[i].option
        }

        this.$store.dispatch('addItem', this.$store.state.nouItem).then((response) => 
            
          { 

            
            if (response.ok) {
              this.name = '',
              this.rows = [{
                prop:'',
                option: ''
              }],
              this.stock = '',
              this.showAlert(),
              this.$v.$reset()
            }

            //MANEJAR CASOS DE ERRORES

            else if (response.status == 500)
              alert("Pass incorrecto");

            //ERROR POR DEFECTO

            else 
              alert("Problemón");

          }

        )
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.alertBanner{
  width: fit-content;
  margin: auto;
}
</style>


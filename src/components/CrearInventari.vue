<template>
  <b-container fluid class="d-flex justify-content-center container-gral">
    
    <b-form class="form-cont d-grid">
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
                    
                      <!-- <td><b-form-input type="text" v-model="row.prop"></b-form-input></td> -->
                      <td><vue-bootstrap-typeahead 
                        v-model="row.prop"
                        :data="propertyList"
                        :minMatchingChars=2
                      />
                      </td>
                      
                      <td><b-form-input type="text" v-model="row.option"></b-form-input></td>

                      <!-- AGREGAR ARCHIVO COMENTADO PARA USAR MÁS ADELANTE CON UNA FOTO DEL PRODUCTO -->

                      <!-- <td>
                          <label class="fileContainer">
                              {{row.file.name}}
                              <input type="file" @change="setFilename($event, row)" :id="index">
                          </label>
                      </td> -->
                      <td>
                          <b-button class="border btn-delete" @click="removeElement(index)" style="cursor: pointer">Borrar</b-button>
                      </td>
                    </tr>
                    
                
            </tbody>
            
            
        </table>
            
            <div>
              <b-button class="shadow-sm btn-add" @click="addRow">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </b-button>
            </div>
            <div class="d-flex justify-content-end">
              <b-button type="button" class="shadow-sm btn-save" @click="submit">Guardar
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                </svg>
              </b-button>
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
              {{ Banner }}
            </b-alert>
            
      </div>
      </div>

    
    </b-form>
    
  </b-container>
</template>

<script type="text/javascript">

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import VueBootstrapTypeahead from 'vue-typeahead-bootstrap'

export default {

  async mounted() {
    this.propertyList = await this.$store.getters.obtenerPropiedades
  },

  name: 'CrearInventari',
  mixins: [validationMixin],
  components: { VueBootstrapTypeahead },

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
      propertyList: '',
      dismissCountDown: 0,
      mensajes: {
        err: 'Ha ocurrido un problema. El item no se ha guardado correctamente',
        exito: 'Guardado correctamente'
      },
      Banner: ''
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

      showAlert(res) {
        if (res == 1) {
            this.Banner = this.mensajes.err
        }
        else {
          this.Banner = this.mensajes.exito
        }
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
            if (!response.ok)
              this.showAlert(1)

            else {
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

            // else if (response.status == 409)
            //   this.showAlert(409)

            //ERROR POR DEFECTO

            

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
    width: 80%
} 


.form-cont {
  width: 100%;
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

.btn-save {
  width: fit-content;
  height: fit-content;
  background-color: #72b489;

}

.btn-add {
  background-color: #94B49F;
}

.btn-delete {
  background-color: #DF7861;
  color: white;
}

.alertBanner{
  width: fit-content;
  margin: auto;
}

</style>


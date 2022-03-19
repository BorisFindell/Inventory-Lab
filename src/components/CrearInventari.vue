<template>
  <b-container fluid class="d-flex justify-content-center container-gral">
    <div class="w-75 d-flex justify-between">
      <div class="col-5">   
        <!-- Agregar Producto -->
        <b-form-group label="Producto">
          <b-form-input 
          v-model="name" 
          placeholder="Nombre del producto"
          ></b-form-input>
        </b-form-group>
        <!-- <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback> -->
<!-- :state="validateState('name')" -->
      </div>

      <div class="col-6">
      <!-- Tabla para agregar propiedades -->
        <table class="table">
            <thead>
                <tr>
                    <td><strong>Propiedad</strong></td>
                    <td><strong>Opciones</strong></td>
                    <td><strong>Eliminar</strong></td>
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
              <button class="button btn-primary" @click="addRow">Agregar nueva propiedad</button>
            </div>
            <div class="d-flex justify-content-end">
              <b-button class="btn btn-sm btn-submit" @click="submit">Agregar item</b-button>
              {{this.$store.state.nouItem}}
            </div>
      </div>
        
    </div>
    

  </b-container>
</template>

<script type="text/javascript">

// import { validationMixin } from "vuelidate";
// import { required } from "vuelidate/lib/validators";

  export default {


name: 'CrearInventari',
    // mixins: [validationMixin],

  data() {
    return {
      rows: [],
      name: ''
    }

  },
  methods: {
      addRow() {
          this.rows.push({
              prop: '',
              option: '',
              file: {
                  fileName: 'Choose File'
              }
          });
      },
      removeElement: function(index) {
          this.rows.splice(index, 1);
      },
      setFilename: function(event, row) {
          var file = event.target.files[0];
          row.file = file
      },
      submit() {
        this.$store.state.nouItem.name = this.name
        if (this.prop != '' && this.option != '')
        this.$store.state.nouItem[this.row.prop] = this.row.option
                
        // this.$store.dispatch('addItem')

        this.name = ''
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
    

}

.btn-submit {
    margin-top: 15px;
    background-color: rgb(30, 114, 27);
}

.inputs {
    width: 60%;
}


</style>


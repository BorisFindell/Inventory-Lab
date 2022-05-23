<template>
  <div>

  <b-modal id="modal1" ref="modal1" title="EDITOR" hide-header-close="true" hide-footer="true">
      
    <b-container
      fluid
      class="d-flex justify-content-center mt-5 container-gral"
    >
      <b-form>
        <div class="justify-content-center">
          <div>
            <!-- Agregar Producto -->
            <b-form-group class="form-inline">
              <b-label class="mr-3 h5">Producto:</b-label>
              <b-form-input
                id="name"
                v-model="name"
                placeholder="Nombre del producto"
                aria-describedby="name"
              ></b-form-input>
              <b-form-invalid-feedback
                class="text-dark font-weight-bold"
                id="name"
                >Este campo no puede quedar en blanco.</b-form-invalid-feedback
              >
            </b-form-group>
          </div>

          <div>
            <!-- Agregar Stock Inicial -->
            <b-form-group class="form-inline">
              <b-label class="mr-3 h5">Stock inicial:</b-label>
              <b-form-input v-model="this.$store.state.itemForEdit.stock" type="number"></b-form-input>
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
                <tr v-for="item in parsedCustom" v-bind:key="(item.id)">
                  <td>
                    <b-form-input
                    name="k"
                    type="text"
                    :value="item.key"
                    @change="updateProp($event, item.id)"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      type="text"
                      @change="updateVal($event, item.id)"
                      :value="item.value"
                    ></b-form-input>
                  </td>

                  <!-- AGREGAR ARCHIVO COMENTADO PARA USAR MÁS ADELANTE CON UNA FOTO DEL PRODUCTO -->

                  <!-- <td>
                          <label class="fileContainer">
                              {{row.file.name}}
                              <input type="file" @change="setFilename($event, row)" :id="index">
                          </label>
                      </td> -->
                  <td>
                    <b-button
                      variant="danger"
                      class="border"
                      @click="removeElement(index)"
                      style="cursor: pointer"
                      >Borrar</b-button
                    >
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              <b-button variant="info" class="shadow-sm" @click="addRow"
                >Agregar</b-button
              >
            </div>
            
          </div>
        </div>
      </b-form>
    </b-container>
    <div class="modal-footer">
      <b-button @click="editItem()" type="button" class="btn btn-primary">Guardar cambios</b-button>
      <b-button @click="$bvModal.hide('modal1'), limpiarItem()" type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</b-button>
    </div>
      <b-button @click="refactCustom()" type="button" class="btn btn-secondary" data-dismiss="modal">Prueba</b-button>

    
    </b-modal>
    
</div>

</template>

<script type="text/javascript">

export default {
  name: "modalEditProd",

  data() {
    return {
    };
  },

  computed: {
    name: {
      get() {
        return this.$store.state.itemForEdit.name
      },

      set(newName) {
        this.$store.state.itemForEdit.name = newName
      }
      
    },
    stock: {
      get() {
        return this.$store.state.itemForEdit.stock
      },

      set(newStock) {
        this.$store.state.itemForEdit.stock = newStock
      }
      
    },
    parsedCustom: {
      get() {
        return this.$store.state.itemForEdit.parsedCustom
      },
    },
  },
  
  methods: {

    updateProp(value,id) {
      const item = this.$store.state.itemForEdit.parsedCustom.find((item)=>item.id === id)
      item.key = value
      
    },

    updateVal(value, id) {
      const item = this.$store.state.itemForEdit.parsedCustom.find((item)=>item.id === id)
      item.value = value
    },

    // funcion que pase custom de objeto a array de objetos que sea prop = propiedad y option = opcion
    //PARA AGREGAR ARCHIVOS EN UN FUTURO

            // file: {
            //     fileName: 'Choose File'
            // }

    addRow() {
      this.$store.state.itemForEdit.parsedCustom.push({id: this.$store.state.itemForEdit.parsedCustom.length, key:"", value:""})
      const item = Object.assign({}, this.$store.state.itemForEdit)
      this.$store.dispatch("storeItemEdit", item);
    },

    removeElement: function (index) {
      this.rows.splice(index, 1);
    },

    limpiarItem() {
      this.$store.state.itemForEdit = {}
    },

    
    

    // editItemWithId(itemId) {
    //   this.$store
    //     .dispatch("editItemWithId", itemId)
    //     .then((response) => {
    //       if (response.ok) {
    //         (this.name = ""),
    //           (this.rows = [
    //             {
    //               prop: "",
    //               option: "",
    //             },
    //           ]),
    //           (this.stock = ""),
    //           this.showAlert(),
    //           this.$v.$reset();
    //       }

    //       //MANEJAR CASOS DE ERRORES
    //       else if (response.status == 500) alert("Pass incorrecto");
    //       //ERROR POR DEFECTO
    //       else alert("Problemón");
    //     });
    // },
    // }

    //PARA AGREGAR ARCHIVOS EN UN FUTURO

    // setFilename: function(event, row) {
    //     var file = event.target.files[0];
    //     row.file = file
    // },
    // submit() {
      
    //   this.$store.state.nouItem.name = this.name;
    //   this.$store.state.nouItem.stock = this.stock;
    //   this.$store.state.nouItem.custom = {};

    //   for (let i = 0; i < this.rows.length; i++) {
    //     if (this.rows[i].prop != "" && this.rows[i].option != "")
    //       this.$store.state.nouItem.custom[this.rows[i].prop] =
    //         this.rows[i].option;
    //   }

    //   this.$store
    //     .dispatch("addItem", this.$store.state.nouItem)
    //     .then((response) => {
    //       if (response.ok) {
    //         (this.name = ""),
    //           (this.rows = [
    //             {
    //               prop: "",
    //               option: "",
    //             },
    //           ]),
    //           (this.stock = ""),
    //           this.showAlert(),
    //           this.$v.$reset();
    //       }

    //       //MANEJAR CASOS DE ERRORES
    //       else if (response.status == 500) alert("Pass incorrecto");
    //       //ERROR POR DEFECTO
    //       else alert("Problemón");
    //     });
    // },
  },
};
</script>

<style scoped>
.container-gral {
  margin: auto;
  margin-bottom: 20px;
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
  background-color: #495371b4;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.alertBanner {
  width: fit-content;
  margin: auto;
}

</style>

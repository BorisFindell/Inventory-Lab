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
              <b-form-input v-model="stock" type="number"></b-form-input>
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
                  <td class="text-light text-center"><strong>Opciones</strong></td>
                  <td></td>
                </tr>
              </thead>

              <tbody name="fade" is="transition-group">
                 <tr v-for="(v, k) in custom" :key="(v, k)">
                  <td class="props-elem">
                    <b-label class="h5 text-white propert">{{k}}:</b-label>
                  </td>
                  <td>
                    <b-form-input
                      type="text"
                      @change="updateVal($event, k)"
                      :value="v"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-button
                      variant="danger"
                      class="border"
                      @click="removeElement(k)"
                      style="cursor: pointer"
                      >Borrar</b-button
                    >
                  </td>
                </tr>

                <tr v-for="(row, index) in rows" :key="index">
                  <td><b-form-input type="text" v-model="row.prop"></b-form-input></td>
                  <td><b-form-input type="text" v-model="row.option"></b-form-input></td>
                  <td>
                      <b-button variant="danger" class="border" @click="removeRow(index)" style="cursor: pointer">Borrar</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="agregarProp-btn-cont">
              <b-button variant="info" class="shadow-sm" @click="addRow"
                >Agregar propiedad</b-button
              >
            </div>
            
          </div>
        </div>
      </b-form>
    </b-container>
    <div class="modal-footer">
      <b-button @click="editItem()" type="button" class="btn btn-success">Guardar cambios</b-button>
      <b-button @click="close()" type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</b-button>
    </div>
  </b-modal>
    
</div>

</template>

<script type="text/javascript">

export default {
  name: "modalEditProd",

  data() {
    return {
      rows: [
      ]
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
    custom: {
      get() {
        return this.$store.state.itemForEdit.custom
      },
    },
    newCustomProperties: {
      get() {
        return this.$store.state.itemForEdit.newCustomProperties
      },
    }
  },
  
  methods: {

    updateVal(value, k) {
      this.$store.state.itemForEdit.custom[k] = value
    },

    addRow() {
      this.rows.push({
          prop: '',
          option: ''
      }); 
    },

    removeRow: function(index) {
      this.rows.splice(index, 1);
    },

    removeElement: function (k) {
      delete this.$store.state.itemForEdit.custom[k]
      this.refresh();
    },

    editItem(){
      for (let row of this.rows){
        this.$store.state.itemForEdit.custom[row.prop]=row.option
      }
      this.$store.dispatch("editItem");
      this.reset();
      this.close();
    },

    close(){
      this.$bvModal.hide('modal1');
      this.$store.state.itemForEdit = {}
    },

    reset(){
      this.rows = []
    },

    refresh(){
      const item = Object.assign({}, this.$store.state.itemForEdit);
      this.$store.dispatch("storeItemEdit", item);
    }
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

.props-elem  {
  padding: 1rem;
}

.propert {
  text-align: center;
}

.agregarProp-btn-cont {
  display: flex;
  justify-content: space-evenly;
}

</style>

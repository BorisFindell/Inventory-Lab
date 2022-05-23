<template>
  <div container-gral>
    <div tabla-cont>
      <table class="table table-striped">
        <thead>
          <th class="table-head table-style" scope="col">Producto</th>
          <th class="table-head table-style" scope="col">Propiedades</th>
          <th class="table-head table-style" scope="col">Cantidad</th>
          <th
            class="table-head table-style"
            v-if="$store.state.userObj.role === 'admin'"
            scope="col"
          >
            Hacer
          </th>
          <th class="transparent-cells" scope="col"></th>
          <th class="transparent-cells" scope="col"></th>
        </thead>
        <tbody class="table-style">
          <tr v-for="item in $store.state.items" :key="item.id">
            <td class="table-style">
              {{ item.name }}
            </td>
            <td class="table-style-props">
              <table class="table-props">
                <tr v-for="(v, k) in item.custom" :key="(v, k)">
                  {{ k + ": " + v }}
                </tr>
              </table>
            </td>
            <td class="table-style">
              {{ item.stock }}
            </td>
            <td
              class="table-style"
              v-if="$store.state.userObj.role === 'admin'"
            >
              <input
                type="number"
                v-model="item.todo"
                @blur="setTodo(item.id)"
              />
            </td>
            <td class="table-style">
              <b-button class="btn-edit btn-sm" @click="openModal(item)" v-b-modal.modal-prevent-closing
                >Editar item</b-button
              >
            </td>
            <td class="table-style">
              <b-button
                @click="deleteItem(item.id)"
                class="btn btn-delete btn-sm"
                >Eliminar</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>

      <div class="btn-cont">
        <b-button
          type="button"
          v-if="$store.state.userObj.role === 'admin'"
          @click="resoldreTot()"
          class="btn btn-resolve"
          >Resoldre tot</b-button
        >
      </div>
    </div>

    <!-- MODAL -->


      <modalEditProd id="modal1" title="MODAL"></modalEditProd>

    <!-- END OF MODAL -->


  </div>
</template>

<script>

import modalEditProd from '../components/modalEditProd.vue'

export default {
  name: "Inventario",
  components: { modalEditProd },
  mounted() {
    this.$store.dispatch("obtenirItems");
  },
  data() {
    return {
      num: [],
    };
  },

  methods: {
    openModal(item){
      this.itemToEdit = item;
      this.itemToEdit.parsedCustom = []
      let index = 0;
      for (let prop of Object.keys(this.itemToEdit.custom)){
        const aux = {id:index, key: prop, value: this.itemToEdit.custom[prop]}
        this.itemToEdit.parsedCustom.push(aux)
        index ++
      }
      this.$store.dispatch("storeItemEdit", item);
      this.$bvModal.show('modal1');
    },

    setTodo(itemId) {
      const storeItem = this.$store.state.items.find((el) => el.id == itemId);
      this.$store.dispatch("saveTodo", {
        id: itemId,
        payload: { todo: storeItem.todo },
      });
    },
    resoldreTot() {
      this.$store.dispatch("resoldreTot");
      this.$store.dispatch("obtenirItems");
    },

    deleteItem(id) {
      this.$store.dispatch("deleteItem", id);
    },

    storeItemEdit(id) {
      this.$store.dispatch("storeItemEdit", id);
    },

  },
};
</script>

<style scoped>
.table {
  width: 75%;
  margin: auto;
  vertical-align: baseline;
}

.table-style {
  border: 1px solid black;
  margin: auto;
  background-color: rgba(243, 249, 153, 0.794);
}

.table-head {
  background-color: rgb(219, 191, 50);
}

.btn-cont {
  width: 75%;
  display: flex;
  justify-content: right;
  margin: auto;
  margin-top: 20px;
}

.btn-delete {
  background-color: rgb(173, 49, 49);
  color: white;
}

.btn-edit {
  background-color: rgb(122, 166, 231);
  color: black;
}

.btn-resolve {
  background-color: rgb(140, 228, 122);
  color: black;
}

.table-props {
  width: 100%;
  margin: auto;
  padding: 0px;
}

.table th,
.table td {
  vertical-align: middle;
}

.table-style-props {
  border: 1px solid black;
  margin: auto;
  padding: 0px;
}

.transparent-cells {
  background-color: rgba(0, 0, 0, 0);
  border: none;
}
</style>

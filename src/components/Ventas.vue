<template>
  <div class="container-gral">
    <div class="params mx-auto mt-5 border border-success rounded shadow-lg p-3 mb-5 bg-white rounded">

      <!-- Fecha -->

      <div class="d-flex justify-content-center align-items-center params-cont">
        <label for="date-picker" class="mx-2 my-auto">Fecha</label>
        <b-form-datepicker
          placeholder="Fecha"
          id="date-picker"
          v-model="date"
        ></b-form-datepicker>
      </div>

      <!-- Modelo -->

      <div class="d-flex justify-content-center align-items-center params-cont">
        <div class="mx-2">Producto:</div>
        <b-form-select
          @change="obtenerProps()"
          v-model="name"
          :options="this.names"
        ></b-form-select>
      </div>

      <!-- Tamaño -->

      <div class="d-flex justify-content-center align-items-center params-cont">
        <div class="mx-2">Propiedades:</div>
        <b-form-select
          v-model="proper"
          :options="this.properties"
        ></b-form-select>
      </div>

      <!-- Precio -->

      <div class="d-flex justify-content-center align-items-center params-cont">
        <div class="mx-2">Precio:</div>
        <b-form-input
          v-model="price"
          type="number"
          placeholder="Escribe el precio"
        ></b-form-input>
      </div>
      <div class="btn-send-cont">
        <button @click="afegVendes()" type="button" class="btn btn-success">
          Enviar
        </button>
      </div>
    </div>

    <div v-if="$store.state.vendes.length > 0" class="ultimes-vendes-cont">
      <table class="table text-light mb-0">
        <thead class="headers-style">
          <th>Fecha</th>
          <th>Producto</th>
          <th>Propiedades</th>
          <th>Precio</th>
          <th></th>
        </thead>
        <tr
          class="border-dark vertical-align-middle"
          v-for="(item, index) in $store.state.vendes"
          :key="index"
        >
          <td class="w-25">{{ item.date }}</td>
          <td class="w-25">{{ item.name }}</td>
          <td class="w-25">{{ item.custom }}</td>
          <td class="w-25">{{ item.price }}</td>
          <td class="w-25">
            <button
              @click="eliminarVenda(item.id)"
              type="button"
              class="btn btn-danger btn-sm"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ventas",
  async mounted() {
    this.$store.dispatch("obtenirVendes", 5);
    await this.$store.dispatch("obtenirItems");
    this.obtenerNames()

    
  },
  data() {
    return {
      name: null,
      proper: null,
      date: "",
      price: null,
      names: [],
      properties: [],

    };
  },

  methods: {

    afegVendes() {
      const item = this.$store.state.items.find(
        el => el.name == this.name);
      const params = { date: this.date, itemId: item.id, price: this.price };
      this.$store.dispatch("crearVentaYRefrescar", params);
      this.name = null;
      this.properties = null;
      this.date = "";
      this.precio = null;
    },

    eliminarVenda(id) {
      this.$store.dispatch("deleteVenda", id);
    },

    //Obtener los productos que SOLO tienen Stock mayor a 0
    
    obtenerNames() {
      this.names = this.$store.state.items.filter(el => el.stock >= 1).map(el => el.name)
    },

    //Obtener propiedades en base a las propiedades que tiene el elemento seleccionado

    obtenerProps() {
      this.properties = this.$store.state.items.filter(el => el.name == this.name).map(el => `${Object.keys(el.custom)} - ${Object.values(el.custom)}`)
      
      // map(el => `${Object.keys(el.custom)} - ${Object.values(el.custom)}`)
    },

  },
};
</script>

<style scoped>
.container-gral {
  height: max-content;
}
.params {
  width: 75%;
  height: max-content;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.ultimes-vendes-cont {
  height: max-content;
  border: 1px solid black;
  width: 75%;
  margin: auto;
}

.table {
  background-color: rgba(50, 99, 46, 0.7);
}

@media (max-width: 800px) {
  .params {
    width: 50%;
    display: block;
  }

  .params-cont {
    margin-top: 10px;
  }
}

.headers-style {
  background-color: rgba(39, 46, 44, 0.685);
}

.btn-send-cont {
  display: flex;
  margin-left: 10px;
}

@media (max-width: 500px) {
  .params {
    width: 60%;
  }
}
</style>

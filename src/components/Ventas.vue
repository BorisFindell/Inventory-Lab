<template>
  <div  class="container-gral">
    <div class="params mx-auto mt-5 border border-success rounded shadow-lg p-3 mb-5 bg-white rounded">

    <div class="d-flex justify-content-center align-items-center params-cont">
      <label for="date-picker" class="mx-2 my-auto">Fecha</label>
      <b-form-datepicker placeholder="Escoge una fecha" id="date-picker" v-model="date"></b-form-datepicker>
    </div>

      <!-- Modelo -->


    <div class="d-flex justify-content-center align-items-center params-cont">
      <div class="mx-2">Producto: </div>
      <b-form-select v-model="producto" @change="obtenirMidas()" :options="$store.getters.obtenirModels"></b-form-select>
    </div>
      

    <!-- Tamaño -->

    <div class="d-flex justify-content-center align-items-center params-cont">
      <div class="mx-2">Propiedades: </div>
      <b-form-select v-model="mida" :options="$store.state.midasDisp"></b-form-select>
    </div>  


  <!-- Preu -->

    <div class="d-flex justify-content-center align-items-center params-cont">
        <div class="mx-2">Precio: </div>
        <b-form-input v-model="preu" type="number" placeholder="Escribe el precio"></b-form-input>
    </div>

      <button @click="afegVendes()" type="button" class="btn btn-success">Enviar</button>

    </div>

    <div v-if="$store.state.vendes.length > 0" class="ultimes-vendes-cont">
      <table class="table text-light mb-0">
        <thead class="headers-style">
          <th> Data </th>
          <th> Producto </th>
          <th> Mida </th>
          <th> Preu </th>
          <th></th>


        </thead>
        <tr class="border-dark vertical-align-middle" v-for="(item, index) in $store.state.vendes" :key="index">
          <td class="w-25">{{item.date}}</td>
          <td class="w-25">{{item.model}}</td>
          <td class="w-25">{{item.size}}</td>
          <td class="w-25">{{item.price}}</td>
          <td class="w-25">
            <button @click="eliminarVenda(item.id)" type="button" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </table>

    </div>
  </div>
</template>



<script>


    export default {
        name: 'Ventas',
        mounted() {
            this.$store.dispatch('obtenirVendes', 5)
            this.$store.dispatch('obtenirItems')
        },
        data () {
          return {
            producto: null,
            mida: null,
            date: '',
            preu: null,
            
          }
        },

        methods: {

          obtenirMidas() {
            this.$store.dispatch('obtenirMidas', this.model)

          },
          afegVendes() {
            const item = this.$store.state.items.find(el => el.model == this.model && el.size == this.mida)
            const params = {date: this.date, itemId: item.id, price: this.preu}
            this.$store.dispatch('crearVentaYRefrescar', params)
            this.producto = null
            this.mida = null
            this.date = ''
            this.preu = null
            this.$store.state.midasDisp = []
          },

          

          eliminarVenda(id) {
            this.$store.dispatch('deleteVenda', id)
            
          }

        }
        
    }
</script>

<style scoped>

.container-gral {
    height: max-content;
    min-height: 100vh;

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

@media (max-width: 500px) {
  .params {
    width: 60%;
  }
}

</style>
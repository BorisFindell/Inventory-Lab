<template>
  <div  class="container-gral">
    <div class="params mx-auto mt-5 border border-success rounded shadow-lg p-3 mb-5 bg-white rounded">

      <!-- Fecha -->

    <div class="d-flex justify-content-center align-items-center">
        <div class="mx-2">Data: </div>
        <b-form-input v-model="fecha" placeholder="Ingresa la fecha"></b-form-input>
    </div>

      <!-- Modelo -->


    <div class="d-flex justify-content-center align-items-center">
      <div class="mx-2">Model: </div>
      <b-form-select v-model="model" :options="$store.getters.obtenirModels"></b-form-select>
    </div>
      

    <!-- Tamaño -->

    <div class="d-flex justify-content-center align-items-center">
      <div class="mx-2">Mida: </div>
      <b-form-select v-model="mida" :options="$store.getters.obtenirMidas"></b-form-select>
    </div>  


  <!-- Preu -->

    <div class="d-flex justify-content-center align-items-center">
        <div class="mx-2">Preu: </div>
        <b-form-input v-model="preu" type="number" placeholder="Ingresa el monto"></b-form-input>
    </div>

      <button @click="afegVend()" type="button" class="btn btn-success">Enviar</button>

    </div>

    <div class="ultimes-vendes-cont">
      <table class="table text-light">
        <thead>
          <th> Data </th>
          <th> Model </th>
          <th> Mida </th>
          <th> Preu </th>

        </thead>
        <tr class="border-dark" v-for="(item, index) in $store.state.vendes" :key="index">
          <td class="w-25">{{item.date}}</td>
          <td class="w-25">{{item.model}}</td>
          <td class="w-25">{{item.size}}</td>
          <td class="w-25">{{item.price}}</td>          

        </tr>
      </table>

      <!-- <div v-for="(item, index) in arrVendes" :key="index">
          {{item}}
      </div> -->

    </div>
  </div>
</template>



<script>


    export default {
        name: 'Ventas',
        mounted() {
            this.$store.dispatch('obtenirVendes')
            this.$store.dispatch('obtenirItems')
        },
        data () {
          return {
            model: null,
            mida: null,
            fecha: '',
            preu: null,
          }
        },
        

        methods: {

          obtenirMidas() {
            
          }
        //   afegVend() {
        //     this.arrVendes.push(
        //       {
        //       fecha: this.fecha,
        //       modelo: this.modelo,
        //       tamaño: this.tamaño,
        //       preu: this.preu
        //       }
        //     )
        //   }
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

</style>
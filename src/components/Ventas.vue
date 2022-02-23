<template>
  <div  class="container-gral">
    <div class="params mx-auto mt-5 border border-success rounded shadow-lg p-3 mb-5 bg-white rounded">

      <!-- Fecha -->

    <div class="d-flex justify-content-center align-items-center">
        <div class="mx-2">Fecha: </div>
        <b-form-input v-model="fecha" placeholder="Ingresa la fecha"></b-form-input>
    </div>

      <!-- Modelo -->


    <div class="d-flex justify-content-center align-items-center">
      <div class="mx-2">Modelo: </div>
      <b-form-select v-model="modelo" :options="modelos"></b-form-select>
    </div>
      

    <!-- Tamaño -->

    <div class="d-flex justify-content-center align-items-center">
      <div class="mx-2">Tamaño: </div>
      <b-form-select v-model="tamaño" :options="tamaños"></b-form-select>
    </div>  


  <!-- Preu -->

    <div class="d-flex justify-content-center align-items-center">
        <div class="mx-2">Preu: </div>
        <b-form-input v-model="preu" type="number" placeholder="Ingresa el monto"></b-form-input>
    </div>

      <button @click="afegVend()" type="button" class="btn btn-success">Enviar</button>

    </div>

    <div class="ultimes-vendes-cont">
      <table class="table text-light" >
        <thead>
          <th> Data </th>
          <th> Model </th>
          <th> Mida </th>
          <th> Preu </th>

        </thead>
        <tr class="border-dark" v-for="(item, index) in arrVendes" :key="index">
          <td class="w-25">{{arrVendes[index].fecha}}</td>
          <td class="w-25">{{arrVendes[index].modelo}}</td>
          <td class="w-25">{{arrVendes[index].tamaño}}</td>
          <td class="w-25">{{arrVendes[index].preu}}</td>          

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
        data () {
          return {
            modelo: null,
            tamaño: null,
            fecha: '',
            preu: null,
            modelos: [
              { value: null, text: 'Escoge un modelo' },
              { value: 'a', text: 'Mundito azul' },
              { value: 'b', text: 'Cáctus' },
            ],
            tamaños: [
              { value: null, text: 'Escoge un tamaño' },
              { value: 'a', text: 'Chico' },
              { value: 'b', text: 'Mediano' },
            ],
            arrVendes: []
          }
        },
        

        methods: {
          afegVend() {
            this.arrVendes.push(
              {
              fecha: this.fecha,
              modelo: this.modelo,
              tamaño: this.tamaño,
              preu: this.preu
              }
            )
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

</style>
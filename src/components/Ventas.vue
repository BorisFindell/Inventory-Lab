<template>
  <div  class="container-gral">
    <div class="params m-auto border border-success rounded shadow-lg p-3 mb-5 bg-white rounded">

      <!-- Fecha -->

    <div class="d-flex justify-content-center align-items-center">
        <div class="mx-2">Fecha: </div>
        <b-form-input v-model="text" placeholder="Ingresa la fecha"></b-form-input>
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
        <b-form-input v-model="text" placeholder="Ingresa el monto"></b-form-input>
    </div>

      <button type="button" class="btn btn-success">Enviar</button>

    </div>


  </div>
</template>

<script>
    export default {
        name: 'Ventas',
        data () {
          return {
            modelo: null,
            modelos: [
              { value: null, text: 'Escoge un modelo' },
              { value: 'a', text: 'Mundito azul' },
              { value: 'b', text: 'Cáctus' },
            ],
            tamaño: null,
            tamaños: [
              { value: null, text: 'Escoge un tamaño' },
              { value: 'a', text: 'Chico' },
              { value: 'b', text: 'Mediano' },
            ],
          }
        }
    }
</script>

<style scoped>

.container-gral {
    height: 100vh;

}
.params {
    width: 75%;
    height: max-content;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

</style>
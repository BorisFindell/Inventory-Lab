<template>
  <div container-gral>
    <div tabla-cont>
      <table class="table table-striped table-warning table-hover ">
        <thead class="table-head text-light">
          <th class="table-style" scope="col">Model</th>
          <th class="table-style" scope="col">Mida</th>
          <th class="table-style" scope="col">Quantitat</th>
          <th class="table-style" scope="col">Fer</th>
        </thead>
        <tbody class="table-style">
        <tr v-for="item in items" :key="item.id">
          <td class="w-25 table-style">
            {{ item.model }}
          </td>
          <td class="w-25 table-style">
            {{ item.mida }}
          </td>
          <td class="w-25 table-style">
            {{ item.quant }}
          </td>
          <td class="w-25 table-style">
            <input type="number" v-model="todo">
          </td>
        </tr>
        </tbody>
      </table>
      <div class="btn-cont">
        <button type="button" class="btn" >Resoldre tot</button>
      </div>
    
    </div>



  </div>
</template>

<script>
    export default {
        name: 'Inventario',
        data() {
          return{
            items: [
              {model: 'Cactus', mida: 'chico', quant: 1, todo:Number},
              {model: 'Mundito azul', mida: 'chico', quant: 4, todo:Number},
              {model: 'Bici', mida: 'chico', quant: 5, todo:Number},
              {model: 'Cactus', mida: 'mediano', quant: 3, todo:Number},
              {model: 'Mundito azul', mida: 'mediano', quant: 1, todo:Number},
              {model: 'Bici', mida: 'mediano', quant: 9, todo:Number},
            ]
            
            // items: [
            //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' }
            // ],
            //   {
            //     age: 89,
            //     first_name: 'Geneva',
            //     last_name: 'Wilson',
            //     _rowVariant: 'danger'
            //   },
            //   {
            //     age: 40,
            //     first_name: 'Thor',
            //     last_name: 'MacDonald',
            //     _cellVariants: { age: 'info', first_name: 'warning' }
            //   },
            //   { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
            // ]
          }
        }
    }
</script>

<style scoped>

.table {
  width: 75%;
  margin: auto;
  border: 1px solid black;
}

.table-style {
  border: 1px solid black;
}

.table-head {
  background-color: rgb(126, 105, 60);
}

.btn-cont {
  width: 75%;
  display: flex;
  justify-content: right;
  margin: auto;
  margin-top: 20px;
}

.btn {
  background-color: rgb(140, 228, 122);
}
</style>
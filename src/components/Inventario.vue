<template>
  <div container-gral>
    <div tabla-cont>
      <table class="table table-striped table-warning table-hover ">
        <thead class="table-head text-light">
          <th class="table-style" scope="col">Producto</th>
          <th class="table-style" scope="col">Propiedades</th>
          <th class="table-style" scope="col">Cantidad</th>
          <th class="table-style" v-if="$store.state.userObj.role === 'admin'"  scope="col">Hacer</th>
        </thead>
        <tbody class="table-style">
        <tr v-for="item in $store.state.items" :key="item.id">
          <td class="w-25 table-style">
            {{ item.name }}
          </td>
          <td class="w-25 table-style">
            {{ item.size }}
          </td>
          <td class="w-25 table-style">
            {{ item.stock }}
          </td>
          <td class="w-25 table-style" v-if="$store.state.userObj.role === 'admin'" >
              <input type="number" v-model="item.todo" @blur="setTodo(item.id)">

          </td>
        </tr>
        </tbody>
      </table>
      <div class="btn-cont">
        <button type="button" v-if="$store.state.userObj.role === 'admin'" @click="resoldreTot()" class="btn">Resoldre tot</button>

      </div>
    
    </div>



  </div>
</template>

<script>
    export default {
        name: 'Inventario',
        mounted() {
            this.$store.dispatch('obtenirItems')
        },
        data() {
          return {
            num: []
            
          }
        },

        methods: {

          setTodo(itemId) {
            const storeItem = this.$store.state.items.find(el => el.id == itemId)
            this.$store.dispatch('saveTodo', {id: itemId, payload: {todo: storeItem.todo}})

            
          },
          resoldreTot() {
            this.$store.dispatch('resoldreTot')
            this.$store.dispatch('obtenirItems')
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
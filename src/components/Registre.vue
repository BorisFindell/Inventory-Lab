<template>
    <div class="registre-cont">
        <div class="vendes-cont mt-5">
            <h3> Ventas </h3>
            <b-form action="/search">
            <b-input-group>
                <b-form-input size="sm" v-model="searchTxt" placeholder="Search"/>
                <b-input-group-append>
                </b-input-group-append>
            </b-input-group>
            </b-form>
            <table class="table text-light" >
                <thead class="headers-style">
                <th> Fecha </th>
                <th> Producto </th>
                <th> Propiedades </th>
                <th> Precio </th>

                </thead>
                <tr class="border-dark" v-for="(item, index) in computedList" :key="index">
                    <td class="w-25">{{item.date}}</td>
                    <td class="w-25">{{item.model}}</td>
                    <td class="w-25">{{item.size}}</td>
                    <td class="w-25">{{item.price}}</td>          
                </tr>
            </table>
            
        </div>

         <div class="total-cont mt-5">
            <h3> Històric de vendes </h3>

            <table class="table text-light" >
                <thead class="headers-style">
                <th> Data </th>
                <th> Preu </th>
                <th> Quantitat </th>
                

                </thead>
                <tr class="border-dark" v-for="(sale, date) in $store.state.groupedVendes" :key="date">
                <td class="w-25">{{date}}</td>
                <td class="w-25">{{sale.total}}</td>
                <td class="w-25">{{sale.cant}}</td>


                </tr>
            </table>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'Registre',
        data () {
          return {
              searchTxt:'',
          }
        },
        mounted() {
            this.$store.dispatch('obtenirVendesIAgrupar')

        },

        computed:{
            computedList: function(){
                const presupostArrOrd = this.$store.state.vendes.slice();
                return presupostArrOrd.filter(el => el.model.toLowerCase().includes(this.searchTxt.toLowerCase())
                )
            }
        }
        
    }
</script>

<style scoped>

.registre-cont {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.vendes-cont {
    height: max-content;
    margin: auto;
    width: 47%;
}
.total-cont {
    height: max-content;
    width: 47%;
    margin: auto;

}

.table {
  background-color: rgba(50, 99, 46, 0.7);
}

.headers-style {
  background-color: rgba(39, 46, 44, 0.685);
}

</style>
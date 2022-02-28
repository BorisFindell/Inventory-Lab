<template>
    <div class="registre-cont">
        <div class="vendes-cont mt-5">
            <h3> Vendes </h3>
            <b-form action="/search">
            <b-input-group>
                <b-form-input size="sm" v-model="searchTxt" placeholder="Search"/>
                <b-input-group-append>
                <b-button size="sm" @click="search">Search <b-icon-search /></b-button>
                </b-input-group-append>
            </b-input-group>
            </b-form>
            <table class="table text-light" >
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
                
            <!-- <div>
                <button class="btn btn-primary" @click="reset" ></button>
            </div> -->
        </div>

         <div class="total-cont mt-5">
            <h3> Històric de vendes </h3>

            <table class="table text-light" >
                <thead>
                <th> Data </th>
                <th> Preu </th>

                </thead>
                <tr class="border-dark" v-for="(item, index) in $store.state.vendesHist" :key="index">
                <td class="w-25">{{item.date}}</td>
                <td class="w-25">{{item.price}}</td>

                </tr>
            </table>

            <!-- <div>
                <button class="btn btn-primary" @click="reset" ></button>
            </div> -->
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
            this.$store.dispatch('obtenirVendes')

        },

        methods:{
            // search() {
            //     const newArray = this.arrVendes.filter(el => el.modelo.toLowerCase().includes(this.searchTxt.toLowerCase()))
            //     return this.arrVendes = newArray
            // },
            // reset() {
                
            // }
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

</style>
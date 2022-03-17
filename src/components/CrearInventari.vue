<template>
  <b-container fluid class="d-flex justify-content-center container-gral">

    

<div id="app">
        <table class="table">
            <thead>
                <tr>
                    <td><strong>Title</strong></td>
                    <td><strong>Description</strong></td>
                    <td><strong>File</strong></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index">

                    <td><input type="text" v-model="row.title"></td>
                    <td><input type="text" v-model="row.description"></td>
                    <td>
                        <label class="fileContainer">
                            {{row.file.name}}
                            <input type="file" @change="setFilename($event, row)" :id="index">
                        </label>
                    </td>
                    <td>
                        <a v-on:click="removeElement(index);" style="cursor: pointer">Remove</a>
                    </td>


                </tr>
            </tbody>
        </table>
        <div>
            <button class="button btn-primary" @click="addRow">Add row</button>
        </div>
    </div>









































    <!-- <b-form class="inputs">
      <b-form-group
      label="Producto">

        <b-form-input 
        v-model="name" 
        placeholder="Enter your product"
        ></b-form-input>
      </b-form-group> -->
        <!-- <b-form-invalid-feedback class="text-dark font-weight-bold h5" id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback> -->
<!-- :state="validateState('name')" -->
        <!-- <div class="d-flex">
          <p>Categoría</p>
          <b-form-input v-model="prop" placeholder="Enter your name"></b-form-input>
          <p>Propiedad</p>
          <b-form-input v-model="option" placeholder="Enter your name"></b-form-input>
          <b-button class="btn success btn-sm" @click="addMore">Agregar otra propiedad</b-button>
        </div>

        <button @click="submit" type="submit" >Add</button>
    </b-form>
   
    <div>
        {{this.$store.state.nouItem}} -->
        <!-- <b-table>
          <th>
            <tr v-for="(item, index) in this.$store.state.nouItem" :key="index">

            </tr>
          </th>
        </b-table> -->
    <!-- </div> -->

  </b-container>
</template>

<script type="text/javascript">

// import { validationMixin } from "vuelidate";
// import { required } from "vuelidate/lib/validators";

  export default {


name: 'CrearInventari',
    // mixins: [validationMixin],





            data() {
              return {

              
                rows: []
              }
            },
            methods: {
                addRow: function() {
                    this.rows.push({
                        title: "",
                        description: "",
                        file: {
                            name: 'Choose File'
                        }
                    });
                },
                removeElement: function(index) {
                    this.rows.splice(index, 1);
                },
                setFilename: function(event, row) {
                    var file = event.target.files[0];
                    row.file = file
                }
            }
  }
  //   data() {
  //     return {
  //       name: '',
  //       prop: '',
  //       option: ''
  //     }
  //   },
  //   // validations: {
  //   //   name: {
  //   //     required
  //   //   }
  //   // },
  //   methods: {
  //     // validateState(name) {
  //     //   const { $dirty, $error } = this.$v[name];
  //     //   return $dirty ? !$error : null;
  //     // },
  //       submit() {

  //       // this.$v.$touch();
  //       //   if (this.$v.form.$anyError) {
  //       //   return;
  //       // }
        
  //       // else{
        
  //         this.$store.state.nouItem.name = this.name
  //         if (this.prop != '' && this.option != '')
  //         this.$store.state.nouItem[this.prop] = this.option
                  
  //         this.$store.dispatch('addItem')

  //         this.name = ''
  //         this.prop = ''
  //         this.option = ''

        
  //       },
  //       addMore() {
  //         this.$store.state.nouItem.name = this.name
  //         if (this.prop != '' && this.option != '')
  //         this.$store.state.nouItem[this.prop] = this.option

  //         this.prop = ''
  //         this.option = ''
          
  //       }
  //   }
  // }
</script>


<style scoped>

.container-gral {
    margin: auto;
    margin-top: 2%;
    height: 100vh;
    display: inline-flex
}

.inputs {
    width: 60%;
}


</style>


import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[],
    vendes:[],
    midasDisp:[],
    userObj: null,
    groupedVendes: {},
    nouItem: {}


    
  },
  mutations: {
    generarItems(state, itemsAction) {
      state.items = itemsAction
    },

    generarVendes(state, vendesAction) {
      state.vendes = vendesAction
    },

    actualitzarMidas(state, midasAction) {
      state.midasDisp = midasAction
    },

    signInUser(state, user){
      state.userObj = user
    },
    logOut(state) {
      state.userObj = null
      router.push('/')
    },

    agruparVendes(state) {
      state.groupedVendes = {}
      state.vendes.forEach(function(venda) {
        if (!state.groupedVendes[venda.date]) {
          Vue.set(state.groupedVendes, venda.date, {total: 0, cant: 0})
        }
        state.groupedVendes[venda.date].total += venda.price
        state.groupedVendes[venda.date].cant ++
      })
    }


  },
  actions: {
    obtenirItems: async function ({ commit }) {
      const data = await fetch('https://feriastore.herokuapp.com/items')
      const items = await data.json()
      commit ('generarItems', items)
    },

    obtenirVendes: async function ({ commit }, limit) {
      let data
      if (limit) 
        data = await fetch(`https://feriastore.herokuapp.com/sales?sort=date&limit=${limit}`)
      else
        data = await fetch('https://feriastore.herokuapp.com/sales?sort=date')
      const vendes = await data.json()
      commit ('generarVendes', vendes)
    },

    obtenirVendesIAgrupar: async function ({commit}) {
      await this.dispatch('obtenirVendes')
      commit ('agruparVendes')
    },

    

    obtenirMidas({commit, state}, model) {
      commit ('actualitzarMidas', state.items.filter(el => el.model == model && el.stock > 0).map(el => el.size))
    },

    crearVenda: async function (state, params) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
      };
      await fetch("https://feriastore.herokuapp.com/sales", requestOptions)
    },

    crearVentaYRefrescar: async function (state, params) {
      await this.dispatch('crearVenda', params)
      this.dispatch('obtenirVendes', 5)
      this.dispatch('obtenirItems')

    },

    saveTodo: async function (state, params) {
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params.payload)
      };
      const id = params.id
      await fetch(`https://feriastore.herokuapp.com/items/${id}`, requestOptions)

    },

    LogIn(context, [username, password]){
        const key= username
        const displayNameJSON= (window.localStorage.getItem(key)) 
        const userObj = JSON.parse(displayNameJSON)
      
        if(displayNameJSON !== null && password == userObj.password){
          alert("Benvinguts!")
          context.commit('signInUser', userObj)
          router.push('/HomeV')
      
        }else{
          alert("Nom d'usuari o contrasenya incorrecte")
        }
      },

      resoldreTot: async function (){
        const requestOptions = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify()
        };
        await fetch(`https://feriastore.herokuapp.com/items`, requestOptions)
        this.dispatch('obtenirItems')

      },

      deleteVenda: async function (state, id) {
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify()
        };
        await fetch(`https://feriastore.herokuapp.com/sales/${id}`, requestOptions)
        this.dispatch('obtenirVendes', 5)


      },
      // addItem: async function (state) {
          //agregar nouItem al Back
          //luego el mísmo método de CrearInventario lo vacía para poder agregar otro
      // }
  },

  getters: {
    obtenirModels(state) {
      const modelosFilt = state.items.filter(el => el.stock > 0).map(el => el.model)
        return modelosFilt.filter((valor, index) => {
        return modelosFilt.indexOf(valor) === index;
      })
    },
    
  }
})
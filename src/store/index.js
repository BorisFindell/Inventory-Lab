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
    // vendesHist: []


    
  },
  mutations: {
    generarItems(state, itemsAction) {
      state.items = itemsAction
    },

    generarVendes(state, vendesAction) {
      state.vendes = vendesAction
    },

    // generarVendesHist(state, vendesHistAction) {
    //   state.vendesHist = vendesHistAction
    // },

    actualitzarMidas(state, midasAction) {
      state.midasDisp = midasAction
    },

    signInUser(state, user){
      state.userObj = user
    },
    logOut(state) {
      state.userObj = null
      router.push('/')
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




    obtenirMidas({commit, state}, model) {
      commit ('actualitzarMidas', state.items.filter(el => el.model == model).map(el => el.size))
    },



    // crearVendesHist({commit, state}) {
      
    //   })

    //   commit ('generarVendesHist' )

    // },

    crearVenda(state, params) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
      };
      fetch("https://feriastore.herokuapp.com/sales", requestOptions)
    },

    saveTodo(state, params) {
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params.payload)
      };
      const id = params.id
      fetch(`https://feriastore.herokuapp.com/items/${id}`, requestOptions)
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

      resoldreTot(){
        const requestOptions = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify()
        };
        fetch(`https://feriastore.herokuapp.com/items`, requestOptions)
      },

      deleteVenda(state, id) {
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify()
        };
        fetch(`https://feriastore.herokuapp.com/sales/${id}`, requestOptions)

      },
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
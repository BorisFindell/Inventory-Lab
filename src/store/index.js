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
    }



  },
  actions: {
    obtenirItems: async function ({ commit }) {
      const data = await fetch('https://feriastore.herokuapp.com/items')
      const items = await data.json()
      commit ('generarItems', items)
    },

    obtenirVendes: async function ({ commit }) {
      const data = await fetch('https://feriastore.herokuapp.com/sales?sort=date&limit=5')
      const vendes = await data.json()
      commit ('generarVendes', vendes)
    },

    obtenirMidas({commit, state}, model) {
      commit ('actualitzarMidas', state.items.filter(el => el.model == model).map(el => el.size))
    },

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
          router.push('/')
      
        }else{
          alert("USERNAME OR PASSWORD INCORRECT")
        }
      }
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




// signInUser(state, user){
//   state.displayNameObj = user
// },
// logOut(state) {
//   state.displayNameObj = null
// }
// },

// actions: {
// obtenirNaus: async function ({ commit, state }) {
//   const data = await fetch(state.nextPageUrl)
//   const naus = await data.json()
//   commit ('llenarNaus', naus)
//   commit ('updatePage', naus.next)
// },
// LogIn(context, [username, password]){
//   const key= username
//   const displayNameJSON= (window.localStorage.getItem(key)) 
//   const displayNameObj = JSON.parse(displayNameJSON)

//   if(displayNameJSON !== null && password == displayNameObj.password){
//     alert("¡WELCOME TO THE STARS!")
//     context.commit('signInUser', displayNameObj)
//     context.commit ('closeModal')
//     router.push('/')

//   }else{
//     alert("USERNAME OR PASSWORD INCORRECT")
//   }
// },


// },



// state: {
//   naus:[],
//   nextPageUrl:"https://swapi.dev/api/starships",
//   modal: null,
//   displayNameObj: null

// },

// mutations: {
//   llenarNaus(state, nausAccion) {
//     state.naus.push(...(nausAccion.results))
    
//     nausAccion.results.forEach(nau => {
//       let regex = new RegExp(/\d+/g)
//       nau.id = parseInt(nau.url.match(regex)[0])
//     })
//   },

//   updatePage(state, newUrl) {
//     state.nextPageUrl = newUrl
//   },
//   resetStarshipList(state){
//     state.naus = []
//     state.nextPageUrl= "https://swapi.dev/api/starships"
//   },

//   closeModal(state){
//     state.modal = null
//   },
//   openModal(state, modal){
//     state.modal = modal
//   },
//   signInUser(state, user){
//     state.displayNameObj = user
//   },
//   logOut(state) {
//     state.displayNameObj = null
//   }
// },

// actions: {
//   obtenirNaus: async function ({ commit, state }) {
//     const data = await fetch(state.nextPageUrl)
//     const naus = await data.json()
//     commit ('llenarNaus', naus)
//     commit ('updatePage', naus.next)
//   },
//   LogIn(context, [username, password]){
//     const key= username
//     const displayNameJSON= (window.localStorage.getItem(key)) 
//     const displayNameObj = JSON.parse(displayNameJSON)

//     if(displayNameJSON !== null && password == displayNameObj.password){
//       alert("¡WELCOME TO THE STARS!")
//       context.commit('signInUser', displayNameObj)
//       context.commit ('closeModal')
//       router.push('/')

//     }else{
//       alert("USERNAME OR PASSWORD INCORRECT")
//     }
//   },

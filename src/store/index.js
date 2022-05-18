import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    vendes: [],
    midasDisp: [],
    userObj: null,
    groupedVendes: {},
    nouItem: {},
  },
  mutations: {
    generarItems(state, itemsAction) {
      state.items = itemsAction;
    },

    generarVendes(state, vendesAction) {
      state.vendes = vendesAction;
    },

    actualitzarMidas(state, midasAction) {
      state.midasDisp = midasAction;
    },

    signInUser(state, user) {
      state.userObj = user;
    },
    logOut(state) {
      state.userObj = null;
      window.localStorage.removeItem("user")
      router.push("/LogIn");
    },

    agruparVendes(state) {
      state.groupedVendes = {};
      state.vendes.forEach(function (venda) {
        if (!state.groupedVendes[venda.date]) {
          Vue.set(state.groupedVendes, venda.date, { total: 0, cant: 0 });
        }
        state.groupedVendes[venda.date].total += venda.price;
        state.groupedVendes[venda.date].cant++;
      });
    },

    createUserObj(state, userObj) {
      state.userObj = userObj;
    },
  },
  actions: {
    obtenirItems: async function ({ commit }) {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt,
        },
      };
      const data = await fetch(
        "https://feriastore.herokuapp.com/items",
        requestOptions
      );
      const items = await data.json();
      commit("generarItems", items);
    },

    obtenirVendes: async function ({ commit }, limit) {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt,
        },
      };
      let data;
      if (limit)
        data = await fetch(
          `https://feriastore.herokuapp.com/sales?sort=date&limit=${limit}`,
          requestOptions
        );
      else
        data = await fetch(
          "https://feriastore.herokuapp.com/sales?sort=date",
          requestOptions
        );
      const vendes = await data.json();
      commit("generarVendes", vendes);
    },

    obtenirVendesIAgrupar: async function ({ commit }) {
      await this.dispatch("obtenirVendes");
      commit("agruparVendes");
      
    },

    //CREO QUE ES VIEJO ---> CHEQUEAR

    // obtenirMidas({ commit, state }, model) {
    //   commit(
    //     "actualitzarMidas",
    //     state.items
    //       .filter((el) => el.model == model && el.stock > 0)
    //       .map((el) => el.size)
    //   );
    // },

    crearVenda: async function (state, params) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt
        },
        body: JSON.stringify(params),
      };
      await fetch("https://feriastore.herokuapp.com/sales", requestOptions);
    },

    crearVentaYRefrescar: async function (state, params) {
      await this.dispatch("crearVenda", params);
      this.dispatch("obtenirVendes", 5);
      this.dispatch("obtenirItems");
    },

    saveTodo: async function (state, params) {
      const requestOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt
        },
        body: JSON.stringify(params.payload),
      };
      const id = params.id;
      await fetch(
        `https://feriastore.herokuapp.com/items/${id}`,
        requestOptions
      );
    },

    LogIn: async function ({ commit, state }, { email, password }) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      };
      const response = await fetch(
        "https://feriastore.herokuapp.com/sessions",
        requestOptions
      );

      if (!response.ok) {
        if (response.status == 401) 
          alert("Pass incorrecto");
        else if (response.status == 404)
          alert("Email incorrecto");
        else
          alert("Error desconocido, inténtelo nuevamente en unos minutos");
      }

      commit("createUserObj", await response.json());
      window.localStorage.setItem("user", JSON.stringify(state.userObj));
      router.push('/')
    },

    resoldreTot: async function () {
      const requestOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt
        },
        body: JSON.stringify(),
      };
      await fetch(`https://feriastore.herokuapp.com/items`, requestOptions);
      this.dispatch("obtenirItems");
    },

    deleteVenda: async function (state, id) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt
        },
        body: JSON.stringify(),
      };
      await fetch(
        `https://feriastore.herokuapp.com/sales/${id}`,
        requestOptions
      );
      this.dispatch("obtenirVendes", 5);
    },

    addItem: async function (state, nouItem) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt,
        },
        body: JSON.stringify(nouItem),
      };
      return fetch("https://feriastore.herokuapp.com/items", requestOptions);

    },


    deleteItem: async function (state, id) {
      const requestOptions = {
        method: "DELETE",
        headers: { 
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt
        },
        body: JSON.stringify(),
      };
      await fetch(`https://feriastore.herokuapp.com/items/${id}`, requestOptions);
      this.dispatch("obtenirItems");
    },

    editItem: async function (state, id, nouItem) {
      const requestOptions = {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.userObj.jwt
        },
        body: JSON.stringify(nouItem),
      };
      await fetch(`https://feriastore.herokuapp.com/items/${id}`, requestOptions);
      this.dispatch("obtenirItems");
    },

    createUser: async function (state, newUser) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      };
      await fetch("https://feriastore.herokuapp.com/users", requestOptions);
    },
  },


  getters: {
    
    //CREO QUE ES VIEJO ---> CHEQUEAR
  
    obtenirModels(state) {
      const modelosFilt = state.items
        .filter((el) => el.stock > 0)
        .map((el) => el.model);
      return modelosFilt.filter((valor, index) => {
        return modelosFilt.indexOf(valor) === index;
      });
    },
  },
});

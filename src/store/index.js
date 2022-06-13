import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import "./interceptors"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    vendes: [],
    userObj: null,
    groupedVendes: {},
    nouItem: {},
    itemForEdit: {},

  },
  mutations: {
    generarItems(state, itemsAction) {
      state.items = itemsAction;
    },

    generarNames(state, namesAction) {
      state.names = namesAction;
    },

    generarStoreItem(state, itemsStore) {
      state.itemForEdit = itemsStore;
    },

    generarVendes(state, vendesAction) {
      state.vendes = vendesAction;
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
          Vue.set(state.groupedVendes, venda.date, {
            total: 0,
            cant: 0
          });
        }
        state.groupedVendes[venda.date].total += venda.price;
        state.groupedVendes[venda.date].cant++;
      });
    },

    createUserObj(state, userObj) {
      state.userObj = userObj;
    },

    addRow(state) {
      state.itemForEdit.custom.newProp = "value"
    },
  },
  actions: {
    obtenirItems: async function ({
      commit
    }) {
      const requestOptions = {
        method: "GET"
      };
      const data = await fetch(
        "https://feriastore.herokuapp.com/items?sort=name&asc",
        requestOptions
      );
      const items = await data.json();
      commit("generarItems", items);
    },

    obtenirVendes: async function ({
      commit
    }, limit) {
      const requestOptions = {
        method: "GET"
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

    obtenirVendesIAgrupar: async function ({
      commit
    }) {
      await this.dispatch("obtenirVendes");
      commit("agruparVendes");

    },

    crearVenda: async function (state, params) {
      const requestOptions = {
        method: "POST",
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
        body: JSON.stringify(params.payload),
      };
      const id = params.id;
      await fetch(
        `https://feriastore.herokuapp.com/items/${id}`,
        requestOptions
      );
    },

    LogIn: async function ({
      commit,
      state
    }, {
      email,
      password,
      showAlert
    }) {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        }),
      };
      const response = await fetch(
        "https://feriastore.herokuapp.com/sessions",
        requestOptions
      )

      if (!response.ok) {
        if (response.status == 404) {
          showAlert(404)
        }
        else if (response.status == 401) {
          showAlert(401)
        }
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
        body: JSON.stringify(),
      };
      await fetch(`https://feriastore.herokuapp.com/items`, requestOptions);
      this.dispatch("obtenirItems");
    },

    deleteVenda: async function (state, id) {
      const requestOptions = {
        method: "DELETE",
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
        body: JSON.stringify(nouItem),
      };
      return fetch("https://feriastore.herokuapp.com/items", requestOptions);

    },


    deleteItem: async function (state, id) {
      const requestOptions = {
        method: "DELETE",
        body: JSON.stringify(),
      };
      await fetch(`https://feriastore.herokuapp.com/items/${id}`, requestOptions);
      this.dispatch("obtenirItems");
    },

    storeItemEdit: async function ({
      commit
    }, item) {
      commit("generarStoreItem", item);
    },


    editItem: async function () {
      const id = this.state.itemForEdit.id;
      const requestOptions = {
        method: "PATCH",
        body: JSON.stringify(this.state.itemForEdit),
      };
      await fetch(`https://feriastore.herokuapp.com/items/${id}`, requestOptions);
      this.dispatch("obtenirItems");
    },

    createUser: async function (state, {
      newUser,
      showModal
    }) {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(newUser),
      };
      const response = await fetch("https://feriastore.herokuapp.com/users", requestOptions)

      if (!response.ok) {
        if (response.status == 409) {
          showModal()
        }
      } else {
        router.push({
          name: 'LogInPageV'
        });
      }
    },

    addRow: function ({
      commit
    }) {
      commit("addRow")

    }

  },

  obtenerPropiedades: async function ({
    commit
  }) {
    const requestOptions = {
      method: "GET"
    };
    const data = await fetch(
      "https://feriastore.herokuapp.com/properties",
      requestOptions
    );
    const propiedadesList = await data.json();
    commit("generarListaPropiedades", propiedadesList);
  },

  getters: {
    obtenerPropiedades: async function () {
      const requestOptions = {
        method: "GET"
      };
      const data = await fetch(
        "https://feriastore.herokuapp.com/properties",
        requestOptions
      );
      return data.json()
    },

    

  },
});


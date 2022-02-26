import Vue from 'vue'
import VueRouter from 'vue-router'
import LogInPage from '../components/LogInPage.vue'
import HomeV from '../views/HomeV.vue'
import InventarioV from '../views/InventarioV.vue'
import VentasV from '../views/VentasV.vue'
import NavV from '../views/NavV.vue'
import RegistreV from '../views/RegistreV.vue'
import UsuariNouV from '../views/UsuariNouV.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LogInPage',
    component: LogInPage
  },
  
  {
    path: '/HomeV',
    name: 'HomeV',
    component: HomeV
  },

  {
    path: '/InventarioV',
    name: 'InventarioV',
    component: InventarioV
  },

  {
    path: '/VentasV',
    name: 'VentasV',
    component: VentasV
  },

  {
    path: '/NavV',
    name: 'NavV',
    component: NavV
  },

  {
    path: '/RegistreV',
    name: 'RegistreV',
    component: RegistreV
  },

  {
    path: '/UsuariNouV',
    name: 'UsuariNouV',
    component: UsuariNouV
  },
]

const router = new VueRouter({
  routes
})

export default router

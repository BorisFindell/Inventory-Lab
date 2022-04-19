import Vue from 'vue'
import VueRouter from 'vue-router'
import LogInPageV from '../views/LogInPageV.vue'
import HomeV from '../views/HomeV.vue'
import InventarioV from '../views/InventarioV.vue'
import VentasV from '../views/VentasV.vue'
import NavV from '../views/NavV.vue'
import RegistreV from '../views/RegistreV.vue'
import UsuariNouV from '../views/UsuariNouV.vue'
import CrearInventariV from '../views/CrearInventariV.vue'
import store from '../store'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LogInPageV',
    component: LogInPageV
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

  {
    path: '/CrearInventariV',
    name: 'CrearInventariV',
    component: CrearInventariV
  },
]

const router = new VueRouter({
  routes
})


const userPages = ['HomeV', 'InventarioV', 'VentasV', 'CrearInventariV']
const adminPages = ['RegistreV']

router.beforeEach((to, from, next) => {
  
  if (!store.state.userObj) {
    const localUser = window.localStorage.getItem('user')
    store.state.userObj = localUser ? JSON.parse(localUser) : null
  }

  if (!store.state.userObj && (userPages.includes(to.name) || adminPages.includes(to.name))){
    next({ name: 'LogInPageV' })
  } 

  else if (adminPages.includes(to.name) && store.state.userObj.role !== 'admin')
    next({ name: 'HomeV' })

  else next()

})

export default router

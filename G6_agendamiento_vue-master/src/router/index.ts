import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainBase from '../views/MainBase.vue'
import MainInicio from '../views/Inicio/MainInicio.vue'
import CRUDView from '../views/CRUDView.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: MainBase,
    children: [
      {
        path: '/home/inicio',
        name: 'MainInicio',
        component: MainInicio
      },
      { /* Se agrega la ruta de la nueva vista */
        path: '/home/inicio/crud',
        name: 'CRUDView',
        component: CRUDView
      }
    ] 
  }
]

const router = new VueRouter({
  routes
})

export default router

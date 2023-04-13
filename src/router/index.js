import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutSite from '../components/Layout/Site/Site.vue'
import LayoutSimit from '../components/Layout/Simit/Simit.vue'
import Login from '../components/Site/Login/Login.vue'
import Index from '../components/Site/Index/Index.vue'
import ClientCrud from '../components/Business/Client/Crud/Crud.vue'
import Basic from '../components/Layout/Basic/Basic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '',
    component: Login
  },
  {
    path: '',
    name: 'layout.site',
    component: LayoutSite,
    children: [
      {
        path: '/export-report',
        name: 'site.index',
        component: Index
      }
    ]
  },
  {
    path: '',
    name: 'layout.basic',
    component: Basic,
    children: [
      {
        path: '/clients',
        name: '',
        component: ClientCrud
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

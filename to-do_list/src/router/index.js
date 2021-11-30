import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/shoppingList',
    name: 'shoppingList',
    
    component: () => import( '../views/shoppingList.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

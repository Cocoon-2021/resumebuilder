import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListResume from '../components/ListResume.vue'
import Edit from '../components/Edit.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ListResume',
    name: 'ListResume',
    component: ListResume
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: Edit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

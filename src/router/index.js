import Vue from 'vue'
import VueRouter from 'vue-router'
import LeftView from '../components/holiday/LeftView.vue'
import RightView from '../components/holiday/RightView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/left', component: LeftView },
  { path: '/right', component: RightView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

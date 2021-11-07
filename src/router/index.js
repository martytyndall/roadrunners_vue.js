import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TyreSafety from '../views/TyreSafety.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tyresafety',
    name: 'TyreSafety',   
    component: TyreSafety
  },
  {
    path: '/contact',
    name: 'Contact',   
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
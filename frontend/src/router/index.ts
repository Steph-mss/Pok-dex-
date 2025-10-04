import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Pokedex from '@/views/Pokedex.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: Home },           
  { path: '/pokedex', component: Pokedex }, 
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } 
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/:pathMatch(.*)*', redirect: '/' }, // redirect all unknown to home
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

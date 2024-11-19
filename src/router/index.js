import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PartnersView from '@/views/PartnersView.vue'
import BoardView from '@/views/BoardView.vue'
import BratislavaView from '@/views/BratislavaView.vue'
import EventsView from '@/views/EventsView.vue'
import InternationalView from '@/views/InternationalView.vue'
import JoinUsView from '@/views/JoinUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/partners',
      name: 'partners',
      component: PartnersView
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView
    },
    {
      path: '/BEST-Bratislava',
      name: 'BEST-Bratislava',
      component: BratislavaView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/BEST-international',
      name: 'BEST-international',
      component: InternationalView
    },
    {
      path: '/join-us',
      name: 'join-us',
      component: JoinUsView
    }
  ]
})

export default router

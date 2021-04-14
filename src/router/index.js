import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import PokemonPreference from '../views/PokemonPreference.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/pokemonPreference',
    name: 'PokemonPreference',
    component: PokemonPreference
  }
]

const router = new VueRouter({
  routes
})

export default router

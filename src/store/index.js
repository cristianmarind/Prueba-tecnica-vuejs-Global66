import Vue from 'vue'
import Vuex from 'vuex'
import { getPokemonList, getPokemonInfoByName  } from "@/providerServices"
import { ACTIONS, MUTATIONS } from "@/appConfiguration"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: []
  },
  getters: {
  },
  mutations: {
    [MUTATIONS.SET_POKEMONS]: (state, pokemons) => {
      state.pokemons = pokemons
    },
    [MUTATIONS.POKEMON_CHANGE_STATE]: (state, index) => {
      state.pokemons[index].isFavorite = !state.pokemons[index].isFavorite
    },
    [MUTATIONS.ADD_POKEN_ATTRIBUTES]: (state, { index, attributes }) => {
      state.pokemons[index].attributes = attributes
    }
  },
  actions: {
    [ACTIONS.APP_INIT]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        getPokemonList().then(serviceList => {
          const pokemons = serviceList.map((p, i) => {
            return {
              id: p.name,
              name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
              isFavorite: false,
              attributes: {},
              index: i
            }
          })
          commit(MUTATIONS.SET_POKEMONS, pokemons)
          resolve()
        }).catch(error => {
          console.log(error);
          alert(`Error: ${error}`)
          reject(error)
        })
      })
    },
    [ACTIONS.POKEMON_SELECT]: ({ commit, state }, index) => {
      return new Promise((resolve, reject) => {
        const pokemon = state.pokemons[index]
        if(Object.keys(pokemon.attributes).length === 0) {
          getPokemonInfoByName(pokemon.id).then(pokemonProperties => {
            const attributes = {
              weight: pokemonProperties.weight,
              height: pokemonProperties.height,
              types: pokemonProperties.types.reduce((acc, item, index) => {
                const prefix = index === 0?'':', '
                const str = item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
                return acc + prefix + str 
              }, ''),
              sprite: pokemonProperties.sprites.front_default
            }
            commit(MUTATIONS.ADD_POKEN_ATTRIBUTES, { index, attributes })
            resolve()
          }).catch(error => {
            console.log(error);
            alert(`Error: ${error}`)
            reject(error)
          })
        } else {
          resolve()
        }
      })
    }
  },
  modules: {
  }
})

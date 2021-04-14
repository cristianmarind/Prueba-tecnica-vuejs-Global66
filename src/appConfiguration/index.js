import GetStartedPicture from "@/assets/GetStartedPicture.svg"
import Pokeball from "@/assets/Pokeball.svg"
import SearchIcon from "@/assets/SearchIcon.svg"
import ActiveFavoriteIcon from "@/assets/ActiveFavoriteIcon.svg"
import InactiveFavoriteIcon from "@/assets/InactiveFavoriteIcon.svg"
import AllFilterIcon from "@/assets/AllFilterIcon.svg"
import FavoritesFilterIcon from "@/assets/FavoritesFilterIcon.svg"
import BackgroundPokemonDetail from "@/assets/BackgroundPokemonDetail.svg"
import CloseIcon from "@/assets/CloseIcon.svg"

export const POKEMON = {
  id: '',
  name: '',
  isFavorite: false,
  attributes: {},
  index: ''
}

export const landingPageConfiguration = {
  title: "Welcome to Pokédex",
  paragraph: "The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.",
  img: GetStartedPicture,
  actionLabel: "Get started"
}

export const FILTERS = {
  FAVORITES: 'favorites',
  NONE: 'no-filter'
}

export const MUTATIONS = {
  SET_POKEMONS: 'setPokemons',
  POKEMON_CHANGE_STATE: 'pokemonChangeState',
  ADD_POKEN_ATTRIBUTES: 'addPokemonAttributes'
}

export const ACTIONS = {
  APP_INIT: 'pokemonAppInit',
  POKEMON_SELECT: 'pokemonSelect'
}

export const pokemonPreferencePageConfiguration = {
  searchBar: {
    placeholder: 'Search',
    searchIconImg: SearchIcon
  },
  loadingImg: Pokeball,
  list: {
    favoriteIcon: {
      active: ActiveFavoriteIcon,
      inactive: InactiveFavoriteIcon
    }
  },
  filters: [
    {
      label: 'All',
      icon: AllFilterIcon,
      event: FILTERS.NONE
    },
    {
      label: 'Favorites',
      icon: FavoritesFilterIcon,
      event: FILTERS.FAVORITES
    }
  ],
  voidResult: {
    message: {
      title: 'Uh-oh!',
      text: 'You look lost on your journey!',
      actionText: 'Go back home'
    }
  },
  pokemonDetail: {
    backGroundImage: BackgroundPokemonDetail,
    labelAttributesForView: {
      name: 'Name',
      weight: 'Weight',
      height: 'Height',
      types: 'Types'
    },
    shareLabel: 'Share to my friends',
    stateVisualization: {
      active: ActiveFavoriteIcon,
      inactive: InactiveFavoriteIcon
    },
    closeIcon: CloseIcon
  }
}
<template>
  <div>
    <div v-if="isLoading" class="loadingContainer">
      <div class="loadingDiv">
        <img :src="configuration.loadingImg" alt="" />
      </div>
    </div>
    <div v-else class="container-fluid">
      <div class="row justify-content-center pt-5">
        <div class="col-12 col-sm-11 col-md-8 col-lg-6 d-flex flex-column">
          <div class="custom-input mb-5">
            <div>
              <img :src="configuration.searchBar.searchIconImg" />
            </div>
            <input
              v-model="search"
              class="font-size-normal"
              type="text"
              :placeholder="configuration.searchBar.placeholder"
            />
          </div>
          <div v-if="pokemons.length === 0" class="text-center">
            <div class="mt-5 mb-3">
              <span 
                class="font-weight-bold font-size-large" 
                v-text="configuration.voidResult.message.title" />
            </div>
            <div>
              <span class="font-size-normal" v-text="configuration.voidResult.message.text" />
            </div>
            <div class="d-flex justify-content-center pt-5">
              <button
                @click="handleRefreshFilters"
                class="custom-btn custom-btn-primary"
                v-text="configuration.voidResult.message.actionText"
              />
            </div>
          </div>
          <div class="d-flex flex-column">
            <ListManagement
              @selectItem="handleSelectItem"
              @changeItemState="handleChangeItemState"
              :items="pokemons"
              :configuration="configuration.list"
            />
            <div class="my-5" />
          </div>
        </div>
      </div>
      <div class="fixed-bottom bg-white py-2 shadowFilter">
        <Filters
          v-model="filter"
          :configuration="configuration.filters"
        />
      </div>
      <b-modal ref="modalItem" hide-footer hide-header class="px-0">
        <ItemManagement
          @changeItemState="handleChangeItemState"
          @close="handleCloseModal"
          :index="currentItem.index"
          :name="currentItem.name"
          :isFavorite="currentItem.isFavorite"
          :attributes="currentItem.attributes"
          :configuration="configuration.pokemonDetail"
        />
      </b-modal>
    </div>
  </div>
</template>

<script>
import {
  pokemonPreferencePageConfiguration,
  FILTERS,
  POKEMON,
} from "@/appConfiguration";
import ListManagement from "@/components/pokemonPreference/ListManagement";
import Filters from "@/components/pokemonPreference/Filters";
import ItemManagement from "@/components/pokemonPreference/ItemManagement";
import { mapState } from "vuex";

export default {
  components: {
    ListManagement,
    Filters,
    ItemManagement,
  },
  data() {
    return {
      configuration: pokemonPreferencePageConfiguration,
      search: "",
      filter: "no-filter",
      currentItem: POKEMON,
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    this.$store.dispatch("pokemonAppInit").then(() => {
      this.isLoading = false;
    });
  },
  computed: {
    ...mapState({
      pokemonsState: (state) => {
        return state.pokemons;
      },
    }),
    pokemons() {
      return this.pokemonsState.filter((pokemon) => {
        let isValid;
        if (this.search) {
          isValid =
            pokemon.name
              .toString()
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) >= 0;
          if (!isValid) return false;
        }
        if (this.filter === FILTERS.FAVORITES) {
          isValid = pokemon.isFavorite;
          if (!isValid) return false;
        }
        return true;
      });
    },
  },
  methods: {
    handleSelectItem(index) {
      const currentPokemon = this.pokemons[index];
      this.$store.dispatch("pokemonSelect", currentPokemon.index);
      this.currentItem = currentPokemon
      this.$refs["modalItem"].show();
    },
    handleChangeItemState(index) {
      this.$store.commit("pokemonChangeState", index);
    },
    handleCloseModal() {
      this.$refs["modalItem"].hide();
    },
    handleRefreshFilters() {
      this.search = ''
      this.filter = ''
    }
  },
};
</script>

<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.loadingContainer {
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loadingContainer img {
  animation: rotate 4s infinite;
}
.shadowFilter {
  box-shadow: 0 1.5em 1.5em 1.1em #000 !important;
}
</style>
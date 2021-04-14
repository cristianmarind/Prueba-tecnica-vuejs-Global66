<template>
  <div>
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="d-flex align-items-center bg-white rounded my-2 px-3 py-2"
    >
      <div 
        @click="handleSelectItem(index)" 
        class="w-100 mr-auto cursor-pointer" >
        <span 
          class="font-size-xx-normal"
          v-text="item.name" 
        />
      </div>
      <div @click="handleChangeItemState(index)" class="ml-3">
        <ItemState 
          :configuration="configuration.favoriteIcon" 
          :state="item.isFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemState from "@/components/pokemonPreference/ItemState"

export default {
  props: ["items", "configuration"],
  components: {
    ItemState
  },
  methods: {
    handleSelectItem(index) {
      this.$emit("selectItem", index)
    },
    handleChangeItemState(index) {
      this.$emit("changeItemState", index)
    }
  }
};
</script>

<style scoped>

</style>
<template>
  <div class="d-flex flex-column position-relative">
    <div @click="handleCloseModal" class="closeButton">
      <img :src="configuration.closeIcon" >
    </div>
    <div
      :style="`background-image: url(${configuration.backGroundImage})`"
      class="customBg d-flex justify-content-center"
    >
      <div class="pokemon w-100">
        <img class="w-100 h-auto" :src="attributes.sprite" />
      </div>
    </div>
    <div class="px-4 py-4 font-size-normal">
      <div>
        <span class="font-size-normal font-weight-bold">{{
          `${configuration.labelAttributesForView.name}: `
        }}</span>
        <span class="font-size-normal" v-text="name" />
        <hr />
      </div>
      <div>
        <span class="font-size-normal font-weight-bold">{{
          `${configuration.labelAttributesForView.weight}: `
        }}</span>
        <span class="font-size-normal" v-text="attributes.weight" />
        <hr />
      </div>
      <div>
        <span class="font-size-normal font-weight-bold">{{
          `${configuration.labelAttributesForView.height}: `
        }}</span>
        <span class="font-size-normal" v-text="attributes.height" />
        <hr />
      </div>
      <div>
        <span class="font-size-normal font-weight-bold">{{
          `${configuration.labelAttributesForView.types}: `
        }}</span>
        <span class="font-size-normal" v-text="attributes.types" />
        <hr />
      </div>
      <div class="d-flex align-items-center">
        <button
          @click="handleShare"
          class="custom-btn custom-btn-primary mr-auto"
          v-text="configuration.shareLabel"
        />
        <div @click="handleChangeItemState">
          <ItemState
            :configuration="configuration.stateVisualization"
            :state="isFavorite"
          />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import ItemState from "@/components/pokemonPreference/ItemState";
import copy from 'copy-to-clipboard';

export default {
  props: ["index", "name", "isFavorite", 
  "attributes", "configuration"],
  components: {
    ItemState,
  },
  methods: {
    handleChangeItemState() {
      this.$emit("changeItemState", this.index)
    },
    handleCloseModal() {
      this.$emit("close")
    },
    handleShare() {
      const a = `${this.configuration.labelAttributesForView.weight}: ${this.attributes.weight}`
      const b = `${this.configuration.labelAttributesForView.height}: ${this.attributes.height}`
      const c = `${this.configuration.labelAttributesForView.types}: ${this.attributes.types}`
      const cop = `${this.name}, ${a}, ${b}, ${c}`
      copy(cop)
    }
  }
};
</script>

<style scoped>
.customBg {
  background-repeat: no-repeat;
  background-size: cover;
}
.pokemon {
  max-width: 15em;
}
.closeButton{
  position: absolute;
  top: .5em;
  right: .5em;
  max-width: 3em;
}
</style>
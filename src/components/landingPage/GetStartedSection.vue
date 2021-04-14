<template>
  <div class="d-flex flex-column text-center">
    <div class="d-flex justify-content-center">
      <div class="mainImage">
        <img class="w-100 h-auto" :src="img" />
      </div>
    </div>
    <div class="mt-5 mb-3">
      <span class="font-weight-bold font-size-large" v-text="title" />
    </div>
    <div>
      <span class="font-size-normal" v-text="paragraph" />
    </div>
    <div class="d-flex justify-content-center pt-5">
      <router-link to="/pokemonPreference"> 
        <button 
          class="custom-btn custom-btn-primary"
          v-text="actionLabel"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "paragraph", "img", "actionLabel"],
  data() {
    return {
    }
  },
  components: {
  }
};
</script>

<style scoped>
.mainImage{
  max-width: 25em;
}
</style>
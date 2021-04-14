<template>
  <div class="d-flex justify-content-center">
    <template v-for="(item, index) in configuration">
      <button
        @click="handleApply(item.event)"
        :key="index"
        :class="`custom-btn custom-btn-${value === item.event?'primary':'secundary'} mx-2`"
      >
        <div class="mr-2">
          <img class="w-100 h-auto" :src="item.icon" />
        </div>
        <span class="font-size-normal" v-text="item.label" />
      </button>
    </template>
  </div>
</template>

<script>
export default {
  props: ["configuration", "value"],
  methods: {
    handleApply(event) {
      this.$emit('input', event)
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="imageState cursor-pointer">
    <img
      v-if="state"
      class="w-100 h-auto"
      :src="configuration.active"
    />
    <img
      v-else
      class="w-100 h-auto"
      :src="configuration.inactive"
    />
  </div>
</template>

<script>
export default {
  props: ['configuration', 'state']
};
</script>

<style>
.imageState{
  width: 3em;
  background-color: var(--custom-light-color);
  border-radius: 50%;
  padding: .4em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="w-100 py-5" />
      <div class="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-4">
        <GetStartedSection
          :title="configuration.title"
          :paragraph="configuration.paragraph"
          :img="configuration.img"
          :actionLabel="configuration.actionLabel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GetStartedSection from "@/components/landingPage/GetStartedSection.vue";
import { landingPageConfiguration } from '@/appConfiguration'

export default {
  components: {
    GetStartedSection,
  },
  data() {
    return {
      configuration: landingPageConfiguration
    }
  }
};
</script>

<style>
</style>
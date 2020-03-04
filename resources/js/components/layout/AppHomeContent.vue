<template>
  <v-container fluid>
    <v-row justify="center">
      <app-home-content-card
        v-for="(option,index) in options"
        :key="index"
        :title="option.title"
        :body="option.body"
        :img="option.pic"
      />
    </v-row>
    <app-home-content-under-construction class="mt-12" />
    <app-home-content-samples class="mt-12" />
    <app-home-content-post-slider class="mt-12" />
  </v-container>
</template>

<script>
import AppHomeContentCard from "./AppHomeContentCard";
import AppHomeContentPostSlider from "./AppHomeContentPostSlider";
import AppHomeContentUnderConstruction from "./AppHomeContentUnderConstruction";
import AppHomeContentSamples from "./AppHomeContentSamples";

export default {
  name: "AppHomeContent",
  data() {
    return {
      isActive: false,
      options: []
    };
  },
  created() {
    axios
      .get("/api/option")
      .then(res => (this.options = res.data.data))
      .catch(err => console.log(err));
  },
  components: {
    AppHomeContentCard,
    AppHomeContentUnderConstruction,
    AppHomeContentPostSlider,
    AppHomeContentSamples
  }
};
</script>

<style scoped>
</style>

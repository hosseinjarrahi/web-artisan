<template>
  <v-container>
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <ul>
          <router-link
            tag="li"
            v-for="(link,index) in links"
            :key="index"
            class="px-3 py-2"
            active-class="activeer"
            v-scroll-to="link.scroll"
            :to="link.to"
          >{{ link.title }}</router-link>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AppHeaderNavigationLinks",
  props: {
    links: { default: [] }
  }
};
</script>

<style scoped>
li {
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.5s;
}

li:hover {
  background-color: white;
  color: #0072ff;
  transform: translateY(-3px);
  box-shadow: 0px 3px 6px rgba(47, 53, 66, 0.5);
}
.activeer {
  border-radius: 10px;
  background-color: #fff;
  color: #0072ff !important;
  box-shadow: 0px 3px 6px rgba(47, 53, 66, 0.5);
}
ul {
  list-style-type: none;
}
a {
  color: white;
}
</style>

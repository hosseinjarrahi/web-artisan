<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="11" md="4" v-for="(tariff,index) in tariffs" :key="index" >
        <app-tariffs-table :tariff="tariff"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppTariffsTable from "./layout/AppTariffsTable";
export default {
  components: {
    AppTariffsTable
  },
  data() {
    return {
      tariffs: [
        {
          title: "پلن فروشگاهی",
          price: 3000000,
          startColor: "red",
          techs: ["Jquery", "Bootstrap", "Laravel", "Php7"],
          items: [
            { name: "سبد خرید", value: "mdi-check" },
            { name: "اسلایدر اختصاصی", value: "mdi-check" },
            { name: "فلان", value: "mdi-check" }
          ]
        },
        {
          title: "پلن شرکتی",
          price: 3000000,
          startColor: "gray",
          techs: ["Jquery", "Bootstrap", "Laravel", "Php7"],
          items: [
            { name: "سبد خرید", value: "mdi-check" },
            { name: "اسلایدر اختصاصی", value: "mdi-check" },
            { name: "فلان", value: "mdi-check" }
          ]
        },
        {
          title: "پلن شخصی",
          price: 3000000,
          startColor: "yellow",
          techs: ["Jquery", "Bootstrap", "Laravel", "Php7"],
          items: [
            { name: "سبد خرید", value: "mdi-check" },
            { name: "اسلایدر اختصاصی", value: "mdi-check" },
            { name: "فلان", value: "mdi-check" }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>

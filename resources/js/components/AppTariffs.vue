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
      tariffs: []
    };
  },
  created(){
      axios.get('/api/plan')
      .then((res) => {
          this.tariffs = res.data.data;
          console.log(this.tariffs);
      }).catch((err) => {
          console.log(err);
      });
  }
};
</script>

<style>
</style>

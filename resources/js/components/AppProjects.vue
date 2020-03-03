<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11" md="5">
        <v-img src="/img/follow.png" />
      </v-col>
      <v-col cols="11" md="7">
        <h2 class="text-center mb-3">پروژه های شما</h2>
        <app-projects-table :items="items" description="توضیحات" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppProjectsTable from './layout/AppProjectsTable';
export default {
    components:{
        AppProjectsTable
    },
    data(){
        return{
            items:[
                {name:'صفحه لاگین',state:true,time:5},
                {name:'صفحه لاگین',state:false,time:6},
                {name:'صفحه لاگین',state:true,time:1},
                {name:'صفحه لاگین',state:false,time:10},
            ]
        }
    }
};
</script>

<style>
</style>

<template>
    <v-row justify="center" align="center" class="mt-12">

        <v-col cols="11" md="3" class="top">
            <v-img src="/img/modern-web.png" alt="پروژه های در دست ساخت"/>
        </v-col>

        <v-col cols="11" md="9">
            <app-home-content-under-construction-table :sites="sites"/>
        </v-col>
    </v-row>
</template>

<script>
    import AppHomeContentUnderConstructionTable from './AppHomeContentUnderConstructionTable'
    export default {
        name: "AppHomeContentUnderConstruction",
        components:{
            AppHomeContentUnderConstructionTable
        },
        data(){
            return {
                sites:[
                    {
                        name:'ایران باگت',
                        complete:60,
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
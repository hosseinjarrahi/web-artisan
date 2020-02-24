<template>
    <v-app>
        <v-content>
            <app-header/>
            <router-view></router-view>
            <app-footer/>
        </v-content>
    </v-app>
</template>

<script>
    import AppHeader from './layout/AppHeader'
    import AppFooter from './layout/AppFooter'
    export default {
        components:{
            AppHeader,
            AppFooter,
        }
    }
</script>

<template>
    <v-app class="font">
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

<style>
    @font-face {
        font-family: samim;
        src: url('/font/samim/Samim.eot');
        src: url('/font/samim/Samim.eot#iefix') format('FontName-opentype'),
        url('/font/samim/Samim.woff') format('woff'),
        url('/font/samim/Samim.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    .font{
        font-family: samim;
    }

    .v-application a{
        text-decoration: none;
        color: unset !important;
    }

    a,a:hover,a:active,a:visited{
        text-decoration: none;
        color: unset;
    }

</style>

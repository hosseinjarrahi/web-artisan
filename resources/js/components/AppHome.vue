<template>
    <v-container fluid class="pa-0 ma-0">
        <app-home-banner/>
        <app-home-content/>
    </v-container>
</template>

<script>
    import AppHomeBanner from './layout/AppHomeBanner'
    import AppHomeContent from './layout/AppHomeContent'

    export default {
        components: {
            AppHomeBanner,
            AppHomeContent
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
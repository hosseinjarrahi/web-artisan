<template>
    <v-container fluid>
        <v-row justify="center">
            <app-home-content-card title="طراحی چشم نواز" body="نمنه" img="/svg/monitor-tv-svgrepo-com.svg"/>
            <app-home-content-card title="واکنش گرا" body="نمنه" img="/svg/responsive-svgrepo-com.svg"/>
            <app-home-content-card title="امنیت بالا" body="نمنه" img="/svg/computing-cloud-download-svgrepo-com.svg"/>
        </v-row>
        <app-home-content-under-construction/>
    </v-container>
</template>

<script>
    import AppHomeContentCard from './AppHomeContentCard';
    import AppHomeContentUnderConstruction from './AppHomeContentUnderConstruction';

    export default {
        name: "AppHomeContent",
        data() {
            return {
                isActive: false
            }
        },
        components: {
            AppHomeContentCard,
            AppHomeContentUnderConstruction
        }
    }
</script>

<style scoped>

</style>
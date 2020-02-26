<template>
    <v-card elevation="16" class="mx-auto my-12" max-width="400">
        <v-img height="250" :src="sample.img"/>

        <v-card-title>{{ sample.title }}</v-card-title>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
            </v-row>

            <div class="my-4 subtitle-1">
                {{ sample.price + ' هزینه پیاده سازی ' }}
            </div>

            <div>{{ sample.description }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>تکنولوژی ها</v-card-title>

        <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>

                <v-chip v-for="(tech,index) in sample.techs" :key="index">{{ tech }}</v-chip>

            </v-chip-group>
        </v-card-text>

    </v-card>
</template>

<script>
    export default {
        name: "AppHomeContentSample",
        props: {
            sample: {default: {}}
        }
    }
</script>

<style scoped>

</style>
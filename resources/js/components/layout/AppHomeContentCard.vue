<template>
    <v-col cols="10" md="3" lg="2" class="my-2 text-center">
        <v-row justify="center" class="parent-col">
            <div class="border"></div>
            <v-container>
            <v-col cols="12">
                <v-img :src="img" :alt="title"/>
            </v-col>
            <v-col cols="12">
                <h2>{{ title }}</h2>
            </v-col>
            <v-col cols="12">
                <p class="text-justify pa-3">{{ body }}</p>
            </v-col>
            </v-container>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        name: "AppHomeContentCard",
        props: {
            title: {default: ''},
            body: {default: ''},
            img: {default: ''}
        }
    }
</script>

<style scoped>
    .parent-col {
        position: relative;
    }

    .border {
        position: absolute;
        top: 130px;
        border-radius: 20px;
        border: 1px dashed black;
        width: 90%;
        height: 80%;
    }
</style>
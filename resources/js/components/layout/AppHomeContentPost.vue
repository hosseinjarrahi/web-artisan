<template>
    <v-card max-width="500" class="mx-3">
        <v-list-item>
            <v-list-item-avatar color="grey">
                <v-img :src="content.avatar" :alt="content.author"/>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{ content.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ content.author }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-img :src="content.img" height="194"></v-img>

        <v-card-text>
            {{ content.shortDescription }}
        </v-card-text>

        <v-card-actions>
            <v-btn text color="deep-purple accent-4">
                ادامه مطلب
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

    export default {
        name: "AppHomeContentPostSlider",
        props: {
            content : {default:{}}
        },
        data() {
            return {
            }
        },
    }
</script>

<style scoped>

</style>
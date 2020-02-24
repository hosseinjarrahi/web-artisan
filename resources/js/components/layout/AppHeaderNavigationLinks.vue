<template>
    <v-container>
        <v-row justify="center">
            <v-col class="text-center" cols="12">
                <ul>
                    <li class="px-3 py-2" v-for="link in links">{{ link.title }}</li>
                </ul>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "AppHeaderNavigationLinks",
        props: {
            links: {default: []}
        }
    }
</script>

<style scoped>
    li {
        border-radius: 10px;
        cursor: pointer;
        display: inline-block;
        transition: all 0.5s;
    }

    li:hover {
        background-color: white;
        color: #0072ff;
        transform: translateY(-3px);
        box-shadow: 0px 3px 6px rgba(47, 53, 66,0.5);
    }

    ul {
        list-style-type: none;
    }
</style>
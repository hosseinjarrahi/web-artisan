<template>
    <div>
        <v-toolbar flat dark class="background-gradient">
            <!--            <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
            <v-img src="/img/logo.png" alt="" max-width="50px"/>

            <v-toolbar-title class="mx-2">وب آرتیسان</v-toolbar-title>

            <v-spacer></v-spacer>

            <div v-if="!isMobile">
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </div>

            <v-btn icon v-if="isMobile">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "AppHeaderNavigation"
    }
</script>

<style scoped>
    .background-gradient {
        background: #00c6ff; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #00c6ff, #0072ff); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #00c6ff, #0072ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>
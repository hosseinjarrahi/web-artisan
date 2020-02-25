<template>
    <div>
        <v-toolbar flat dark class="background-gradient">
            <router-link to="/">
                <v-img src="/img/logo.png" alt="" max-width="50px"/>
            </router-link>
            <v-toolbar-title class="mx-2"><h1 style="font-size: 1.2rem;">وب آرتیسان</h1></v-toolbar-title>

            <v-spacer></v-spacer>

            <div v-if="!isMobile">
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon @click="open = !open">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </div>

            <v-btn icon v-if="isMobile && !scroll" @click="clicked = !clicked" v-scroll:#scroll-target="hideExtension">
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <template #extension v-if="!isMobile">
                <app-header-navigation-links :links="navLinks"/>
            </template>
        </v-toolbar>

        <app-header-navigation-drop-down :links="navLinks" v-if="openTheMenu"/>
        <app-header-login-form/>
    </div>
</template>

<script>
    import AppHeaderNavigationLinks from './AppHeaderNavigationLinks';
    import AppHeaderNavigationDropDown from './AppHeaderNavigationDropDown';
    import AppHeaderLoginForm from './AppHeaderLoginForm';

    export default {
        name: "AppHeaderNavigation",
        components: {
            AppHeaderNavigationLinks,
            AppHeaderNavigationDropDown,
            AppHeaderLoginForm
        },
        data() {
            return {
                links: [
                    {icon: 'mdi-home', to: '', title: 'خانه', show: true},
                    {icon: 'mdi-information', to: '', title: 'درباره ما', show: true},
                    {icon: 'mdi-transit-connection-variant', to: '', title: 'ارتباط با ما', show: true},
                    {icon: 'mdi-currency-usd', to: '', title: 'تعرفه ها', show: true},
                    {icon: 'mdi-animation', to: '', title: 'خدمات', show: true},
                    {icon: 'mdi-sitemap', to: '', title: 'نمونه کارها', show: true},
                    {icon: 'mdi-file-document', to: '', title: 'پیگیری پروژه', show: true}
                ],
                clicked: false,
                scroll: false
            }
        },
        computed: {
            navLinks() {
                return this.links.filter(val => {
                    return val.show;
                });
            },
            openTheMenu() {
                return this.isMobile && this.clicked;
            }
        },
        methods: {
            hideExtension() {
                this.scroll = true;
            }
        }
    }
</script>

<style scoped>
    .background-gradient {
        background: #00c6ff; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #00c6ff, #0080ff); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #00c6ff, #0080ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>
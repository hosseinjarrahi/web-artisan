<template>
    <div>
        <v-toolbar :flat="!scroll" dark :class="['background-gradient',{ 'nav': scroll}]">
            <router-link to="/">
                <v-img src="/img/logo.png" alt="" max-width="50px"/>
            </router-link>
            <v-toolbar-title class="mx-2"><h1 style="font-size: 1.2rem;">وب آرتیسان</h1></v-toolbar-title>

            <v-spacer></v-spacer>

            <div>

                <v-menu offset-y :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-btn icon dark v-on="on">
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                <v-form>
                                    <v-text-field label="جست و جو...">
                                        <template #append>
                                            <v-btn color="primary" icon>
                                                <v-icon>mdi-magnify</v-icon>
                                            </v-btn>
                                        </template>
                                    </v-text-field>
                                </v-form>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>



                <v-btn icon @click="open = !open">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </div>

            <v-btn icon v-if="!isMobile && scroll" @click="openExtension = !openExtension">
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-btn icon v-if="isMobile" @click="clicked = !clicked">
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <template #extension v-if="openIt">
                <app-header-navigation-links :links="navLinks"/>
            </template>
        </v-toolbar>
        <app-header-navigation-drop-down :class="{'drop-down' : scroll}" :links="navLinks" v-if="openTheMenu"/>

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
        created() {
            window.onscroll = () => {
                this.scroll = document.documentElement.scrollTop >= 100;
            }
            window.EventBus.$on('closeDropDown',()=>{
                this.clicked = false;
            });
        },
        data() {
            return {
                links: [
                    {icon: 'mdi-transit-connection-variant', to: '/contact-us', title: 'ارتباط با ما', show: true},
                    {icon: 'mdi-collaboration', to: '/collaboration', title: 'همکاری با ما', show: true},
                    {icon: 'mdi-currency-usd', to: '/tariffs', title: 'تعرفه ها', show: true},
                    {icon: 'mdi-file-document', to: '/projects', title: 'پروژهای شما', show: true}
                ],
                clicked: false,
                scroll: false,
                openExtension:false
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
            },
            openIt(){
                return !this.isMobile && ((this.scroll && this.openExtension) || (!this.scroll));
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .background-gradient {
        background: #00c6ff; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #00c6ff, #0080ff); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #00c6ff, #0080ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .nav{
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        z-index:1;
        opacity: 0.9;
    }
    .drop-down{
        position: fixed;
        top: 55px;
        left: 0;
        width:100%;
        z-index:1;
        opacity: 0.9;
    }
</style>

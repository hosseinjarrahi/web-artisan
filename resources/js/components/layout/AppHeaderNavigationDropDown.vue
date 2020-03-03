<template>

    <v-container fluid class="ma-0 background-gradient">
        <v-row justify="center">
            <v-col>

                <v-list color="rgba(255,255,255,0.5)">

                    <v-list-item @click="clicked(link.to)" v-for="(link,index) in links" :key="index">
                        <v-list-item-icon>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="open = !open">
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>ورود / ثبت نام</v-list-item-title>
                    </v-list-item>

                </v-list>

            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "AppHeaderNavigationDropDown",
        props:{
            links:{default:[]}
        },
        methods:{
            clicked(link){
                this.$router.push(link);
                window.EventBus.$emit('closeDropDown');
                this.goToUp();
            }
        }
    }
</script>

<style scoped>

</style>

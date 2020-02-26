<template>
    <v-container fluid>
        <v-data-iterator :items="sites" hide-default-footer>
            <template v-slot:default="props">
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-card-title class="subheading font-weight-bold">
                                <v-icon color="black">mdi-excavator</v-icon>
                                <span>پروژه های در دست ساخت</span>
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-list dense>
                                <v-list-item v-for="site in sites">
                                    <v-list-item-content class="align-end">
                                        <v-progress-linear
                                                :color="site.progressbarColor"
                                                height="30"
                                                :value="site.complete"
                                                striped
                                        >{{ site.name }} / {{ site.complete | percentage }}
                                        </v-progress-linear>
                                    </v-list-item-content>

                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </template>

        </v-data-iterator>
    </v-container>
</template>

<script>
    export default {
        name: "AppHomeContentUnderConstructionTable",
        props: {
            sites: {default: []},
        },
        data() {
            return {}
        },
        filters: {
            percentage(val) {
                return val + '%';
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="text-center">
        <v-dialog v-model="open" width="500">

            <div>
                <v-tabs v-model="tab" centered>
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#tab-1">
                        <span>ورود</span>
                    </v-tab>
                    <v-tab href="#tab-2">
                        <span>ثبت نام</span>
                    </v-tab>
                    <v-tab href="#tab-3">
                        <span>فراموشی رمز</span>
                    </v-tab>

                    <v-tab-item value="tab-1">

                        <v-card>
                            <v-card-title primary-title>
                                فرم ورود
                            </v-card-title>

                            <v-card-text>

                                <v-form>
                                    <v-text-field label="ایمیل">
                                        <template #append>
                                            <v-icon>mdi-email</v-icon>
                                        </template>
                                    </v-text-field>
                                    <v-text-field type="password" label="رمز عبور">
                                        <template #append>
                                            <v-icon>mdi-eye</v-icon>
                                        </template>
                                    </v-text-field>
                                </v-form>

                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-btn color="primary" @click="dialog = false">
                                    <v-icon>mdi-login-variant</v-icon>
                                    <span>ورود</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-tab-item>


                    <v-tab-item value="tab-2">

                        <v-card>
                            <v-card-title primary-title>
                                فرم ثبت نام
                            </v-card-title>

                            <v-card-text>

                                <v-form>

                                    <v-text-field label="نام و نام خانوادگی">
                                        <template #append>
                                            <v-icon>mdi-ab-testing</v-icon>
                                        </template>
                                    </v-text-field>

                                    <v-text-field label="ایمیل">
                                        <template #append>
                                            <v-icon>mdi-email</v-icon>
                                        </template>
                                    </v-text-field>
                                    <v-text-field type="password" label="رمز عبور">
                                        <template #append>
                                            <v-icon>mdi-eye</v-icon>
                                        </template>
                                    </v-text-field>

                                </v-form>

                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                    <v-btn color="primary" @click="dialog = false">
                                    <v-icon>mdi-account-plus</v-icon>
                                    <span>ثبت نام</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-tab-item>

                    <v-tab-item value="tab-3">
                        <v-card>
                            <v-card-title primary-title>
                                فراموشی رمز عبور
                            </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <v-text-field label="ایمیل">
                                        <template #append>
                                            <v-icon>mdi-email</v-icon>
                                        </template>
                                    </v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                    <v-btn color="primary" @click="dialog = false">
                                    <v-icon>mdi-account-plus</v-icon>
                                    <span>ارسال ایمیل</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-tab-item>


                </v-tabs>
            </div>


        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "AppHeaderLoginForm",
        data(){
            return {
                tab:null,
                tabs:3,
                text:'as'
            }
        }
    }
</script>

<style scoped>

</style>

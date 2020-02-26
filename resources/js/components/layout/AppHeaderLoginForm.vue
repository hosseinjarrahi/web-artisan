<template>
    <div class="text-center">
        <v-dialog v-model="open" width="500">
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
                    <v-spacer></v-spacer>
                    <v-btn color="info" @click="dialog = false">
                        <v-icon>mdi-account-plus</v-icon>
                        <span>ثبت نام</span>
                    </v-btn>
                    <v-btn color="info" @click="dialog = false">
                        <v-icon>mdi-lock-question</v-icon>
                        <span>فراموشی رمز</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "AppHeaderLoginForm",
    }
</script>

<style scoped>

</style>
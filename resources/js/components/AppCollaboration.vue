<template>
  <v-container class="mt-5">
    <v-row justify="center" align="center">
      <v-col cols="11" md="5">
        <v-img src="/img/collaboration.png" />
      </v-col>

      <v-col cols="11" md="5">
        <v-card class="mx-auto" elevation="10">
          <v-card-text>
            <h3 class="text--primary">فرم همکاری</h3>
            <div>
              <v-form>
                <v-text-field label="نام و نام خانوادگی" />
                <v-text-field label="ایمیل" />
                <v-text-field label="شماره تلفن (اختیاری)" />
                <v-combobox v-model="select" :items="langs" label="مهرات های شما" multiple chips>

                </v-combobox>
                <v-textarea solo label="توضیحات" />
              </v-form>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary">ارسال</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        select:[],
        langs:[
            'php',
            'laravel',
            'vuejs',
            'vue native',
            'css',
            'html',
            'java',
            'android',
            'api',
            'react',
            'react native',
            'c#',
            'swift',
            'javascript',
            'git',
            'sass',
            'less',
        ]
    };
  }
};
</script>

<style>
</style>

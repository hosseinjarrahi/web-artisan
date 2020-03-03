<template>
  <v-container class="mt-5">
    <v-row justify="center">

      <v-col cols="11" md="5">
        <v-img src="/img/contact-us.png"/>
      </v-col>

      <v-col cols="11" md="5">
        <v-card class="mx-auto" elevation="10">
          <v-card-text>
            <h3 class="text--primary">فرم ارتباط با ما</h3>
            <div>
              <v-form>
                <v-text-field label="نام و نام خانوادگی" />
                <v-text-field label="ایمیل" />
                <v-text-field label="شماره تلفن (اختیاری)" />
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
export default {};
</script>

<style>
</style>

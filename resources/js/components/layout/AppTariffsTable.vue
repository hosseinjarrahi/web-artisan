<template>
  <v-card :color="tariff.cardColor ? tariff.cardColor : 'white'" elevation="16" class="text-center my-3 hover">
    <v-card-title>
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-rating :value="5" :color="tariff.startColor" dense half-increments readonly size="20"></v-rating>
        </v-col>
        <v-col cols="12">
          <h3>{{ tariff.title }}</h3>
          <p class="subtitle-1">{{ 'شروع از ' + tariff.price + ' تومان '}}</p>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-data-table
        :headers="[{text:'ویژگی ها',value:'name'},{text:'-',value:'value'}]"
        :items="tariff.items"
        disable-pagination
        disable-filtering
        disable-sort
        hide-default-footer
        class="elevation-1"
      >
        <template #item.value="{ item }">
            <v-icon>{{ item.value }}</v-icon>
        </template>

      </v-data-table>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>تکنولوژی های مورد استفاده</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip v-for="(tech,index) in tariff.techs" :key="index">{{ tech }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
        <v-btn color="primary" block>انتخاب پلن</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  props: {
    tariff: { default: {} }
  }
};
</script>

<style>
.hover {
  transition: all 0.3s ease-out;
}
.hover:hover {
  transform: translateY(-10px);
}
</style>

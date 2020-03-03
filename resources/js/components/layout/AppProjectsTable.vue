<template>
  <v-card outlined>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>مراحل</th>
              <th>وضعیت</th>
              <th>زمان</th>
            </tr>
          </thead>
          <tbody>
            <tr
              :class="{'bg-complete' : item.state}"
              dark
              v-for="(item,index) in items"
              :key="index"
            >
              <td>{{ item.name }}</td>
              <td>
                <v-icon>{{ item.state | toString }}</v-icon>
              </td>
              <td>{{ item.time + ' روز '}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <p>
        <span>زمان تقریبی تا اتمام پروژه :</span>
        <span>{{ remindeTime + ' روز ' }}</span>
      </p>

      <v-card outlined>
        <v-card-title primary-title>اطلاعات پروژه</v-card-title>
        <v-card-text class="white-space">
          {{ description }}
        </v-card-text>
      </v-card>
    </v-card-text>

    <v-card-actions>
      <v-btn color="yellow" block>مشاهده سایت</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    items: { default: {} },
    description: { default: {} }
  },
  computed: {
    remindeTime() {
      let x = 0;
      this.items.filter(value => {
        x += value.state ? 0 : value.time;
      });
      return x;
    }
  },
  filters: {
    toString(value) {
      return value ? "mdi-check" : "mdi-close";
    }
  }
};
</script>

<style scoped>
.bg-complete {
  background-color: green;
}
.white-space{
    white-space: pre;
}
</style>

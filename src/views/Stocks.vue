<template>
  <section>
    <h1>Stocks Container</h1>
    <div class="row">
      <app-stock
        v-for="stock in stocks"
        :stock="stock"
        :key="stock.id"
        :sell="false"
        :funds="funds"
      ></app-stock>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Stock from "@/components/Stock.vue";

export default {
  name: "stocks",
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style lang="sass" scoped>
.row
  margin: 0;
</style>

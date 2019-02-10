<template>
  <section>
    <h1>Stocks Container</h1>
    <div class="row">
      <app-stock v-for="stock in stocks" :key="stock.id"></app-stock>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Stock from "@/components/Stock.vue";

export default {
  name: "stocks",
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 300 },
        { id: 3, name: "Twitter", price: 80 },
        { id: 4, name: "Apple", price: 900 }
      ]
    };
  },
  components: {
    appStock: Stock
  }
};
</script>

<style lang="sass" scoped>
.row
  margin: 0;
</style>

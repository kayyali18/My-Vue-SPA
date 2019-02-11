<template>
  <section>
    <h1>Portfolio Container</h1>
    <div class="row">
      <app-stock
        v-for="stock in stocks"
        :stock="stock"
        :key="stock.id"
        :sell="true"
      ></app-stock>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

// @ is an alias to /src
import Stock from "@/components/Stock.vue";

export default {
  name: "portfolio",
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  }
};
</script>

<style lang="sass" scoped>
.row
  margin: 0;
</style>

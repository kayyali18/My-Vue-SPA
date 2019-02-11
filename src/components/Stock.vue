<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <template v-if="sell">
          <h3 class="panel-title ">
            {{ stock.name }}
            <small
              >(Price: {{ stock.price }}) | Quantity {{ stock.quantity }}</small
            >
          </h3>
        </template>
        <template v-else>
          <h3 class="panel-title ">
            {{ stock.name }} <small>(Price: {{ stock.price }})</small>
          </h3>
        </template>
      </div>
      <form class="panel-body" @submit.prevent="dealStock">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="pull-right">
          <button
            v-if="!sell"
            class="btn btn-success"
            :disabled="
              hasFunds ||
                quantity <= 0 ||
                !Number.isInteger(Math.floor(parseInt(quantity)))
            "
          >
            {{ hasFunds ? "Insufficient Funds" : "Buy" }}
          </button>
          <button
            v-else
            class="btn btn-primary"
            :disabled="
              quantity > stock.quantity ||
                quantity <= 0 ||
                !Number.isInteger(Math.floor(parseInt(quantity)))
            "
          >
            Sell
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock", "sell", "funds"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    hasFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    },
    dealStock() {
      if (this.sell) this.sellStock();
      else this.buyStock();
    }
  }
};
</script>

<style lang="sass" scoped>

.panel

  margin-bottom: 2rem;
  margin-top: 2rem;

.panel-body
  display: flex;
  justify-content: space-between;
</style>

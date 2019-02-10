import Vue from "vue";
import Vuex from "vuex";

import stocks from "./modules/stocks";

Vue.use(Vuex); //make sure to Use VUEX

export default new Vuex.Store({
  modules: {
    stocks
  }
});

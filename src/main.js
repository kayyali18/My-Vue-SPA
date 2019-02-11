import Vue from "vue";
import VueResource from "vue-resource";

import App from "./App.vue";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueResource);

// Connect to firebase
Vue.http.options.root = "https://vuejs-stock-app-b633d.firebaseio.com/";

Vue.filter("currency", value => "$" + value.toLocaleString());

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

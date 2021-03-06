import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Portfolio from "./views/Portfolio";
import Stocks from "./views/Stocks";

Vue.use(Router); // Oh look we tell Vue to use Router

// Create new Router
export default new Router({
  mode: "history", //use history
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // needs webpack config
      component: About
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/stocks",
      name: "stocks",
      component: Stocks
    }
  ]
});

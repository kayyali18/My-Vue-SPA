<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/trading-logo.jpg" />
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr />
    <p>Your Funds: ${{ funds }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters({
      funds: "funds"
    })
  }
};
</script>

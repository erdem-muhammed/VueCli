<template>
  <div id="app">
  Current Bitcoin Rate:
  <ul>
    <li v-for="c in bitcoinRate" :key="c.id">
      {{ c.rate }}  {{ c.name }}
    </li>
  </ul>

  Current EUR: <span> {{ euroRate.rate }} </span>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  created()
  {
    this.$store.dispatch("initRate");
  },
computed:{
  ...mapState(["bitcoinRate"]),
  ...mapGetters(["euroRate", "dollarRate", "poundRate"])}
}
</script>

<style>
</style>

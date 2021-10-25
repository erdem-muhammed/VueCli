import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bitcoinRate: []
  },
  mutations: {
    addRate(state, payload)
    {
      state.bitcoinRate.push(payload)
    }
  },
  actions: {
    async initRate(context)
    {
      let response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      let result = await response.json();
      let i = 0;

      for(let a in result.bpi)
      {
        context.commit("addRate", {id: i, name: result.bpi[a].code, kurs: result.bpi[a].rate_float})
          i++;
      }
    }
  },
  modules: {
  }
})

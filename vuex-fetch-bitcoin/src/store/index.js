import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bitcoinRate: []
  },
  getters:
  {
    euroRate(state)
    {
      return state.bitcoinRate.find(el => el.name == "EUR")
    },
    dollarRate(state)
    {
      return state.bitcoinRate.find(el => el.name == "USD")
    },
    poundRate(state)
    {
      return state.bitcoinRate.find(el => el.name == "GPB")
    }
  },
  mutations: {
    addRate(state, payload)
    {
      state.bitcoinRate.push(payload)
    },
    updateRate(state, payload)
    {
      state.bitcoinRate.splice(payload.id, 1, {id: payload.id, name: state.bitcoinRate[payload.id].name, rate: payload.rate})
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
        context.commit("addRate", {id: i, name: result.bpi[a].code, rate: result.bpi[a].rate_float})
          i++;
      }
    },
    async updateRate(context)
    {
      let response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      let result = await response.json();

      let i = 0;
      for(let a in result.bpi)
      {
        context.commit("updateRate", {id: 1, rate: result.bpi[a].rate_float})
        i++;
      }
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeClient = new Vuex.Store({
  state: {
    produtos: [
      {name: 'pao', valor: 20.00},
      {name: 'sacola', valor: 1.00},
      {name: 'doce', valor: 15.00}
    ]
  },
  getters: {
    somando(state) {
      let soma = 0
      state.produtos.map(p => soma += p.valor)
      return soma
    }
  },
  //seters
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload)
    }
  },
  actions: {
    adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload)
      }, 1000)
    }
  }

})

export { storeClient }
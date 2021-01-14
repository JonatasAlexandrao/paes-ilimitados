import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cliente: {
      id: '999',
      nome: '',
      celular: '',
      rua: '',
      num: '',
      bairro: '',
      cidade: '',
      valor: ''
    },
    activeListClient: false
  },
  
  getters: {
    /*somando(state) {
      let soma = 0
      state.produtos.map(p => soma += p.valor)
      return soma
    },*/
  },

  //seters
  mutations: {

    activeListClient(state, active) {
      state.activeListClient = active
    }
  },
  actions: {
    adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload)
      }, 1000)
    },
    activeListClient(context, action) {
      if(action == 'click')
        context.commit('activeListClient', !context.state.activeListClient)
      else if(action == 'blur')
      context.commit('activeListClient', false)
    }
  }

})
export default store
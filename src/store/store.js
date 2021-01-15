import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cliente: {
      id: '',
      nome: '',
      celular: '',
      rua: '',
      num: '',
      bairro: '',
      cidade: '',
      valor: ''
    },
    idCliente: '',
    idProduto: '',
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
    },
    idCliente(state, id) {
      state.idCliente = id
    },
    idProduto(state, id) {
      state.idProduto = id
    }
  },
  actions: {
    /*adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload)
      }, 1000)
    }*/
    selectedItemId(context, item) {
     /* if(item[0] == 'cliente')
        context.commit('idCliente', item)
      else if(item[0] == 'produto')
        context.commit('idProduto', item)*/
        context.commit('idCliente', item)
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
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cliente: {
      id: 0,
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
    activeListClient(state, active) { state.activeListClient = active },
    setIdCliente(state, id) { state.cliente.id = id },
    setNomeCliente(state, nome) { state.cliente.nome = nome },
    setCelularCliente(state, celular) { state.cliente.celular = celular },
    setRuaCliente(state, rua) { state.cliente.rua = rua },
    setNumCliente(state, num) { state.cliente.num = num },
    setBairroCliente(state, bairro) { state.cliente.bairro = bairro },
    setCidadeCliente(state, cidade) { state.cliente.cidade = cidade },
    setValorCliente(state, valor) { state.cliente.valor = valor },

    cleanAll(state) {
      state.cliente.id = 0
      state.cliente.nome = ''
      state.cliente.celular = ''
      state.cliente.rua = ''
      state.cliente.num = ''
      state.cliente.bairro = ''
      state.cliente.cidade = ''
      state.cliente.valor = '0,00'
    }
    

  },
  actions: {
    /*adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload)
      }, 1000)
    }*/
    selectedItemId(context, id) {
      context.commit('idCliente', id)
    },

    activeListClient(context, action) {
      if(action === 'toggle')
        context.commit('activeListClient', !context.state.activeListClient)
      else if(action === 'disabled')
        context.commit('activeListClient', false)
      else if(action === 'active')
        context.commit('activeListClient', true)
    }
  }

})
export default store
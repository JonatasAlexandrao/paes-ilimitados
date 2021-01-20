import Vue from 'vue'
import Vuex from 'vuex'

//import data from '@/database/data'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cliente: {
      id: '1',
      nome: '',
      celular: '',
      rua: '',
      num: '',
      bairro: '',
      cidade: '',
      valor: ''
    },
    //idCliente: '33',

    //idProduto: '',
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
    setIdCliente(state, id) {
      state.cliente.id = id
    },
    setNomeCliente(state, nome) {
      state.cliente.nome = nome
    },
    setCelularCliente(state, celular) {
      state.cliente.celular = celular
    },
    setRuaCliente(state, rua) {
      state.cliente.rua = rua
    },
    setNumCliente(state, num) {
      state.cliente.num = num
    },
    setBairroCliente(state, bairro) {
      state.cliente.bairro = bairro
    },
    setCidadeCliente(state, cidade) {
      state.cliente.cidade = cidade
    },
    setValorCliente(state, valor) {
      state.cliente.valor = valor
    },

    cleanAll(state) {
      state.cliente.id = ''
      state.cliente.nome = ''
      state.cliente.celular = ''
      state.cliente.rua = ''
      state.cliente.num = ''
      state.cliente.bairro = ''
      state.cliente.cidade = ''
      state.cliente.valor = ''
    }
    

  },
  actions: {
    /*adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload)
      }, 1000)
    }*/
    selectedItemId(context, id) {
     /* if(item[0] == 'cliente')
        context.commit('idCliente', item)
      else if(item[0] == 'produto')
        context.commit('idProduto', item)*/

      //const obj = data.searchById('clientes/', id)

        context.commit('idCliente', id)
    },

    activeListClient(context, action) {
      if(action == 'clickInput')
        context.commit('activeListClient', !context.state.activeListClient)
      else if(action == 'clickList' || action == 'blur')
      context.commit('activeListClient', false)
    }
  }

})
export default store
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
    idCliente: '',

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
    idCliente(state, id) {
      state.idCliente = id
    },
    idNum(state, num) {
      state.idNum = num
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
      if(action == 'click')
        context.commit('activeListClient', !context.state.activeListClient)
      else if(action == 'blur')
      context.commit('activeListClient', false)
    }
  }

})
export default store
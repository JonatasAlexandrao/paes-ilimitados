import Vue from 'vue'
import Vuex from 'vuex'

import cliente from '@/store/modules/cliente'
import produto from '@/store/modules/produto'

Vue.use(Vuex)
export default new Vuex.Store({

  modules: { cliente, produto },

  state: {
    activeList: {
      clienteNome: false,
      produtoNome: false,
      produtoTipo: false,
    }
  },
  getters: {
    getActiveList(state){ return state.activeList },
  },

  mutations: {
    setActiveListClienteNome(state, active) {  state.activeList.clienteNome = active },
    setActiveListProdutoNome(state, active) {  state.activeList.produtoNome = active },
    setActiveListProdutoTipo(state, active) {  state.activeList.produtoTipo = active },
  },
  
  actions: {
    activeList(context, [input, action='toggle']){
      if(input === 'clienteNome') {
        context.dispatch('activeListClienteNome', action)
      }
      else if(input === 'produtoNome') {
        context.dispatch('activeListProdutoNome', action)
      }
      else if(input === 'produtoTipo') {
        context.dispatch('activeListProdutoTipo', action)
      }
    },
  },

  


})

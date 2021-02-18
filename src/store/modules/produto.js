
export default {
  state: {
    produto: {
      proId: 0,
      proNome: '',
      proPeso: '',
      proTipo: '',
      proValor: '',
      proIngredientes: '',
    },

  },
  
  getters: {
    getProId(state){ return state.produto.proId },
    getProNome(state){ return state.produto.proNome },
    getProPeso(state){ return state.produto.proPeso },
    getProTipo(state){ return state.produto.proTipo },
    getProValor(state){ return state.produto.proValor },
    getProIngredientes(state){ return state.produto.proIngredientes },
  },

  //seters
  mutations: {
    activeListProdutoNome(state, active) {
      state.activeList.produtoNome = active
    },
    activeListProdutoTipo(state, active) {
      state.activeList.produtoTipo = active
    },

    setProdutoId(state, id) { state.produto.proId = id },
    setProdutoNome(state, nome) { state.produto.proNome = nome },
    setProdutoPeso(state, peso) { state.produto.proPeso = peso },
    setProdutoTipo(state, tipo) { state.produto.proTipo = tipo },
    setProdutoValor(state, valor) { state.produto.proValor = valor },
    setProdutoIngredientes(state, ingredientes) { state.produto.proIngredientes = ingredientes },
    cleanAllProduto(state) {
      state.produto.proId = 0
      state.produto.proNome = ''
      state.produto.proTipo = ''
      state.produto.proPeso = ''
      state.produto.proValor = '0,00'
      state.produto.proIngredientes = ''
    },
    

  },
  actions: {
    /*selectedItemId(context, id) {
      context.commit('setProdutoId', id)
    },*/

    activeListProdutoNome(context, action) {
      if(action === 'toggle')
        context.commit('setActiveListProdutoNome', !context.rootState.activeList.produtoNome)
      else if(action === 'disabled')
        context.commit('setActiveListProdutoNome', false)
      else if(action === 'active')
        context.commit('setActiveListProdutoNome', true)
    },

    activeListProdutoTipo(context, action) {
      if(action === 'toggle')
        context.commit('setActiveListProdutoTipo', !context.rootState.activeList.produtoTipo)
      else if(action === 'disabled')
        context.commit('setActiveListProdutoTipo', false)
      else if(action === 'active')
        context.commit('setActiveListProdutoTipo', true)
    },

  }
}
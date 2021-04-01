
export default {
  state: {
    produto: {
      id: 0,
      nome: '',
      peso: '',
      tipo: '',
      valor: '',
      ingredientes: '',
    },

  },
  
  getters: {
    getProId(state){ return state.produto.id },
    getProNome(state){ return state.produto.nome },
    getProPeso(state){ return state.produto.peso },
    getProTipo(state){ return state.produto.tipo },
    getProValor(state){ return state.produto.valor },
    getProIngredientes(state){ return state.produto.ingredientes },
    getProduct(state) {
      const product = {
        id: state.produto.id,
        nome: state.produto.nome,
        peso: state.produto.peso,
        tipo: state.produto.tipo,
        valor: state.produto.valor,
        ingredientes: state.produto.ingredientes,
      }
      return product
    }
  },

  //seters
  mutations: {
    activeListProdutoNome(state, active) {
      state.activeList.produtoNome = active
    },
    activeListProdutoTipo(state, active) {
      state.activeList.produtoTipo = active
    },

    setProdutoId(state, id) { state.produto.id = id },
    setProdutoNome(state, nome) { state.produto.nome = nome },
    setProdutoPeso(state, peso) { state.produto.peso = peso },
    setProdutoTipo(state, tipo) { state.produto.tipo = tipo },
    setProdutoValor(state, valor) { state.produto.valor = valor },
    setProdutoIngredientes(state, ingredientes) { state.produto.ingredientes = ingredientes },
    cleanAllProduto(state) {
      state.produto.id = 0
      state.produto.nome = ''
      state.produto.tipo = ''
      state.produto.peso = ''
      state.produto.valor = '0,00'
      state.produto.ingredientes = ''
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
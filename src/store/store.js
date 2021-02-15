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
    produto: {
      id: 0,
      nome: '',
      peso: '',
      valor: '',
      ingredientes: '',
    },

    activeListClient: false,
    activeList: {
      clienteNome: false,
      produtoNome: false,
      produtoTipo: false,
    }
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
    // ------------- Clientes ------------- //
    activeListClienteNome(state, active) { state.activeList.clienteNome = active },
    setIdCliente(state, id) { state.cliente.id = id },
    setNomeCliente(state, nome) { state.cliente.nome = nome },
    setCelularCliente(state, celular) { state.cliente.celular = celular },
    setRuaCliente(state, rua) { state.cliente.rua = rua },
    setNumCliente(state, num) { state.cliente.num = num },
    setBairroCliente(state, bairro) { state.cliente.bairro = bairro },
    setCidadeCliente(state, cidade) { state.cliente.cidade = cidade },
    setValorCliente(state, valor) { state.cliente.valor = valor },

    cleanAllCliente(state) {
      state.cliente.id = 0
      state.cliente.nome = ''
      state.cliente.celular = ''
      state.cliente.rua = ''
      state.cliente.num = ''
      state.cliente.bairro = ''
      state.cliente.cidade = ''
      state.cliente.valor = '0,00'
    },
    // ------------- PRODUTOS ------------- //
    activeListProdutoNome(state, active) {
      state.activeList.produtoNome = active
      console.log('cliente')
    },
    activeListProdutoTipo(state, active) {
      state.activeList.produtoTipo = active
    },

    setProdutoId(state, id) { state.produto.id = id },
    setProdutoNome(state, nome) { state.produto.nome = nome },
    setProdutoValor(state, valor) { state.produto.valor = valor },
    setProdutoPeso(state, peso) { state.produto.peso = peso },
    cleanAllProduto(state) {
      state.produto.id = 0
      state.produto.nome = ''
      state.produto.valor = '0,00'
      state.produto.peso = ''
    },
    

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

    activeListClienteNome(context, action='toggle') {
      if(action === 'toggle')
        context.commit('activeListClienteNome', !context.state.activeList.clienteNome)
      else if(action === 'disabled')
        context.commit('activeListClienteNome', false)
      else if(action === 'active')
        context.commit('activeListClienteNome', true)


        
    },

    activeListProdutoNome(context, action='toggle') {
      if(action === 'toggle')
        context.commit('activeListProdutoNome', !context.state.activeList.produtoNome)
      else if(action === 'disabled')
        context.commit('activeListProdutoNome', false)
      else if(action === 'active')
        context.commit('activeListProdutoNome', true)
    },

    activeListProdutoTipo(context, action='toggle') {
      if(action === 'toggle')
        context.commit('activeListProdutoTipo', !context.state.activeList.produtoTipo)
      else if(action === 'disabled')
        context.commit('activeListProdutoTipo', false)
      else if(action === 'active')
        context.commit('activeListProdutoTipo', true)
    },

    /*activeList(context, action) {
      if(action === 'toggle')
        context.commit('activeList', !context.state.activeList.productNome)
    }*/
    

  }

})
export default store
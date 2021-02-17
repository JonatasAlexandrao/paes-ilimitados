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
      tipo: '',
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
    /*adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload)
      }, 1000)
    }*/
    selectedItemId(context, id) {
      context.commit('idCliente', id)
    },

    activeList(contex, input, action='toggle'){
      if(input === 'clienteNome') {
        contex.dispatch('activeListClienteNome', action)
      }
      else if(input === 'produtoNome') {
        contex.dispatch('activeListProdutoNome', action)
      }
      else if(input === 'produtoTipo') {
        contex.dispatch('activeListProdutoTipo', action)
      }
    },

    activeListClienteNome(context, action='toggle') {
      if(action === 'toggle')
        context.commit('activeListClienteNome', !context.state.activeList.clienteNome)
      else if(action === 'disabled')
        context.commit('activeListClienteNome', false)
      else if(action === 'active')
        context.commit('activeListClienteNome', true) 

      console.log(action)
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

  }

})
export default store
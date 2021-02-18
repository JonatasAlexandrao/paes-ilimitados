import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {

      
      id: 0,
      nome: '',
      celular: '',
      rua: '',
      num: '',
      bairro: '',
      cidade: '',
      valor: '',

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
    getId(state){ return state.id },
    getNome(state){ return state.nome },
    getCelular(state){ return state.celular },
    getRua(state){ return state.rua },
    getNum(state){ return state.num },
    getBairro(state){ return state.bairro },
    getCidade(state){ return state.cidade },
    getValor(state){ return state.valor },
  },

  //seters
  mutations: {
    // ------------- Clientes ------------- //
    activeListClienteNome(state, active) { state.activeList.clienteNome = active },
    setIdCliente(state, id) { state.id = id },
    setNomeCliente(state, nome) { state.nome = nome },
    setCelularCliente(state, celular) { state.celular = celular },
    setRuaCliente(state, rua) { state.rua = rua },
    setNumCliente(state, num) { state.num = num },
    setBairroCliente(state, bairro) { state.bairro = bairro },
    setCidadeCliente(state, cidade) { state.cidade = cidade },
    setValorCliente(state, valor) { state.valor = valor },

    cleanAllCliente(state) {
      state.id = 0
      state.nome = ''
      state.celular = ''
      state.rua = ''
      state.num = ''
      state.bairro = ''
      state.cidade = ''
      state.valor = '0,00'
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

    activeList(contex, [input, action='toggle']){
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

    activeListClienteNome(context, action) {
      if(action === 'toggle')
        context.commit('activeListClienteNome', !context.state.activeList.clienteNome)
      else if(action === 'disabled')
        context.commit('activeListClienteNome', false)
      else if(action === 'active')
        context.commit('activeListClienteNome', true) 

      console.log(action)
    },

    activeListProdutoNome(context, action) {
      if(action === 'toggle')
        context.commit('activeListProdutoNome', !context.state.activeList.produtoNome)
      else if(action === 'disabled')
        context.commit('activeListProdutoNome', false)
      else if(action === 'active')
        context.commit('activeListProdutoNome', true)
    },

    activeListProdutoTipo(context, action) {
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
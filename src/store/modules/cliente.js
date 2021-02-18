
export default {
  

  state: {
    cliente: {
      cliId: 0,
      cliNome: '',
      cliCelular: '',
      cliRua: '',
      cliNum: '',
      cliBairro: '',
      cliCidade: '',
      cliValor: '',
    },
    
  },
  
  getters: {

    getCliId(state){ return state.cliente.cliId },
    getCliNome(state){ return state.cliente.cliNome },
    getCliCelular(state){ return state.cliente.cliCelular },
    getCliRua(state){ return state.cliente.cliRua },
    getCliNum(state){ return state.cliente.cliNum },
    getCliBairro(state){ return state.cliente.cliBairro },
    getCliCidade(state){ return state.cliente.cliCidade },
    getCliValor(state){ return state.cliente.cliValor },
  },

  //seters
  mutations: {
    activeListClienteNome(state, active) {  state.activeList.clienteNome = active },
    setIdCliente(state, id) { state.cliente.cliId = id },
    setNomeCliente(state, nome) { state.cliente.cliNome = nome },
    setCelularCliente(state, celular) { state.cliente.cliCelular = celular },
    setRuaCliente(state, rua) { state.cliente.cliRua = rua },
    setNumCliente(state, num) { state.cliente.cliNum = num },
    setBairroCliente(state, bairro) { state.cliente.cliBairro = bairro },
    setCidadeCliente(state, cidade) { state.cliente.cliCidade = cidade },
    setValorCliente(state, valor) { state.cliente.cliValor = valor },

    cleanAllCliente(state) {
      state.cliente.cliId = 0
      state.cliente.cliNome = ''
      state.cliente.cliCelular = ''
      state.cliente.cliRua = ''
      state.cliente.cliNum = ''
      state.cliente.cliBairro = ''
      state.cliente.cliCidade = ''
      state.cliente.cliValor = '0,00'
    },

  },
  actions: {
    /*selectedItemId(context, id) {
      context.commit('idCliente', id)
    },*/

    activeListClienteNome(context, action) {
      if(action === 'toggle')
        context.commit('setActiveListClienteNome', !context.rootState.activeList.clienteNome)
      else if(action === 'disabled')
        context.commit('setActiveListClienteNome', false)
      else if(action === 'active')
        context.commit('setActiveListClienteNome', true) 
    },

  }
}
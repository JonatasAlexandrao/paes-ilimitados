
export default {
  state: {
    cliente: {
      id: 0,
      nome: '',
      celular: '',
      rua: '',
      num: '',
      bairro: '',
      cidade: '',
      valor: '',
    },
    
  },
  
  getters: {

    getCliId(state){ return state.cliente.id },
    getCliNome(state){ return state.cliente.nome },
    getCliCelular(state){ return state.cliente.celular },
    getCliRua(state){ return state.cliente.rua },
    getCliNum(state){ return state.cliente.num },
    getCliBairro(state){ return state.cliente.bairro },
    getCliCidade(state){ return state.cliente.cidade },
    getCliValor(state){ return state.cliente.valor },
    getClient(state) {
      const client = {
        id: state.cliente.id, 
        nome: state.cliente.nome,
        celular: state.cliente.celular,
        rua: state.cliente.rua,
        num: state.cliente.num,
        bairro: state.cliente.bairro,
        cidade: state.cliente.cidade,
        valor: state.cliente.valor
      }
      
      return client
    }
  },

  //seters
  mutations: {
    activeListClienteNome(state, active) {  state.activeList.clienteNome = active },
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
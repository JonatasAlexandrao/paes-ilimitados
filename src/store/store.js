import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cliente: {
      id:'55', 
      nome:'', 
      rua:'', 
      num:'',
      bairro:'',
      cidade:'',
      valor:''
    },
  },
  getters: {
    teste(state) {
      return state.cliente.id.replace(/\D/g, '')
    }
  },
 /* mutations: {
    setTeste(state, payload) {
      state.cliente = payload
    }
  }*/
})
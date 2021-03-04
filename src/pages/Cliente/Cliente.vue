<template>
<div class="clientPage">
  <PageTitle title="Clientes" />

  <div class="backgroundDiv">
    <form @submit="(event) => event.preventDefault()">
      
      <p class="id">ID: {{clienteId}}</p>
    
      <ComboBoxClient :selectClient="selectClient"/>

      <InputFild classInput="-tel" name="celular" mask="cellPhone" label="Celular" v-model="clienteCelular" inputmode="numeric" />

      <fieldset>
        <legend>Endereço</legend>
        <div class="endereco">
          <InputFild classInput="-rua" name="rua" label="Rua" v-model="clienteRua" />
          <InputFild classInput="-num" name="num" label="Nº" v-model="clienteNum" />
          <InputFild classInput="-bairro" name="bairro" label="Bairro" v-model="clienteBairro" />
          <InputFild classInput="-cidade" name="cidade" label="Cidade" v-model="clienteCidade" />
          <InputFild classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" v-model="clienteValor" />   
          <FlatButton v-if="clienteId" classButton="-delete" :handleclick="deleteBD" title="Deletar" />  
        </div>
      </fieldset>

      <AlertMessage :messageText="messageText" :messageClass="messageClass" :messageActive="messageActive" />

      <div class="divButtons">
        <FlatButton v-if="!clienteId" classButton="-save" :handleclick="saveBD" title="Gravar" />
        <FlatButton v-else classButton="-change" :handleclick="changeBD" title="Alterar" />
        <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />
      </div>

    </form>

    <TableClient classTable="-client" :list="filteredList" :select="selectClient"/>

    

  </div>
</div>
</template>

<script>
import PageTitle from '@/components/PageTitle/PageTitle'
import InputFild from '@/components/InputFild/InputFild.vue'
import ComboBoxClient from '@/components/ComboBox/ComboBoxClient/ComboBoxClient'
import FlatButton from '@/components/FlatButton/FlatButton'
import AlertMessage from '@/components/AlertMessage/AlertMessage'
import TableClient from '@/components/Table/TableClient/TableClient'

import data from '@/database/data'
import mask from '@/assets/mask/mask'

export default {
  components: { PageTitle, InputFild, ComboBoxClient, FlatButton, AlertMessage, TableClient},

  //created: function() { this.nextId() },

  computed: {

    clienteId() { return this.$store.getters.getCliId },
    clienteNome: {
      get(){ return this.$store.getters.getCliNome },
      set(value){ this.$store.commit('setNomeCliente', value) }
    },
    clienteCelular: {
      get(){ return this.$store.getters.getCliCelular },
      set(value){ this.$store.commit('setCelularCliente', value) }
    },
    clienteRua: {
      get(){ return this.$store.getters.getCliRua },
      set(value){ this.$store.commit('setRuaCliente', value) }
    },
    clienteNum: {
      get(){ return this.$store.getters.getCliNum },
      set(value){ this.$store.commit('setNumCliente', value) }
    },
    clienteBairro: {
      get(){ return this.$store.getters.getCliBairro },
      set(value){ this.$store.commit('setBairroCliente', value) }
    },
    clienteCidade: {
      get(){ return this.$store.getters.getCliCidade },
      set(value){ this.$store.commit('setCidadeCliente', value) }
    },
    clienteValor: {
      get(){ return this.$store.getters.getCliValor },
      set(value){ this.$store.commit('setValorCliente', value) }
    },


  },
  
  data() {
    return {
      list: [],
      listTable: [],
      filteredList: [],
      validateInput: true,
      errorMessage: '',

      // var do container mensagens
      messageClass: '',
      messageActive: false,
      messageText: '',
    }
  },

  //Povoa o this.list
  created() { this.getList() },

  methods: {
  /*  activeList(input, action) { // Verifica qual input quer abrir a lista //
    
      if(input === 'clienteNome') {
        this.$store.dispatch('activeList', input, action)
        //this.$store.dispatch('activeListClienteNome', action)
        //console.log('teste123')
      }
    },*/
    
    nextId(){ // Verifica qual o próximo id //
      const id = (this.list[this.list.length-1].id)
      const ultimoId = parseInt(id) + 1
      this.$store.commit('setIdCliente', ultimoId)   

      //console.log(ultimoId)
      //console.log('store', this.clienteId)
    },

    filterList(value) { // Filtra lista do input cliente //

      value = mask.maskFilter('letter', value)

       this.filteredList = this.list.filter(elem => {
        const nome = elem.nome.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')

        const rule = `${value}.*`
        const regex = new RegExp(rule, "gim")

        return nome.match(regex) 
       
      }) 
      this.filteredList = this.orderColumns(this.filteredList)
      
       return value
    },

    selectClient(event, client) { // Preenche o form com os dados do item selecionado // repassado para DropDownList e TableClient

      event.stopPropagation();

      this.$store.commit('setIdCliente', client.id)
      this.$store.commit('setNomeCliente', client.nome)
      this.$store.commit('setCelularCliente', client.celular)
      this.$store.commit('setRuaCliente', client.rua)
      this.$store.commit('setNumCliente', client.num)
      this.$store.commit('setBairroCliente', client.bairro)
      this.$store.commit('setCidadeCliente', client.cidade)
      this.$store.commit('setValorCliente', client.valor)

    },

    cleanFilds() { // Limpa o store cliente para limpar os campos do form e limpa o filtro do dropDownList//

      this.$store.commit('cleanAllCliente')
      this.messageActive = false
      const input = document.getElementsByTagName('input')
      input[0].focus()
      this.filterList('')
      this.$store.dispatch('activeListClient', 'disabled')
      this.getList()
      this.validateInput = true
    },

    sortList(list) { // ordena a lista em ordem alfabetica //
      list.sort(function (a, b) { 
        if(a.nome > b.nome)
          return 1
        if(a.nome < b.nome)
          return -1
        
        return 0
      })
      return list
    },

    orderColumns(list) {

      let orderedList = []

      orderedList =  list.map((elem) => {
        let newList = {}

        newList.id = elem.id
        newList.nome = elem.nome
        newList.celular = elem.celular
        //newList.endereco = `${elem.rua}, ${elem.rua}, ${elem.bairro}, ${elem.cidade}` 
        newList.num = elem.num
        newList.bairro = elem.bairro
        newList.cidade = elem.cidade
        newList.valor = elem.valor

        return newList
      })

      return orderedList
    },
    
    async getList() { // pega a lista de clientes no banco e coloca na variavel list //
      try {
        const listData = await data.searchList('clientes/')
        //this.list = this.orderColumns(listData)
        this.list = this.sortList(listData)
        this.filteredList = this.orderColumns(this.list)
        //console.log(listData)

       //console.log('ordenado', this.orderColumns(listData))
       this.listTable = this.orderColumns(this.list)
 
      } catch(error) {
        console.error(error)
      }
      
    },

    saveBD() { // salva um novo cliente //
      //this.validateInput = true
      if(this.validate()){
        this.nextId()
        const id = this.clienteId
        data.save('clientes/' + id, this.$store.state.cliente) 
        this.cleanFilds()

        this.messageText = 'Cliente Salvo com sucesso!'
        this.messageClass = '-confirmed'
        this.messageActive = true
      }
      
       
    },

    changeBD() { // salva uma alteração de um cliente //
      if(this.validate()){
        const id = this.clienteId
        data.update('clientes/' + id, this.$store.state.cliente)
        this.cleanFilds()

        this.messageText = 'Cliente alterado com sucesso!'
        this.messageClass = '-alert'
        this.messageActive = true
      }
      
    },

    deleteBD() { // deleta um cliente do banco //
      const message = `Apagar o cliente ${this.clienteNome} de ID: ${this.clienteId}?`
      const id = this.clienteId

      if(!this.clienteId){
        alert('Selecione o cliente que deseja deletar.')
      }
      else if(confirm(message)){
        data.delete('clientes/', id)
        this.cleanFilds()
      }
    },

    // Validação de campos
      /*
      - Nome é necessário
      - Celular é necessário
      */
    validate() { // Validando campos obrigatórios para salvar no BD //
      if(!this.clienteNome) {
        const input = document.getElementsByTagName('input')
        input[0].focus()

        this.messageText = 'Falta o nome do cliente!'
        this.messageClass = '-error'
        this.messageActive = true

        return false
      }
      else if(!this.clienteCelular){
        const input = document.getElementsByTagName('input')
        input[1].focus()

        this.messageText = 'Falta o celular do cliente!'
        this.messageClass = '-error'
        this.messageActive = true
        
        return false
      }
      else if(this.clienteCelular.length < 15){
        const input = document.getElementsByTagName('input')
        input[1].focus()
   
        this.messageText = 'Celular invalido, faltam números.'
        this.messageClass = '-error'
        this.messageActive = true

         return false

      }
      else{
        //this.validateInput = true
        return true
      }
    }

  },

}
</script>

<style src="./style.scss" lang="scss" />
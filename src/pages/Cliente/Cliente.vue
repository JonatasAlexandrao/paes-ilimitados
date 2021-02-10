<template>
<div class="clientPage">
  <PageTitle title="Clientes" />

  <div class="backgroundDiv">
    <form @submit="(event) => event.preventDefault()">
      
      <p class="id">ID: {{clienteId}}</p>
    
      <InputFild classInput="-nome" name="nome" label="Nome" v-model="clienteNome" type="search" :filterList="filterList" mask="letter" :required="true">
        <DropDownList :itens="filteredList" :selectClient="selectClient" slot="list" class="-client"/>
      </InputFild>

      <InputFild classInput="-tel" name="celular" mask="cellPhone" label="Celular" v-model="clienteCelular" inputmode="numeric" :required="true" />

      <fieldset>
        <legend>Endereço</legend>
        <div class="endereco">
          <InputFild classInput="-rua" name="rua" label="Rua" v-model="clienteRua" />
          <InputFild classInput="-num" name="num" label="Nº" v-model="clienteNum" />
          <InputFild classInput="-bairro" name="bairro" label="Bairro" v-model="clienteBairro" />
          <InputFild classInput="-cidade" name="cidade" label="Cidade" v-model="clienteCidade" />
          <InputFild classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" v-model="clienteValor" />   
          <FlatButton  classButton="-delete" :handleclick="deleteBD" title="Deletar"/>  
        </div>
      </fieldset>

      <ErrorMessage :validateInput="validateInput" :errorMessage="errorMessage"/>

      <div class="divButtons">
        <FlatButton v-if="!clienteId" classButton="-save" :handleclick="saveBD" title="Gravar" />
        <FlatButton v-else classButton="-change" :handleclick="changeBD" title="Alterar" />
        <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />
      </div>

    </form>

    <TableClient classTables="-cliente" :header="['Nome', 'Celular', 'Endereço', 'Valor entrega']" :list="list" :selectClient="selectClient"/>

    

  </div>
</div>
</template>

<script>
import PageTitle from '@/components/PageTitle/PageTitle'
import InputFild from '@/components/InputFild/InputFild.vue'
import FlatButton from '@/components/FlatButton/FlatButton'
import DropDownList from '@/components/DropDownList/DropDownList'
import TableClient from '@/components/TableClient/TableClient'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'

import data from '@/database/data'
import mask from '@/assets/mask/mask'

export default {
  components: { PageTitle, InputFild, FlatButton, DropDownList, TableClient, ErrorMessage},

  //created: function() { this.nextId() },

  computed: {
    //list() { return this.getList() },
    activeList() { return this.$store.state.activeListClient },
    clienteId() { return this.$store.state.cliente.id },
    clienteNome: {
      get(){ return this.$store.state.cliente.nome },
      set(value){ this.$store.commit('setNomeCliente', value) }
    },
    clienteCelular: {
      get(){ return this.$store.state.cliente.celular },
      set(value){ this.$store.commit('setCelularCliente', value) }
    },
    clienteRua: {
      get(){ return this.$store.state.cliente.rua },
      set(value){ this.$store.commit('setRuaCliente', value) }
    },
    clienteNum: {
      get(){ return this.$store.state.cliente.num },
      set(value){ this.$store.commit('setNumCliente', value) }
    },
    clienteBairro: {
      get(){ return this.$store.state.cliente.bairro },
      set(value){ this.$store.commit('setBairroCliente', value) }
    },
    clienteCidade: {
      get(){ return this.$store.state.cliente.cidade },
      set(value){ this.$store.commit('setCidadeCliente', value) }
    },
    clienteValor: {
      get(){ return this.$store.state.cliente.valor },
      set(value){ this.$store.commit('setValorCliente', value) }
    },


  },
  
  data() {
    return {
      list: [],
      filteredList: [],
      validateInput: true,
      errorMessage: ''
    }
  },

  created() { //Povoa o this.list
    this.getList()
  },

  methods: {

    nextId(){ // Verifica qual o próximo id //
      const id = (this.list[this.list.length-1].id)
      const ultimoId = parseInt(id) + 1
      this.$store.commit('setIdCliente', ultimoId)   

      console.log(ultimoId)
      console.log('store', this.clienteId)
    },

    filterList(value) { // Filtra lista do input cliente //

      value = mask.maskFilter('letter', value)

      this.filteredList = this.list.filter(elem => {
        const nome = elem.nome.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')

        const rule = `^${value}.*`
        const regex = new RegExp(rule, "gim")

        return nome.match(regex) 
       
      })     
       return value
    },

    selectClient(event, client) { // Preenche o form com os dados do item selecionado // repassado para DropDownList e Table

      event.stopPropagation();

      this.$store.commit('setIdCliente', client.id)
      this.$store.commit('setNomeCliente', client.nome)
      this.$store.commit('setCelularCliente', client.celular)
      this.$store.commit('setRuaCliente', client.rua)
      this.$store.commit('setNumCliente', client.num)
      this.$store.commit('setBairroCliente', client.bairro)
      this.$store.commit('setCidadeCliente', client.cidade)
      this.$store.commit('setValorCliente', client.valor)
      //this.clienteNome = client.nome
    },

    cleanFilds() { // Limpa o store cliente para limpar os campos do form e limpa o filtro do dropDownList//

      this.$store.commit('cleanAll')
      const input = document.getElementsByTagName('input')
      input[0].focus()
      this.filterList('')
      this.$store.dispatch('activeListClient', 'desabled')
      this.getList()
      this.validateInput = true
    },
    
    async getList() { // pega a lista de clientes no banco e coloca na variavel list //
      try {
        const listData = await data.searchList('clientes/')
        this.list = listData
        this.filteredList = listData
 
      } catch(error) {
        console.error(error)
      }

    },

    saveBD() { // salva um novo cliente //
      if(this.validate()){
        this.nextId()
        const id = this.clienteId
        data.save('clientes/' + id, this.$store.state.cliente) 
        this.cleanFilds()
      }
       
    },

    changeBD() { // salva uma alteração de um cliente //
      if(this.validate()){
        const id = this.clienteId
        data.update('clientes/' + id, this.$store.state.cliente)
        this.cleanFilds()
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
        console.error('falta nome!')
        const input = document.getElementsByTagName('input')
        input[0].focus()
        this.errorMessage = 'Campo nome é obrigatório.'
        this.validateInput = false
        return false
      }
      else if(!this.clienteCelular){
        console.error('falta celular!')
        const input = document.getElementsByTagName('input')
        input[1].focus()
        
        this.validateInput = false

        console.log(this.clienteCelular.length)
    
        this.errorMessage = 'Campo celular é obrigatório.'
        
        return false
      }
      else if(this.clienteCelular.length < 15){
        console.error('falta celular!')
        const input = document.getElementsByTagName('input')
        input[1].focus()
        
        this.validateInput = false
        this.errorMessage = 'Celular invalido, faltam números.'

         return false

      }
      else{
        this.validateInput = true
        return true
      }
    }

  },

}
</script>

<style src="./style.scss" lang="scss" />
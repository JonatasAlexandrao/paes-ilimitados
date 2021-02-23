<template>

<div class="productPage">
  <PageTitle title="Produtos" />
  <div class="backgroundDiv">
    <form @submit="(event) => event.preventDefault()">
      <p class="id">ID: {{produtoId}}</p>
      <div class="containerInputProduct" >     
        <InputFild classInput="-prod" name="produtoNome" label="Produto" v-model="produtoNome" type="search" :filterList="filterList" :activeVar="$store.state.activeList.produtoNome" mask="letter">
          <DropDownList :itens="filteredList" name="produtoNome" :select="selectProduct" slot="list" class="-productName" :activeVar="$store.state.activeList.produtoNome" />
        </InputFild>
        <InputFild classInput="-peso" name="peso" label="Peso (g)" v-model="produtoPeso" mask="weight" />
        <InputFild classInput="-tipo" name="produtoTipo" label="Tipo" v-model="produtoTipo" type="search"  :activeVar="$store.state.activeList.produtoTipo" mask="letter">
          <DropDownList :itens="typeList" name="produtoTipo" :select="selectProductType" slot="list" class="-productType" :activeVar="$store.state.activeList.produtoTipo"/>
        </InputFild>
        <InputFild classInput="-valor" name="valor" label="Valor" mask='money' inputmode="numeric" v-model="produtoValor" /> 
        <FlatButton classButton="-delete" :handleclick="deleteBD" title="Deletar" v-if="produtoId" />
      </div>
      

      <fieldset>
        <legend>Ingredientes:</legend>
          <textarea class="ingredients"
          name="ingredientes"
          id="ingredientesProduto"
          v-model="produtoIngredientes"></textarea>
      </fieldset>

      <AlertMessage :messageText="messageText" :messageClass="messageClass" :messageActive="messageActive" />

      <div class="divButtons">
        <FlatButton classButton="-save" v-if="!produtoId" :handleclick="saveBD" title="Gravar" />
        <FlatButton classButton="-change" v-else :handleclick="changeBD" title="Alterar" />
        <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />    
      </div>   
    </form>

    <Table classTable="-productTable" :header="['Produto', 'Tipo', 'Valor']" :list="list" :select="selectProduct"/>

  </div>


</div>
</template>

<script>

import data from '@/database/data'
import mask from '@/assets/mask/mask'

import PageTitle from '@/components/PageTitle/PageTitle'
import InputFild from '@/components/InputFild/InputFild.vue'
import DropDownList from '@/components/DropDownList/DropDownList'
import FlatButton from '@/components/FlatButton/FlatButton'
import AlertMessage from '@/components/AlertMessage/AlertMessage'
import Table from '@/components/Table/Table'

export default {

  components: { PageTitle, InputFild, DropDownList, FlatButton, AlertMessage, Table },
  data(){
    return {
      list: [],
      typeList: [
        {id: 0, nome: 'Pão Caseiro'},
        {id: 1, nome: 'Pão Doce'},
        {id: 2, nome: 'Bolachinhas'},
        {id: 3, nome: 'Outros'}
      ],
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

  computed: {
    produtoId() { return this.$store.getters.getProId },
    produtoNome: {
      get(){ return this.$store.getters.getProNome },
      set(value){ this.$store.commit('setProdutoNome', value) }
    },
    produtoTipo: {
      get(){ return this.$store.getters.getProTipo },
      set(value){ this.$store.commit('setProdutoTipo', value) }
    },
    produtoPeso: {
      get(){ return this.$store.getters.getProPeso },
      set(value){ this.$store.commit('setProdutoPeso', value) }
    },
    produtoValor: {
      get(){ return this.$store.getters.getProValor },
      set(value){ this.$store.commit('setProdutoValor', value) }
    },
    produtoIngredientes: {
      get(){ return this.$store.getters.getProIngredientes },
      set(value){ this.$store.commit('setProdutoIngredientes', value) }
    },
    
  },

  methods: {

    nextId() { // verifica qual o próximo id //
      const id = (this.list[this.list.length-1].id)
      const ultimoId = parseInt(id) + 1
      this.$store.commit('setProdutoId', ultimoId)

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
    
    async getList() { // pega a lista de produto no banco e coloca na variavel list //
      try {
        const listData = await data.searchList('produtos/')
        this.list = listData
        this.list = this.sortList(listData)
        // povoa a lista dos produtos
        this.filteredList = listData
        // povoa a lista dos tipos
        /*this.typeList = this.list.map((ele) => {
          return {id: ele.id, nome: ele.tipo}
        })*/
 
      } catch(error) {
        console.error(error)
      }

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
      
       return value
    },

    selectProduct(event, product){
      event.stopPropagation();
      
      this.$store.commit('setProdutoId', product.id)
      this.$store.commit('setProdutoNome', product.nome)
      this.$store.commit('setProdutoPeso', product.peso)
      this.$store.commit('setProdutoTipo', product.tipo)
      this.$store.commit('setProdutoValor', product.valor)
      this.$store.commit('setProdutoIngredientes', product.ingredientes)
      /*this.activeListProduto = false
      this.activeListTipo = false*/
    },

    selectProductType(event, type) {
      event.stopPropagation();
      this.$store.commit('setProdutoTipo', type.nome)
    },
    
    // ================== BUTTONS ==================
    cleanFilds() {
      this.$store.commit('cleanAllProduto')
      this.messageActive = false
      const input = document.getElementsByTagName('input')
      input[0].focus()
      this.filterList('')
      this.$store.dispatch('activeList', ['produtoNome', 'disabled'])
      this.$store.dispatch('activeList', ['produtoTipo', 'disabled'])
    },

    saveBD(){ // salva um novo Produto //
      if(this.validate()) {
        this.nextId()
        const id = this.produtoId
        data.save('produtos/' + id, this.$store.state.produto)
        this.cleanFilds()

        this.messageText = 'Produto Salvo com sucesso!'
        this.messageClass = '-confirmed'
        this.messageActive = true
        
      }
    },
    changeBD(){ // salva uma alteração de um produto //
      if(this.validate()){
        const id = this.produtoId
        data.update('produtos/' + id, this.$store.state.produto)
        this.cleanFilds()

        this.messageText = 'Produto alterado com sucesso!'
        this.messageClass = '-alert'
        this.messageActive = true
      }
    },
    
    deleteBD(){ // deleta um produto do banco //
      const message = `Apagar o produto ${this.produtoNome} de ID: ${this.produtoId}?`
      const id = this.produtoId

      if(!this.produtoId){
        alert('Selecione o produto que deseja deletar.')
      }
      else if(confirm(message)){
        data.delete('produtos/', id)
        this.cleanFilds()
      }

    },

    validate() { // Valida os inputs antes de enviar //

      if(!this.produtoNome) {
        const input = document.getElementsByTagName('input')
        input[0].focus()

        this.messageText = 'Falta o nome do produto!'
        this.messageClass = '-error'
        this.messageActive = true

        return false
      }
      else if(!this.produtoValor || this.produtoValor.length < 4 || this.produtoValor == 'R$ 0,00' || this.produtoValor == '0,00'){
        const input = document.getElementsByTagName('input')
        input[3].focus()

         this.messageText = 'Falta o valor do produto!'
        this.messageClass = '-error'
        this.messageActive = true

        return false
      }
      else {
        return true
      }

      
    }

  },

}
</script>

<style src="./style.scss" lang="scss" />
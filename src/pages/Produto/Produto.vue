<template>

<div class="productPage">
  <PageTitle title="Produtos" />
  <div class="backgroundDiv">
    <form @submit="(event) => event.preventDefault()">
      <p class="id">ID: {{produtoId}}</p>
      <div class="containerInputProduct" >     
        <InputFild classInput="-prod" name="produtoNome" label="Produto" v-model="produtoNome" type="search"  :activeVar="$store.state.activeList.produtoNome">
          <DropDownList :itens="productList" name="produtoNome" :select="selectProduct" slot="list" class="-productName" :activeVar="$store.state.activeList.produtoNome" />
        </InputFild>
        <InputFild classInput="-peso" name="peso" label="Peso (Kg)" v-model="produtoPeso" mask="weight" />
        <InputFild classInput="-tipo" name="produtoTipo" label="Tipo" v-model="produtoTipo" type="search"  :activeVar="$store.state.activeList.produtoTipo">
          <DropDownList :itens="typeList" name="produtoTipo" :select="selectProduct" slot="list" class="-productType" :activeVar="$store.state.activeList.produtoTipo"/>
        </InputFild>
        <InputFild classInput="-valor" name="valor" label="Valor" mask='money' inputmode="numeric" v-model="produtoValor" /> 
        <FlatButton classButton="-delete" :handleclick="deleteBD" title="Deletar" />
      </div>
      

      <fieldset>
        <legend>Ingredientes:</legend>
          <textarea class="ingredients"
          name="ingredientes"
          id="ingredientesProduto"
          v-model="produtoIngredientes"></textarea>
      </fieldset>

      <div class="divButtons">
        <FlatButton classButton="-save" v-if="!produtoId" :handleclick="saveBD" title="Gravar" />
        <FlatButton classButton="-change" v-else :handleclick="changeBD" title="Alterar" />
        <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />
        
      </div>

      
    </form>
  </div>


</div>
</template>

<script>

import PageTitle from '@/components/PageTitle/PageTitle'
import InputFild from '@/components/InputFild/InputFild.vue'

import DropDownList from '@/components/DropDownList/DropDownList'

import FlatButton from '@/components/FlatButton/FlatButton'

export default {

  components: { PageTitle, InputFild, DropDownList, FlatButton },
  data(){
    return {
      produtoTipo:'',
      produtoIngredientes:'',
      productList: [{id:'1', nome:'testes'},{id:'2', nome:'testes2'},{id:'3', nome:'testes3'}],
      typeList: [{id:'1', nome:'testes'},{id:'2', nome:'testes2'},{id:'3', nome:'testes3'}],

      // var ativação da Lista dos inputs //
      activeListProduto: false,
      activeListTipo: false,

    }
  },

  computed: {
    produtoId() { return this.$store.state.produto.id },
    produtoNome: {
      get(){ return this.$store.state.produto.nome },
      set(value){ this.$store.commit('setProdutoNome', value) }
    },
    produtoValor: {
      get(){ return this.$store.state.produto.valor },
      set(value){ this.$store.commit('setProdutoValor', value) }
    },
    produtoPeso: {
      get(){ return this.$store.state.produto.peso },
      set(value){ this.$store.commit('setProdutoPeso', value) }
    },
  },

  methods: {
    
    cleanFilds(){

    },
    saveBD(){
      console.log(this.$store.state.cliente)
    },
    changeBD(){

    },
    
    deleteBD(){

    },
    selectProduct(event, product){
      console.log(event)
      console.log(product)
      this.activeListProduto = false
      this.activeListTipo = false
    }

  },

}
</script>

<style src="./style.scss" lang="scss" />
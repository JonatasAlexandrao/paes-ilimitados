<template>

<div class="productPage">
  <PageTitle title="Produtos" />
  <div class="backgroundDiv">
    <form @submit="(event) => event.preventDefault()">
      <p class="id">ID: {{produtoId}}</p>
      <InputFild classInput="-prod" name="produto" label="Produto" v-model="produtoNome" />
      <InputFild classInput="-peso" name="peso" label="Peso" v-model="produtoPeso" />
      <InputFild classInput="-tipo" name="tipo" label="Tipo" v-model="produtoTipo" />
      <InputFild classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" v-model="produtoValor" /> 

      <fieldset>
        <legend>Ingredientes</legend>
        <div class="ingredientes">
          <InputFild classInput="-ingr" name="ingredientes" label="" v-model="produtoIngredientes" />
        </div>
      </fieldset>

      <div class="divButtons">
        <FlatButton classButton="-save" :handleclick="saveBD" title="Gravar" />
        <FlatButton classButton="-change" :handleclick="changeBD" title="Alterar" />
        <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />
        <FlatButton classButton="-delete" :handleclick="deleteBD" title="Deletar" />
      </div>

      
    </form>
  </div>


</div>
</template>

<script>

import PageTitle from '@/components/PageTitle/PageTitle'
import InputFild from '@/components/InputFild/InputFild.vue'
import FlatButton from '@/components/FlatButton/FlatButton'

export default {

  components: { PageTitle, InputFild, FlatButton },
  data(){
    return {
      produtoId:'123',
      produtoNome:'',
      produtoValor:'',
      produtoPeso:'',
      produtoTipo:'',
      produtoIngredientes:'',

    }
  },

  methods: {
    cleanFilds(){

    },
    saveBD(){

    },
    changeBD(){

    },
    
    deleteBD(){

    },

  },

}
</script>

<style src="./style.scss" lang="scss" />
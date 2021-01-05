<template>
  <form class="backgroundDiv customerRegistration">

    <!-- <InputFild classInput="-id" name="id" label="Id" mask="noString" inputmode="numeric" v-model="clienteId" /> -->
    <p class="id">ID: {{clienteId}}</p>

    <!-- <InputFild classInput="-nome" name="nome" label="Nome Cliente" v-model="clienteNome" /> -->

    <ComboBox v-model="clienteNome"></ComboBox>

    <input type="tel" placeholder="celular">

    
   
    <fieldset class="endereco">
      <legend>Endereço</legend>
      <InputFild classInput="-rua" name="rua" label="Rua" v-model="clienteRua" />
      <InputFild classInput="-num" name="num" label="Nº" mask="noString" inputmode="numeric" v-model="clienteNum" />
      <InputFild classInput="-bairro" name="bairro" label="Bairro" v-model="clienteBairro" />
      <InputFild classInput="-cidade" name="cidade" label="Cidade" v-model="clienteCidade" />
      <InputFild classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" v-model="clienteValor" />     
    </fieldset>

    <FlatButton classButton="-save" :handleclick="saveBD" title="Gravar" />
    <FlatButton classButton="-search" :handleclick="searchBD" title="Buscar" />
    <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />
    <input type="reset">


  </form>
</template>

<script>
import InputFild from '@/objects/InputFild/InputFild.vue'
import FlatButton from '@/objects/FlatButton/FlatButton'
import ComboBox from '@/objects/ComboBox/ComboBox'

import mask from '@/assets/mask/mask'
import data from '@/database/data'

export default {
  components: { InputFild, FlatButton, ComboBox },
  
  data() {
    return {
      clienteId:'1', 
      clienteNome:'', 
      clienteRua:'', 
      clienteNum:'',
      clienteBairro:'',
      clienteCidade:'',
      clienteValor:''
    }
  },

  watch: {
    clienteId() {
      this.clienteId = mask.noLetter(this.clienteId)
     },
     clienteNum() {
       this.clienteNum = mask.noLetter(this.clienteNum)
     },
     clienteValor() {
       this.clienteValor = mask.money(this.clienteValor)
     }
   },

  methods: {

    cleanFilds() {
      this.clienteId=''
      this.clienteNome=''
      this.clienteRua=''
      this.clienteNum=''
      this.clienteBairro=''
      this.clienteCidade=''
      this.clienteValor=''

      const input = document.getElementsByTagName('input')

      input[0].focus()

    },

    getInf() {
      
      let clienteObj = {}
      clienteObj.id = this.clienteId
      clienteObj.nome = this.clienteNome
      clienteObj.rua = this.clienteRua
      clienteObj.num = this.clienteNum
      clienteObj.bairro = this.clienteBairro
      clienteObj.cidade = this.clienteCidade 
      clienteObj.valor = this.clienteValor
      
      return clienteObj

    },

    showInf(obj) {

      this.clienteId = obj.id
      this.clienteNome = obj.nome
      this.clienteRua = obj.rua
      this.clienteNum = obj.num
      this.clienteBairro = obj.bairro
      this.clienteCidade = obj.cidade
      this.clienteValor = obj.valor

    },
    
    saveBD() {
      data.save('clientes/', this.getInf())
      
    },

    searchBD() {   
      let idCliente = 3
      data.search('clientes/', idCliente)
      
    },

  },

}
</script>

<style src="./style.scss" lang="scss"/>
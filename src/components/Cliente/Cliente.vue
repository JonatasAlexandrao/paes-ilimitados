<template>
  <form class="backgroundDiv customerRegistration" @submit="(event) => {event.preventDefault()}">

    <!-- <InputFild classInput="-id" name="id" label="Id" mask="noString" inputmode="numeric" v-model="clienteId" /> -->
    <p class="id">ID: {{clienteId}}</p>

    <!-- <InputFild classInput="-nome" name="nome" label="Nome Cliente" v-model="clienteNome" /> -->
    <InputSearch v-model="clienteNome"></InputSearch>

    <h1>teste: {{clienteNome}}</h1>

    <input type="tel" placeholder="celular">

    <fieldset>
      <legend>Endereço</legend>
      <div class="endereco">
      <InputFild classInput="-rua" name="rua" label="Rua" v-model="clienteRua" />
      <InputFild classInput="-num" name="num" label="Nº" mask="noString" inputmode="numeric" v-model="clienteNum" />
      <InputFild classInput="-bairro" name="bairro" label="Bairro" v-model="clienteBairro" />
      <InputFild classInput="-cidade" name="cidade" label="Cidade" v-model="clienteCidade" />
      <InputFild classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" v-model="clienteValor" />     
      </div>
    </fieldset>

    <FlatButton classButton="-save" :handleclick="saveBD" title="Gravar" />
    <FlatButton classButton="-search" :handleclick="searchBD" title="Buscar" />
    <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />
    <input type="reset">
    <!-- <button @click="testeAqui(event)">teste</button> -->


  </form>
</template>

<script>
import InputFild from '@/objects/InputFild/InputFild.vue'
import FlatButton from '@/objects/FlatButton/FlatButton'
import InputSearch from '@/objects/InputSearch/InputSearch'

import mask from '@/assets/mask/mask'
import data from '@/database/data'

export default {
  components: { InputFild, FlatButton, InputSearch },
  
  data() {
    return {
      clienteId:'1', 
      clienteNome:'aaa', 
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
    // testeAqui(){
    //   console.log(event)
    // },

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
      //data.save('clientes/', this.getInf())
      console.log(this.getInf())
      
    },

    searchBD() {   
      let idCliente = 3
      data.search('clientes/', idCliente)
      
    },

  },

}
</script>

<style src="./style.scss" lang="scss"/>
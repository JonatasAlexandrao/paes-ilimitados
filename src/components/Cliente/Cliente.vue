<template>
  <form class="backgroundDiv customerRegistration" @submit="(event) => {event.preventDefault()}">

    <!-- <InputFild classInput="-id" name="id" label="Id" mask="noString" inputmode="numeric" v-model="clienteId" /> -->
    <p class="id">ID: {{clienteId}}</p>
  
    <InputFild classInput="-nome" name="nome" label="Nome" v-model="clienteNome" type="search" :itens="lista" >
      <DropDownList :itens="lista" />
    </InputFild>

    <h1>teste: {{clienteNome}}</h1>
    <h1>ID: {{idCli}}</h1>

    <InputFild classInput="-tel" name="celular" label="Celular" v-model="clienteCelular" />

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
    


  </form>
</template>

<script>
import InputFild from '@/objects/InputFild/InputFild.vue'
import FlatButton from '@/objects/FlatButton/FlatButton'
import DropDownList from '@/objects/DropDownList/DropDownList'

import mask from '@/assets/mask/mask'
import data from '@/database/data'

export default {
  components: { InputFild, FlatButton, DropDownList},

  computed: {
    produtoVuex() {
      return this.$store.state.produtos
    },
    activeList() {
      return this.$store.state.activeListClient
    },
    idCli() {
      return this.$store.state.cliente.id
    }

  },
  
  data() {
    return {
      lista: data.obj(),

      clienteId:'1', 
      clienteNome:'',
      clienteCelular:'', 
      clienteRua:'', 
      clienteNum:'',
      clienteBairro:'',
      clienteCidade:'',
      clienteValor:'',
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
      this.clienteCelular=''
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
      clienteObj.celular = this.clienteCelular
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
      this.clienteCelular = obj.celular
      this.clienteRua = obj.rua
      this.clienteNum = obj.num
      this.clienteBairro = obj.bairro
      this.clienteCidade = obj.cidade
      this.clienteValor = obj.valor

    },
    
    saveBD() {
      this.$store.state.cliente.id = '111'
      console.log(this.$store.state.cliente.id)
      //data.save('clientes/', this.getInf())
      //console.log(data.obj())
      //let teste = data.searchList('clientes/')
      //console.log(this.produtoVuex)

      /*this.$store.commit('activeClientMutations')
      console.log(this.$store.state.activeListClient)*/
    },

    searchBD() {   
      let idCliente = 3
      data.search('clientes/', idCliente)
      
    },

  },

}
</script>

<style src="./style.scss" lang="scss"/>
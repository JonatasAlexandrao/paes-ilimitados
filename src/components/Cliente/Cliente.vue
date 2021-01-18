<template>
  <form class="backgroundDiv customerRegistration" @submit="(event) => {event.preventDefault()}">

    <!-- <InputFild classInput="-id" name="id" label="Id" mask="noString" inputmode="numeric" v-model="clienteId" /> -->
    <p class="id">ID: {{clienteId}}</p>
  
    <InputFild classInput="-nome" name="nome" label="Nome" v-model="clienteNome" type="search" :itens="lista" >
      <DropDownList :itens="lista" :selectClient="selectClient" />
    </InputFild>

    <h1>teste: {{clienteNum}}</h1>

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
    <!-- Não Parece fazer sentido ---
    <FlatButton classButton="-search" :handleclick="searchBD" title="Buscar" /> -->
    <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />
    <input type="reset">
    


  </form>
</template>

<script>
import InputFild from '@/objects/InputFild/InputFild.vue'
import FlatButton from '@/objects/FlatButton/FlatButton'
import DropDownList from '@/objects/DropDownList/DropDownList'

//import mask from '@/assets/mask/mask'
// --------- bd-teste --------------
import data from '@/database/data'

export default {
  components: { InputFild, FlatButton, DropDownList},

  computed: {
    activeList() {
      return this.$store.state.activeListClient
    },
    clienteId() {
      return this.$store.state.idCliente
    },
    clienteNum() {
      /*get(){
        return this.$store.state.idCliente
      },
      set(value){
        this.$store.commit('idNum', value)  
      }*/
      return this.$store.state.idCliente
    }

  },
  
  data() {
    return {
      lista: data.obj(),

      //clienteId:'1', 
      clienteNome:'',
      clienteCelular:'', 
      clienteRua:'', 
      //clienteNum:'',
      clienteBairro:'',
      clienteCidade:'',
      clienteValor:'',
    }
  },


  watch: {
    /* clienteNum() {
       this.clienteNum = mask.noLetter(this.clienteNum)
     },
    /* clienteValor() {
       this.clienteValor = mask.money(this.clienteValor)
     }*/
   },

  methods: {

    selectClient(client) {
      this.$store.commit('idCliente', client.id)
      this.clienteNome = client.nome
    },

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
      this.$store.commit('idCliente', 10)
      /* forEach ---------------
      const l = this.lista
      let testePesquisa 
      l.forEach(obj => {
        //console.log(obj.id)
        if(obj.id == '1')
          testePesquisa = obj
      });
      console.log(testePesquisa)
      */


     //data.save('clientes/', this.getInf())
     console.log('Salvar no banco?')


      //this.$store.state.cliente.id = '111'
      //console.log(this.$store.state.cliente.id)
      //data.save('clientes/', this.getInf())
      //console.log(data.obj())
      //const id = 2
      
      
      //console.log('botão', data.searchById('clientes/', id))


      //.then(data=>{console.log(data)})

      /*this.$store.commit('activeClientMutations')
      console.log(this.$store.state.activeListClient)*/
      /*const id = 2
      data.searchById2('clientes/', id).then((response)=>{console.log(response)})
      .catch((erro)=>{console.log(erro)})*/

      //data.teste().then((response)=>{console.log(response)})
      
      //const testePes = l.filter(function(obj){ obj });
      //const testePesquisa = l.reduce((obj) =>{obj.id == '1'})

      //console.log(l)
      
    },

    searchBD() {   
      /*let idCliente = 3
      data.search('clientes/', idCliente)*/
      console.log('Buscar no banco?')
    },

  },

}
</script>

<style src="./style.scss" lang="scss"/>
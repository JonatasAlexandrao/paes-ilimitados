<template>
  <form class="backgroundDiv customerRegistration" @submit="(event) => {event.preventDefault()}">

    <!-- <InputFild classInput="-id" name="id" label="Id" mask="noString" inputmode="numeric" v-model="clienteId" /> -->
    <p class="id">ID: {{clienteId}}</p>
  
    <InputFild classInput="-nome" name="nome" label="Nome" v-model="clienteNome" type="search" :filterList="filterList">
      <DropDownList :itens="filteredList" :selectClient="selectClient" slot="list"/>
    </InputFild>

    <!-- <h1>teste: {{clienteNum}}</h1> -->

    <InputFild classInput="-tel" name="celular" mask="cellPhone" label="Celular" v-model="clienteCelular" inputmode="numeric" />

    <fieldset>
      <legend>Endereço</legend>
      <div class="endereco">
        <InputFild classInput="-rua" name="rua" label="Rua" v-model="clienteRua" />
        <InputFild classInput="-num" name="num" label="Nº" v-model="clienteNum" />
        <InputFild classInput="-bairro" name="bairro" label="Bairro" v-model="clienteBairro" />
        <InputFild classInput="-cidade" name="cidade" label="Cidade" v-model="clienteCidade" />
        <InputFild classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" v-model="clienteValor" />     
      </div>
    </fieldset>


    <FlatButton classButton="-save" :handleclick="saveBD" title="Gravar" />
    <!-- Não Parece fazer sentido ---
    <FlatButton classButton="-search" :handleclick="searchBD" title="Buscar" /> -->
    <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />
    


  </form>
</template>

<script>
import InputFild from '@/components/InputFild/InputFild.vue'
import FlatButton from '@/components/FlatButton/FlatButton'
import DropDownList from '@/components/DropDownList/DropDownList'

//import mask from '@/assets/mask/mask'
// --------- bd-teste --------------
import data from '@/database/data'

export default {
  components: { InputFild, FlatButton, DropDownList},

  created: function() { this.nextId() },

  computed: {
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
      lista: data.obj(),
      filteredList: data.obj(),
      /*
      //clienteId:'1', 
      //clienteNome:'',
      clienteCelular:'', 
      clienteRua:'', 
      //clienteNum:'',
      clienteBairro:'',
      clienteCidade:'',
      clienteValor:'',*/
    }
  },

  methods: {

    filterList(value) {
      this.filteredList = this.lista.filter(elem => {
        const nome = elem.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        const teste = `^${value}.*`
        const regex = new RegExp(teste, "gim")

        /*const n = elem.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ")
        //console.log(n)
        let result = n.forEach(element => {
          console.log(element)
          console.log('r',element.match(regex))
          return element.match(regex)
        });

        console.log(result)*/
        return nome.match(regex)
        //return nome.match(regex)    
      })

      /*this.lista.forEach(elem => {
        const nome = elem.nome.normalize('NFD').replace(/[\u036f-\u036f]/g, '')
        const teste = '^'+ value + '.*'
        const regex = new RegExp(teste, "gim")

        console.log('nome', regex.exec(nome))
        
      });*/
      
    },

    nextId(){
      /*console.log(this.lista)
      console.log(this.lista.length)
      console.log(this.lista[this.lista.length-1].id)*/
      const ultimoId = (this.lista[this.lista.length-1].id) +1
      //console.log(ultimoID)
      this.$store.commit('setIdCliente', ultimoId)
      
    },

    selectClient(client) {
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

    cleanFilds() {
      console.log(this.filteredList)
      this.$store.commit('cleanAll')
      this.nextId()

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
      //this.$store.commit('setIdCliente', 10)
      //this.filterList('jon')
      //const text = 'Jônatas'

      //console.log(text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
 
      alert('Salvar no banco?')
      //console.log('Salvar no banco?')
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
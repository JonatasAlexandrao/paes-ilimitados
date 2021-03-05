<template>
  <div class="requestPage">
    <PageTitle title="Pedidos" />
    <div class="backgroundDiv">
      <form @submit="(event) => event.preventDefault()">

        
        <p class="id">ID: {{ clienteId }}</p>
        <fieldset>
        <legend>Cliente</legend>

          
          <ComboBoxClient :selectClient="selectClient" />
        
          <div class="clientInf" v-if="checkId">
            <InputFild classInput="-tel" 
              name="celular" 
              mask="cellPhone" 
              label="Celular" 
              v-model="clienteCelular" 
              inputmode="numeric" 
            />

            <InputFild classInput="-rua" 
              name="rua" 
              label="Rua" 
              v-model="clienteRua" 
            />

            <InputFild classInput="-num" 
              name="num" 
              label="Nº" 
              v-model="clienteNum" 
            />
            <InputFild classInput="-bairro" 
              name="bairro" 
              label="Bairro" 
              v-model="clienteBairro" 
            />
            <InputFild classInput="-cidade" 
              name="cidade" 
              label="Cidade" 
              v-model="clienteCidade" 
            />
            <InputFild classInput="-valor" 
              name="valor" 
              label="Valor Entrega" 
              mask='money' 
              inputmode="numeric" 
              v-model="clienteValor" 
            />
          </div>
           
            
          <div class="buttonClient" v-if="clienteId" >
            <FlatButton classButton="-delete" :handleclick="()=>{}" title="Deletar" />
            <FlatButton classButton="-edit" :handleclick="()=>{}" title="Editar Cliente" />
              <FlatButton classButton="-edit" :handleclick="()=>{}" title="Editar Cliente" />
          </div>
             
      </fieldset>


      <ComboBoxProduct :selectClient="selectClient" />
        
      <div class="divButtons">
        <FlatButton classButton="-save" v-if="true" :handleclick="()=>{}" title="Gravar" />
        <FlatButton classButton="-change" v-else :handleclick="()=>{}" title="Alterar" />
        <FlatButton classButton="-clean" :handleclick="cleanFilds" title="Limpar" />    
      </div> 

      </form>
    </div>

  </div>
</template>

<script>
  import PageTitle from '@/components/PageTitle/PageTitle'
  import ComboBoxClient from '@/components/ComboBox/ComboBoxClient/ComboBoxClient'
  import ComboBoxProduct from '@/components/ComboBox/ComboBoxProduct/ComboBoxProduct'
  import InputFild from '@/components/InputFild/InputFild'
  import FlatButton from '@/components/FlatButton/FlatButton'

export default {
  components: { PageTitle, ComboBoxClient, ComboBoxProduct, InputFild, FlatButton },

  data() {
    return {
      list: [],
      listTable: [],
      filteredList: [],
    }
  },

  computed: {
    checkId() {
      if(this.clienteId)
        return true
      else
        return false
    },
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

  methods: {
    
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

    cleanFilds() {// Limpa o store cliente para limpar os campos do form e limpa o filtro do dropDownList//
      this.$store.commit('cleanAllCliente')
      const input = document.getElementsByTagName('input')
      input[0].focus()
    }

  }

}
</script>

<style src="./style.scss" lang="scss" />
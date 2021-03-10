<template>
  <div class="requestPage">
    <PageTitle title="Pedidos" />
    <div class="backgroundDiv">
      <form @submit="(event) => event.preventDefault()">

        
        <p class="id">ID: {{ clienteId }}</p>
        <fieldset>
        <legend>Cliente</legend>

          
          <ComboBoxClient :selectClient="selectClient" />
        
          <div class="clientInf" v-show="checkId">
            <InputFild classInput="-tel" 
              name="celular" 
              mask="cellPhone" 
              label="Celular" 
              v-model="clienteCelular" 
              inputmode="numeric" 
            />

            <InputFild classInput="-valor" 
              name="valor" 
              label="Valor Entrega" 
              mask='money' 
              inputmode="numeric" 
              v-model="clienteValor" 
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
            
          </div>
           
            
          <div class="buttonClient" v-if="clienteId" >
            <FlatButton classButton="-edit" v-if="checkEdit" :handleclick="checkEditFunc" title="Editar Cliente" />
            <FlatButton classButton="-change" v-else :handleclick="changeClientBD" title="Alterar" />
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
      checkEdit: true,

    }
  },

  computed: {
    checkId() { return this.clienteId ? true : false },
    // ========== Cliente Store ======================
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

    checkEditFunc() { //Troca o botão atual do cliente
      this.checkEdit = !this.checkEdit
      this.readonly()
      
    },

    readonly() { //Define se os inputs do cliente podem ser alterados ou não
      const tel = document.querySelector('.divInput.-tel > input')
      const valor = document.querySelector('.divInput.-valor > input')
      const rua = document.querySelector('.divInput.-rua > input')
      const num = document.querySelector('.divInput.-num > input')
      const bairro = document.querySelector('.divInput.-bairro > input')
      const cidade = document.querySelector('.divInput.-cidade > input')

      if(this.checkEdit) {
        tel.setAttribute('readonly', true)
        valor.setAttribute('readonly', true)
        rua.setAttribute('readonly', true)
        num.setAttribute('readonly', true)
        bairro.setAttribute('readonly', true)
        cidade.setAttribute('readonly', true)
      }
      else {
        tel.removeAttribute('readonly')
        valor.removeAttribute('readonly')
        rua.removeAttribute('readonly')
        num.removeAttribute('readonly')
        bairro.removeAttribute('readonly')
        cidade.removeAttribute('readonly')
      }

      

    },
    
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

      this.checkEdit = true
      this.readonly()

    },

    cleanFilds() {// Limpa o store cliente para limpar os campos do form e limpa o filtro do dropDownList//
      this.$store.commit('cleanAllCliente')
      const input = document.getElementsByTagName('input')
      input[0].focus()
      this.checkEdit = true
    },

    changeClientBD() {
      alert('alterar')
      this.checkEdit = true
      this.readonly()
    }
   

  }

}
</script>

<style src="./style.scss" lang="scss" />
<template>
  <div class="requestPage">
    <PageTitle title="Pedidos" />
    <div class="backgroundDiv">
      <form @submit="(event) => event.preventDefault()">

        
        <p>ID: {{ clienteId }}</p>
        <fieldset>
        <legend>Cliente</legend>

          
          <ComboBoxClient :selectClient="selectClient" />
        
          <div class="clientInf" v-show="checkIdClient">
            <InputFild classInput="client_tel" 
              name="celular" 
              mask="cellPhone" 
              label="Celular" 
              v-model="clienteCelular" 
              inputmode="numeric" 
              :editable="editable"
            />

            <InputFild classInput="client_valor" 
              name="valor" 
              label="Valor Entrega" 
              mask='money' 
              inputmode="numeric" 
              v-model="clienteValor" 
              :editable="editable"
            />

            <InputFild classInput="client_rua" 
              name="rua" 
              label="Rua" 
              v-model="clienteRua"
              :editable="editable" 
            />

            <InputFild classInput="client_num" 
              name="num" 
              label="Nº" 
              v-model="clienteNum"
              :editable="editable" 
            />
            <InputFild classInput="client_bairro" 
              name="bairro" 
              label="Bairro" 
              v-model="clienteBairro"
              :editable="editable" 
            />
            <InputFild classInput="client_cidade" 
              name="cidade" 
              label="Cidade" 
              v-model="clienteCidade"
              :editable="editable" 
            />
            
          </div>
           
            
          <div class="buttonClient" v-if="clienteId" >
            <FlatButton classButton="-edit" v-if="!editable" :handleclick="editableFunc" title="Editar Cliente" />
            <FlatButton classButton="-change" v-else :handleclick="changeClientBD" title="Alterar" />
          </div>
             
      </fieldset>
      <p class="id">ID: {{ produtoId }}</p>
      <fieldset>
        <legend>Produtos</legend>
        <ComboBoxProduct :selectProduct="selectProduct" />
        
        <div class="productInf" v-show="checkIdProduct">

          <InputFild classInput="product_qtd" 
            name="quantidade" 
            label="Qtd." 
            mask="noLetter"
            type="number" 
            inputmode="numeric" 
            v-model="produtoQtd" 
          />
          <InputFild classInput="product_valor" 
            name="valor" 
            label="Valor" 
            mask='money' 
            inputmode="numeric" 
            v-model="produtoValor" 
          />

        </div>
      </fieldset>
        
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

  import data from '@/database/data'

  export default {
  components: { PageTitle, ComboBoxClient, ComboBoxProduct, InputFild, FlatButton },

  data() {
    return {
      list: [],
      listTable: [],
      filteredList: [],
      editable: false,

      produtoQtd: '1',

    }
  },

  computed: {
    checkIdClient() { return this.clienteId ? true : false },
    checkIdProduct() { return this.produtoId ? true : false },
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

    editableFunc() { //Troca o botão atual do cliente

      this.editable = !this.editable
      this.readonly()
      
    },

    readonly() { //Define se os inputs do cliente podem ser alterados ou não
      const tel = document.querySelector('.divInput.client_tel > input')
      const valor = document.querySelector('.divInput.client_valor > input')
      const rua = document.querySelector('.divInput.client_rua > input')
      const num = document.querySelector('.divInput.client_num > input')
      const bairro = document.querySelector('.divInput.client_bairro > input')
      const cidade = document.querySelector('.divInput.client_cidade > input')

      if(!this.editable) {
        tel.setAttribute('readonly', true)
        valor.setAttribute('readonly', true)
        rua.setAttribute('readonly', true)
        num.setAttribute('readonly', true)
        bairro.setAttribute('readonly', true)
        cidade.setAttribute('readonly', true)

        tel.classList.add('-readonly')
        valor.classList.add('-readonly')
        rua.classList.add('-readonly')
        num.classList.add('-readonly')
        bairro.classList.add('-readonly')
        cidade.classList.add('-readonly')
      }
      else {
        tel.removeAttribute('readonly')
        valor.removeAttribute('readonly')
        rua.removeAttribute('readonly')
        num.removeAttribute('readonly')
        bairro.removeAttribute('readonly')
        cidade.removeAttribute('readonly')

        tel.classList.remove('-readonly')
        valor.classList.remove('-readonly')
        rua.classList.remove('-readonly')
        num.classList.remove('-readonly')
        bairro.classList.remove('-readonly')
        cidade.classList.remove('-readonly')
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

      this.editable = false
      this.readonly()

    },

    selectProduct(event, product){
      event.stopPropagation();
      
      this.$store.commit('setProdutoId', product.id)
      this.$store.commit('setProdutoNome', product.nome)
      this.$store.commit('setProdutoPeso', product.peso)
      this.$store.commit('setProdutoTipo', product.tipo)
      this.$store.commit('setProdutoValor', product.valor)
      this.$store.commit('setProdutoIngredientes', product.ingredientes)

    },

    cleanFilds() {// Limpa o store cliente para limpar os campos do form e limpa o filtro do dropDownList//
      this.$store.commit('cleanAllCliente')
      this.$store.commit('cleanAllProduto')
      const input = document.getElementsByTagName('input')
      input[0].focus()
      this.editable = false
    },

    changeClientBD() { // salva uma alteração de um cliente //
      if(this.clienteId){
        const id = this.clienteId
        data.update('clientes/' + id, this.$store.getters.getClient)

        console.log('cliente:', this.$store.getters.getClient)
        this.cleanFilds()

        this.editable = true
        this.readonly()


        
        //alert('Foi alterado')
      }  
       /* this.messageText = 'Cliente alterado com sucesso!'
        this.messageClass = '-alert'
        this.messageActive = true*/

      
      
    },
   

  }

}
</script>

<style src="./style.scss" lang="scss" />
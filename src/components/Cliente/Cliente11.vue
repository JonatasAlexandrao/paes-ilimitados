<template>
  <div class="backgroundDiv customerRegistration">

    <InputFild classInput="-id" name="id" label="Id" mask="noString" inputmode="numeric" v-model="ClienteId"/>
    {{ClienteId}}
    <!-- <InputFild classInput="-nome" name="nome" label="Nome Cliente" />

    <div class="endereco">
      <p>Endereço</p>

      <InputFild classInput="-rua" name="rua" label="Rua" />
      <InputFild classInput="-num" name="num" label="Nº" mask="noString" inputmode="numeric" />
      <InputFild classInput="-bairro" name="bairro" label="Bairro" />
      <InputFild classInput="-cidade" name="cidade" label="Cidade" />
      <InputFild classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" />   
      
    </div> -->

    <input type="text" v-model="fildCliente.id">
    <button @click="saveBD">Gravar</button>
    <button @click="searchBD">Buscar</button>

  </div>
</template>

<script>
import InputFild from '@/objects/InputFild/InputFild11.vue'
import mask from '@/assets/mask/mask'

export default {
  components: { InputFild },
  
  data() {
    return {
      /*cliente: {
        id:'', 
        nome:'', 
        rua:'', 
        num:'',
        bairro:'',
        cidade:'',
        valor:''
      },*/
      ClienteId:'', 
      ClienteNome:'', 
      ClienteRua:'', 
      ClienteNum:'',
      ClienteBairro:'',
      ClienteCidade:'',
      ClienteValor:''
    }
  },

  computed: {
    fildCliente() {
      return this.$store.state.cliente
    },
    testeF() {
      return this.$store.getters.teste
    }
  },

  watch: {
    ClienteId() {
      this.ClienteId = mask.noLetter(this.ClienteId)
      console.log(this.ClienteId)
     },
     id() {
       console.log('teste')

     }
   },

  methods: {

    getInf() {
      this.cliente.id = document.getElementById('id').value
      this.cliente.nome = document.getElementById('nome').value

      this.cliente.rua = document.getElementById('rua').value
      this.cliente.num = document.getElementById('num').value
      this.cliente.bairro = document.getElementById('bairro').value
      this.cliente.cidade = document.getElementById('cidade').value
      this.cliente.valor = document.getElementById('valor').value
    },

    showInf() {
      document.getElementById('id').value = this.cliente.id
      document.getElementById('nome').value = this.cliente.nome

      document.getElementById('rua').value = this.cliente.rua
      document.getElementById('num').value = this.cliente.num
      document.getElementById('bairro').value = this.cliente.bairro
      document.getElementById('cidade').value = this.cliente.cidade
      document.getElementById('valor').value = this.cliente.valor


      console.log(this.cliente)
    },
    
    saveBD() {
      //this.getInf()

      //this.cliente.id = 2222

      console.log(this.cliente)
      console.log(this.idd)

      /*console.log(this.fildCliente.id)
      this.fildCliente.id = this.fildCliente.id.replace(/\D/g, '')
      console.log(this.fildCliente.id)*/
      //console.log(this.testeF)
      //console.log(this.idd)
      //console.log(this.cliente.id)
      //console.log(mask.noLetter(this.cliente.id))
      /*this.$http.put('cliente.json', this.cliente)
        .then(console.log('gravado'))*/
    },

    searchBD() {
      /*this.$http.get('cliente.json')
        .then(res => {
          this.cliente = res.data  
          this.showInf()        
        })*/
      
      //document.getElementById('id').value = '101010'
      this.cliente.id = '555555'
    },

  },

}
</script>

<style src="./style.scss" lang="scss"/>
<template>
  <div class="backgroundDiv customerRegistration">

    <InputFild classInput="-id" name="id" label="Id" mask="noString" inputmode="numeric" v-model="clienteId" />

    <InputFild classInput="-nome" name="nome" label="Nome Cliente" v-model="clienteNome" />

    <div class="endereco">
      <p>Endereço</p>

      <InputFild classInput="-rua" name="rua" label="Rua" v-model="clienteRua" />
      <InputFild classInput="-num" name="num" label="Nº" mask="noString" inputmode="numeric" v-model="clienteNum" />
      <InputFild classInput="-bairro" name="bairro" label="Bairro" v-model="clienteBairro" />
      <InputFild classInput="-cidade" name="cidade" label="Cidade" v-model="clienteCidade" />
      <InputFild classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" v-model="clienteValor" />   
      
    </div>

    <button @click="saveBD">Gravar</button>
    <button @click="searchBD">Buscar</button>
    <button @click="clearFilds">Limpar</button>

  </div>
</template>

<script>
import InputFild from '@/objects/InputFild/InputFild.vue'
import mask from '@/assets/mask/mask'

export default {
  components: { InputFild },
  
  data() {
    return {
      clienteId:'', 
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

    clearFilds() {
      this.clienteId=''
      this.clienteNome=''
      this.clienteRua='',
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
     this.$http.put('cliente.json', this.getInf())
        .then(console.log('gravado'))
    },

    searchBD() {
      this.$http.get('cliente.json')
        .then(res => {  
          this.showInf(res.data)    
        })
    },

  },

}
</script>

<style src="./style.scss" lang="scss"/>
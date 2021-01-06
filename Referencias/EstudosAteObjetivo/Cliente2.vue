<template>
  <div class="backgroundDiv customerRegistration">
    Cliente NOVO

    <InputFild classInput="-id" name="idd" label="Id" mask="noString" inputmode="numeric" v-model="cliente.id" :maskFn="maskFn" :input="updateData">

    <input slot="input" id="idd" name="idd" type="text" :input="updateData" v-model="id">

    </InputFild>

    <button @click="saveBD">Gravar</button>
    <button @click="searchBD">Buscar</button>

  </div>
</template>

<script type='module' src='@/assets/mask/mas'></script>
<script>
import InputFild from '@/objects/Input/InputFild.vue'
import mask from '@/assets/mask/mask'

import Merd from '@/objects/Input/merd.vue'

export default {
  components: { InputFild, Merd },
  
  data() {
    return {
      teste: '1232',
      cliente: {
        id:'123', 
        nome:'joao', 
        rua:'', 
        num:'',
        bairro:'',
        cidade:'',
        valor:''
      },
      id: '',
    }
  },


  watch: {
    id(nextValue, oldValue){
      //this.id = this.id.replace(/\D/g, '')
      this.id = mask.noLetter(this.id)
    }
  },

  methods: {

    updateData(value) {
      this.$emit('input', value)
    },

    maskFn(event){
      
      this.teste = mask.noLetter(this.teste)
      this.cliente.id = mask.noLetter(this.cliente.id)

    },

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
     /* document.getElementById('id').value = this.cliente.id
      document.getElementById('nome').value = this.cliente.nome

      document.getElementById('rua').value = this.cliente.rua
      document.getElementById('num').value = this.cliente.num
      document.getElementById('bairro').value = this.cliente.bairro
      document.getElementById('cidade').value = this.cliente.cidade
      document.getElementById('valor').value = this.cliente.valor*/
      console.log(document.getElementById('nome').value)
      //document.getElementById('nome').value = 'testes'
      this.cliente.id = '222'
      //console.log(document.getElementById('nome').value)
    },
    
    saveBD() {
      this.getInf()

      this.$http.put('cliente.json', this.cliente)
        .then(console.log('gravado'))
    },

    searchBD() {
      this.$http.get('cliente.json')
        .then(res => {
          this.cliente = res.data  
          this.showInf()        
        })
    },

  },

}
</script>

<style src="./style.scss" lang="scss"/>
<template>
  <div class="backgroundDiv customerRegistration">
    Cliente dois
    <Input classInput="-id" name="idd" label="Id" mask="noString" inputmode="numeric" v-model="cliente.id" :maskFn="maskFn" :input="updateData"/>
    <!--  -->
    <!-- <Input classInput="-nome" name="nome" label="Nome Cliente" v-model="cliente.nome" :maskFn="maskFn" />

    <div class="endereco">
      <p>Endereço</p>

      <Input classInput="-rua" name="rua" label="Rua" v-model="cliente.rua"/>
      <Input classInput="-num" name="num" label="Nº" mask="noLetter" inputmode="numeric" v-model="cliente.num"/>
      <Input classInput="-bairro" name="bairro" label="Bairro" v-model="cliente.bairro"/>
      <Input classInput="-cidade" name="cidade" label="Cidade" v-model="cliente.cidade"/>
      <Input classInput="-valor" name="valor" label="Valor Entrega" mask='money' inputmode="numeric" v-model="cliente.valor"/>   
      
    </div> -->

    <input type="text" id="teste" @input="maskFn($event)" v-model="teste">
    <button @click="saveBD">Gravar</button>
    <button @click="searchBD">Buscar</button>
    <button @click="maskFn">Teste</button>

  </div>
</template>

<script type='module' src='@/assets/mask/mas'></script>
<script>
import Input from '@/objects/Input/Input2.vue'
import mask from '@/assets/mask/mask'

export default {
  components: { Input },
  
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

  /*computed: {
    idd() {
      //console.log(this.idd)
      return this.id.replace(/\D/g, '')
    }
  },*/

  watch: {
    id(nextValue, oldValue){
      /*let valor = newValue
      console.log(valor)
      valor = mask.noLetter(valor)
      console.log(valor)
      this.id = valor*/
      //this.id = mask.noLetter(this.id)
      /*let tes = this.id.replace(/\D/g, '')
      //this.id = this.id

      document.getElementById('id').value = tes

      

      this.id = tes
      console.log(tes)*/

     /* let teste = nextValue
      //document.getElementById('idd').value = teste
      //this.id = teste
      //this.id = this.id.replace(/\D/g, '')
      console.log(teste, 'nextValue')
      teste = oldValue
      console.log(teste, 'oldValue')
      //console.log(isNaN(teste))
      
      
      
      
      if(!isNaN(nextValue)){

        console.log('numero')
      }
      else{
        console.log('-------------')
        this.id = teste
        console.log(teste)
        console.log('string')
      }

        //let t = parseFloat(nextValue)


      // console.log(t, typeof t)
      
      //console.log('ok')
     /* document.addEventListener("keydown", function(event) {
        if(event.key === "a") {
          
          console.log(oldValue)
        }
      })

      return teste*/
    }
  },

  methods: {

    updateData(value) {
      this.$emit('input', value)
      //console.log(this.idd)
      //this.$emit('input', value.replace(/\D/g, ''))
      //console.log(this.$emit('input', value.replace(/\D/g, '')))
      //this.$emit('input', value)
      //this.$emit('input', value.replace(/\D/g, ''))
      //document.getElementById('nome').focus()
      //this.maskFilter()
    },

    maskFn(event){
      //mask(this.cliente.id)
      //this.cliente.id = mask.noLetter(this.cliente.id)
      //this.cliente.id = mask.money(this.cliente.id)
      // document.getElementById('id').onkeypress = function(e) {
      //   let chr = String.fromCharCode(e.which);
      //   if("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
      //      return false;
      //   console.log('tá entrando?')
      //}
      
      this.teste = mask.noLetter(this.teste)
      this.cliente.id = mask.noLetter(this.cliente.id)
      //console.log(event)
      /*console.log(event.key)
      console.log(event)
      document.getElementById('idd').value = document.getElementById('idd').value.replace(/\D/g, '')
      console.log(document.getElementById('idd').value)*/



      //console.log(mask.money(this.cliente.id))

      /*console.log(event)

      if(event.key === "a") {
        console.log(event.key)
      }*/
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
<template>
  <div class="divInput" :class="classInput">
    <input 
      :id="name"
      :name="name"  
      :inputmode="inputmode"
      :placeholder="placeholder"
      @focus="animatedLabelFocus()"
      @blur="animatedLabelBlur(name)" 

      @keyup="maskFn($event)" 
  
      :value="value"
      @input="updateData($event.target.value)"


    >
     <!-- @input="updateData($event.target.value)" -->

    <label :class="classLabel()" :for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    //input: Function,
    maskFn: Function,
    classInput: String,
    name: String,
    placeholder: String,
    label: String,
    mask: String,
    id: String,
    inputmode: String,
    //valor: String,
    value: String,
    //valueee: Object,
  },
  data() {
    return {
      test: false,
      //value: this.valor,
      //value: null,
    }
  },

  computed: {
    
  },

  methods: {

    keydownnn() {
      console.log(this.keydown)
    },

    updateData(value) {
      //this.$emit('input', value.replace(/\D/g, ''))
      this.$emit('input', value)
      //this.$emit('input', value.replace(/\D/g, ''))
      //document.getElementById('nome').focus()
      //this.maskFilter()
    },

    classLabel() {
      if(this.test)
        return this.name + ' -m'    
      else
        return this.name
    },

    animatedLabelFocus() {
      this.test = true

      /*if(this.mask=='maskMoney')
        this.value = 'R$ 0,00'*/

      if(this.test)
        return this.name + ' -m' 
      else
        return this.name

      
    },
    animatedLabelBlur(name) {
      const input = document.getElementsByName(name) 
 
      if(input[0].value == '')
        this.test = false  
      else
        this.test = true
    },


    maskFilter() {      
      this.value = 'sdfff'
      /*if(this.mask == 'noString')
        this.noString()
      else if(this.mask == 'money'){
        this.money()
      }*/
    },


    /*noString() { 
      //let v = this.value
     // v = v.replace(/\D/g, '')
      //console.log(v)
      //this.value = v
      //const value = $event.target.value
      //this.$emit(v, vv)
      //this.$emit(this.value, vv)
      this.value = this.value.replace(/\D/g, '')
    },
    maskMoney() {
      let num = this.value.replace('R$ ', '').replace(',', '')

      if(parseFloat(num) && num.length < 3)
          num = '0,0' + num     
      
      this.value = num
        .replace(/\D/g, '')
        .replace(/(\d)(\d{2}$)/, '$1,$2')
        //.replace(/^00,00/, '0,00')
        .replace(/^00$/, '0,00')
        .replace(/^0$/, '0,00')
        .replace(/(^0)(\d{1},)(\d)/, '$2$3')
        .replace(/\d{0}/, 'R$ ')

    }*/
  },

  

}
</script>

<style src="./style.scss" lang="scss"/>

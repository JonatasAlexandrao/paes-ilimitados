<template>
  <div class="divInput" :class="classInput">
    <input 
      :id="name"
      :name="name"  
      :inputmode="inputmode"
      :placeholder="placeholder"

      @focus="animatedLabelFocus()"
      @blur="animatedLabelBlur(name)"  
      @input="updateData($event.target.value)"

      :value="value"

    >

    <label :class="classLabel()" :for="name">{{ label }}</label>
  </div>
</template>

<script>
  import mask from '@/assets/mask/mask'

export default {
  props: {
    classInput: String,
    name: String,
    placeholder: String,
    label: String,
    mask: String,
    id: String,
    inputmode: String,
    value: String,
  },

  watch: {
    value() {
      //this.$emit('input', this.value)
      //console.log(this.value)
      /*this.$emit('input', mask.noLetter(this.value))
      console.log(mask.noLetter(this.value))*/
    }
  },

  data() {
    return {
      test: false,
      //value: null,
    }
  },

  methods: {
    updateData(value) {
      /*let teste = value
      teste = mask.noLetter(teste)*/
      this.$emit('input', value)
      console.log(value)
    },

    classLabel() {

      if(this.test)
        return this.name + ' -m'    
      else
        return this.name
    },

    animatedLabelFocus() {
      this.test = true

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
      if(this.mask == 'noString'){
        document.getElementById('id').value = mask.noLetter(this.value)
        console.log(this.value)
        //this.value = mask.noLetter(this.value)
        //console.log('noString')
      }
        
      else if(this.mask == 'maskMoney'){
        this.value = mask.money(this.value)
      }
    },

    
  }
  
}
</script>

<style src="./style.scss" lang="scss"/>

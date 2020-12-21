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
      v-model="localValue"

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
    //clienteId: String,
  },

  data() {
    return {
      test: false,
      localValue: '',
      //value: null,
    }
  }, 
  watch: {
    localValue() {
      this.localValue = this.maskFilter(this.localValue)
      
    }
  },

  created() {
    this.localValue = this.value
  },

  methods: {

    updateData(value) {
      this.$emit('input', value)   
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

    maskFilter(value) { 

      if(this.mask == 'noString'){
       return value = mask.noLetter(value)
      }  
      else if(this.mask == 'money'){
        return value = mask.money(value)
      }
      else{
        return value
      }
    },

    
  }
  
}
</script>

<style src="./style.scss" lang="scss"/>

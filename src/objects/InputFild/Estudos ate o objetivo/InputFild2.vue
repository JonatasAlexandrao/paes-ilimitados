<template>
  <div class="divInput" :class="classInput">
    <slot name ="input" @click="teste"></slot>

    <label :class="classLabel()" :for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    maskFn: Function,
    classInput: String,
    name: String,
    placeholder: String,
    label: String,
    mask: String,
    id: String,
    inputmode: String,
    value: String,

  },
  data() {
    return {
      test: false,
    }
  },

  methods: {

    teste() {
      console.log('clicou')
    },

   /* keydownnn() {
      console.log(this.keydown)
    },*/

    /*updateData(value) {
      this.$emit('input', value)
    },*/

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


    /*maskFilter() {      
      this.value = 'sdfff'
      /*if(this.mask == 'noString')
        this.noString()
      else if(this.mask == 'money'){
        this.money()
      }
    },*/

  },

  

}
</script>

<style src="./style.scss" lang="scss"/>

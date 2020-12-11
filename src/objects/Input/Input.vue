<template>
  <div class="divInput" :class="classInput">
    <input 
      :name="name"  
      :type="type" 
      :placeholder="placeholder"
      @focus="animatedLabelFocus()"
      @blur="animatedLabelBlur(name)"     
    >

    <label :class="classLabel()" :for="name">{{ text }}</label>
  </div>
</template>

<script>
export default {
  props: {
    classInput: String,
    name: String,
    type: String,
    placeholder: String,
    text: String,
  },
  data() {
    return {
      test: false,
    }
  },

  methods: {
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

    }

  },

}
</script>

<style src="./style.scss" lang="scss"/>

<template>
  <div class="divInput" :class="classInput">
    <input 
      :id="name"
      :name="name"  
      :inputmode="inputmode"
      :type="type"
      :list="list"

      @input="updateData($event.target.value)"
      v-model="localValue"

      autocomplete="off"

    >
    <slot></slot>

    <label :class="smallLabel" :for="name">{{ label }}</label>
  </div>
</template>

<script>
  import mask from '@/assets/mask/mask'

export default {
  props: {
    classInput: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, default: 'text'},
    list: String,

    mask: String,
    inputmode: String,
    
  },

  data() {
    return {
      localValue: '',
    }
  },
  computed: {
    smallLabel() {
         //this.value ? this.name + ' -small' : this.name
      if(this.value)
        return this.name + ' -small'    
      else
        return this.name
    }
  },
  watch: {
    value() {
      this.localValue = this.value 
      this.localValue = this.maskFilter(this.localValue) 
    
    },
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

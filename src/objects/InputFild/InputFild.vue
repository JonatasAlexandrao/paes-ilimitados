<template>
  <div class="divInput" :class="classInput">
    <input 
      :id="name"
      :name="name"  
      :inputmode="inputmode"
      :type="type"

      @input="updateData($event.target.value)"
      
      v-model="localValue"
      @click="clickInput('clickInput')"
      

      autocomplete="off"
      

    >
    <!-- @blur="deFocus('blur')" -->
    <slot name="list"></slot>
    
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
    },
    localValue() {
     this.localValue = mask.maskFilter(this.mask, this.localValue)      
    }
  },

  created() {
    this.localValue = this.value
  },

  methods: {

    clickInput(active) {
      //event.target.select()
      //console.log(event.target)
     // event.target.select()
      //if(event.target.value)
       // event.target.select()
        //console.log(event.target.value)

      if(this.type == 'search')
        this.$store.dispatch('activeListClient', active)
    },
    deFocus() {
      if(this.type == 'search')
        this.$store.dispatch('activeListClient', 'blur')
    },

    updateData(value) {
      //this.$emit('input', value) 
      console.log(this.$emit)
      this.$emit('input', mask.maskFilter(this.mask, value))
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

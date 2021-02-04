<template>
  <div class="divInput" :class="classInput">
    <input 
      :id="name"
      :name="name"  
      :inputmode="inputmode"
      
      @focus="focus"
      @blur="deFocus"

      @input="updateData($event.target.value)"
      
      v-model="localValue"
      @dblclick="dblClickInput()"
      

      autocomplete="off"
      

    >
    <!-- :type="type" -->
    <!-- @blur="deFocus('blur')" -->
    <slot name="list"></slot>
    
    <label :class="{ '-small': smallLabel }" :for="name">{{ label }}</label>
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
    filterList: { type: Function, default: ()=>{}},

    mask: String,
    inputmode: String,
    
  },

  data() {
    return {
      localValue: '',
      smallLabel: false,
    }
  },
  watch: {
    value() { this.localValue = this.value },
    localValue() {
      this.localValue = mask.maskFilter(this.mask, this.localValue)  
      //const input = document.getElementById(this.name)

      this.localValue ? this.smallLabel = true : this.smallLabel = false
    }
  },

  created() { this.localValue = this.value },

  methods: {
    // focus e deFocus intercalam a classe da label //
    focus() { this.smallLabel = true },
    deFocus() {
      if(!this.localValue)
        this.smallLabel = false
    },

    dblClickInput() { // abrir/fechar lista do input de pesquisa com duplo click //
      if(this.type == 'search')
        this.$store.dispatch('activeListClient', 'dblclick')
    },

    updateData(value) { // chama evento do pai para filtrar a lista do input //
    
      this.$emit('input', mask.maskFilter(this.mask, value))

      this.filterList(value)

      if(this.type == 'search')
        if(this.localValue === '')
          this.$store.dispatch('activeListClient', 'empty')
        else
          this.$store.dispatch('activeListClient', 'input')
    },
  }
  
}
</script>

<style src="./style.scss" lang="scss" />


<!-- 
inputmode: Altera o tipo de teclado no celular para 
  numeric, text, decimal, tel, search, email, url
mask: a mascara de input q será usada
-->

<template>
  <div class="divInput" :class="classInput">

    <IconOpenOrClose v-if="type=='search'"
    :activeFunc="activeFunc"
    :activeVar="activeVarLocal"
    :name="this.name" />

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

    <slot name="list"></slot>
    
    <label :class="{ '-small': smallLabel }" :for="name">{{ label }}</label>
  </div>
</template>

<script>
  import IconOpenOrClose from '@/components/IconOpenOrClose/IconOpenOrClose'
  import mask from '@/assets/mask/mask'

export default {
  components: { IconOpenOrClose },

  props: {
    classInput: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, default: 'text'},
    filterList: { type: Function, default: ()=>{}},

    activeFunc: Function,
    activeVar: Boolean,

    mask: String,
    inputmode: String,
    
  },

  data() {
    return {
      localValue: '',
      smallLabel: false,
      activeVarLocal: this.activeVar,
    }
  },
  watch: {
    value() { this.localValue = this.value },
    localValue() {
      this.localValue = mask.maskFilter(this.mask, this.localValue)  
      //const input = document.getElementById(this.name)

      this.localValue ? this.smallLabel = true : this.smallLabel = false
    },
    activeVar(newValue) {
      if(newValue)
        this.activeVarLocal = true
      else
        this.activeVarLocal = false
    }
  },

  created() { this.localValue = this.value },

  methods: {
    // focus e deFocus intercalam a classe da label //
    focus() { 
      this.smallLabel = true
      //this.updateData(this.localValue)
    },
    deFocus() {
      if(!this.localValue){
        this.smallLabel = false
        this.activeFunc(false, this.name)
      }
    },

    dblClickInput() { // abrir/fechar lista do input de pesquisa com duplo click //
      if(this.type == 'search'){
        this.activeVarLocal = !this.activeVarLocal
        this.activeFunc(this.activeVarLocal, this.name)
      }

      

    },

    updateData(value) { // chama evento do pai para filtrar a lista do input //
    
      this.$emit('input', mask.maskFilter(this.mask, value))

      this.filterList(value)

      if(this.type == 'search')
        if(this.localValue === '')
          this.activeFunc(false, this.name)
        else
          this.activeFunc(true, this.name)
    },
  }
  
}
</script>

<style src="./style.scss" lang="scss" />

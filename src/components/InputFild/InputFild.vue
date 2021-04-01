
<!-- 
inputmode: Altera o tipo de teclado no celular para 
  numeric, text, decimal, tel, search, email, url
mask: a mascara de input q será usada
-->

<template>
  <div class="divInput" :class="classInput">

    <IconInputFild :type="type"
    :activeVar="activeVar"
    :name="this.name" 
    :handleclick="handleclick" />

    <input 
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
  import IconInputFild from '@/components/InputFild/IconInputFild/IconInputFild'
  //import NumberCountButtons from '@/components/InputFild/NumberCountButtons/NumberCountButtons'
  import mask from '@/assets/mask/mask'

export default {
  components: { IconInputFild },

  props: {
    classInput: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, required: true, default: ''},
    editable: { type: Boolean, default: true },
    type: { type: String, default: 'text'},
    filterList: { type: Function, default: ()=>{}},

    activeVar: Boolean,

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
    },
  },

  created() { this.localValue = this.value },

  methods: {
    // focus e deFocus intercalam a classe da label //
    focus() { 
      this.smallLabel = true
      console.log(this.$refs.fileInput)
     // console.log(document.querySelector('.product_valor > #valor').select())
      //this.updateData(this.localValue)
    },
    deFocus() {
      if(!this.localValue){
        this.smallLabel = false
        //this.activeFunc(this.name, 'disabled')
      }
    },

    dblClickInput() { // abrir/fechar lista do input de pesquisa com duplo click //
      if(this.type == 'search')
        this.$store.dispatch('activeList', [this.name])
    },

    updateData(value) { // chama evento do pai para filtrar a lista do input //
    
      this.$emit('input', mask.maskFilter(this.mask, value))

      this.filterList(value)

      if(this.type == 'search') {
        if(this.localValue === '')
          this.$store.dispatch('activeList', [this.name, 'disabled'])
        else
          this.$store.dispatch('activeList', [this.name, 'active'])
      }
        
    },
    handleclick(click, event='') { // funçoes de cada icone do input //

      const input = document.querySelector(`.${this.classInput} > input`)
      //console.log(input)

      //if(input.classList == '-readonly')
       // console.log('te4ste')

      if(click === 'comboBoxToggle') {
        this.$store.dispatch('activeList', [this.name])
        event.stopPropagation();
      }

      console.log(this.editable)

      if(this.editable){
        if(click === 'x') {
          this.localValue = ''
          
          input.focus()
        }
        else if(click === 'counterAdd') {
          this.localValue = (parseInt(this.localValue) +1).toString()
        }
        else if(click === 'counterRemove') {
          this.localValue = (parseInt(this.localValue) -1).toString()
        }

      }
    },
    select() {
      console.log('teste')
    }

  }
  
}
</script>

<style src="./style.scss" lang="scss" />

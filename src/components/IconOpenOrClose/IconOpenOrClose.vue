<template>

<div class="divIcon" @click="handleclick()">
  <img 
    class="icon"
    v-if="activeVar"
    src="@/assets/images/icons/icon_retrair.svg" 
    alt="icone para abrir lista de clientes"
    
  >
  <img 
    class="icon"
    v-else
    
    src="@/assets/images/icons/icon_expandir.svg" 
    alt="icone para abrir lista de clientes"
  >
</div>
  
</template>

<script>
export default {

  props: { activeFunc: Function, activeVar: Boolean, name: String },

  methods: {
    handleclick() {
      //const input = document.querySelector(".divInput #" + this.name)
      //console.log(input)
      //input.focus()
      //this.activeVarLocal = !this.activeVarLocal
      this.activeFunc(this.name)
      //this.$store.dispatch('activeListProdutoNome')
      //console.log(this.$state.activeList.clienteNome)

    }
  },

}
</script>

<style src="./style.scss" lang="scss" />
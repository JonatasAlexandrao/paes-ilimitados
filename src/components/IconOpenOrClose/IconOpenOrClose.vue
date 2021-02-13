<template>

<div class="divIcon" @click="handleclick()">
  <img 
    class="icon"
    v-if="activeVarLocal"
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
  watch: {
    activeVar(newValue) {
      if(newValue)
        this.activeVarLocal = true
      else
        this.activeVarLocal = false
    }
  },
  data(){ return{ activeVarLocal: this.activeVar } },

  methods: {
    handleclick() {
      this.activeVarLocal = !this.activeVarLocal
      this.activeFunc(this.activeVarLocal, this.name)
    }
  },

}
</script>

<style src="./style.scss" lang="scss" />
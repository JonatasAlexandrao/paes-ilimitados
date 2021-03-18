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

  props: { activeVar: Boolean, name: String },

  methods: {
    handleclick() { //this.$store.dispatch
      //this.$store.dispatch('activeList', [this.name])
      //this.$store.dispatch('activeListClienteNome', [this.name])
      //this.$store.dispatch('activeListClienteNome', 'toggle')
      this.$store.dispatch('activeList', [this.name])
      //console.log(this.$store.getters.getActiveList)
    }
  },

}
</script>

<style src="./style.scss" lang="scss" />
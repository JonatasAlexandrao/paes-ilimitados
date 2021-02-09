<template>

<div class="divIcon" @click="handleclick()">
  <img 
    class="icon"
    v-if="$store.state.activeListClient"
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

  methods: {
    handleclick() {
      this.$store.dispatch('activeListClient','toggle')
      console.log('click no icone')
    }
  },

}
</script>

<style src="./style.scss" lang="scss" />
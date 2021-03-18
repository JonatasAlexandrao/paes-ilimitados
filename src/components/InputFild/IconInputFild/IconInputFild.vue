<template>
 <!-- ---- REFAZER COMPONENTE PARA TER TODOS OS ICONES DO INPUT -> O DE ABRIR A LISTA E fechar
  -> O DE CONTADOR 
  -> O DE 'X' PARA LIMPAR O INPUT -->
<div>

  <div class="divIcon -text" v-if="type=='text'" @click="handleclick">
    <img class="icon" 
      src="@/assets/images/icons/icon_x.svg" 
      alt="icone para abrir lista de clientes"
    >
  </div>
  <div class="divIcon -search" v-if="type=='search'"  @click="comboBoxToggle($event)">
    <img 
      class="icon"
      v-if="activeVar"
      src="@/assets/images/icons/icon_retrair.svg" 
      alt="icone para abrir lista de clientes"
      
    >
    <img 
    @click="comboBoxToggle"
      class="icon"
      v-else
      
      src="@/assets/images/icons/icon_expandir.svg" 
      alt="icone para abrir lista de clientes"
    >
  </div>
  <div class="divIcon -number" v-if="type=='number'" @click="handleclick">
    <div class="icon -add"> 
      <img  
      src="@/assets/images/icons/triangle.svg" 
      alt="icone para abrir lista de clientes"
      >
    </div>
    <div class="icon -remove"> 
      <img  
        src="@/assets/images/icons/triangle.svg" 
        alt="icone para abrir lista de clientes"
      >
    </div>
  </div>

</div>

  
</template>

<script>
export default {

  props: { activeVar: Boolean, 
  name: String, type: String },

  computed: {
      toggleList() {
        if(this.activeVar)
          return "@/assets/images/icons/icon_retrair.svg"
        else
          return "@/assets/images/icons/icon_expandir.svg"
      }
  },

  methods: {
    handleclick() {
      console.log('click')
    },
    comboBoxToggle(event) { //this.$store.dispatch
      this.$store.dispatch('activeList', [this.name])
      event.stopPropagation();
    }
  },

}
</script>

<style src="./style.scss" lang="scss" />
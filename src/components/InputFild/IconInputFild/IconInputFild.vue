<template>
<div>

  <div class="divIcon -text" v-if="type=='text'" @click="handleclick('x')">
    <svg class="icon -x" alt="icone para abrir lista de clientes"
    viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L1 7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 1L7 7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div class="divIcon -search" v-if="type=='search'"  @click="handleclick('comboBoxToggle', $event)">
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
  <div class="divIcon -number" v-if="type=='number'" >
    <div class="icon -add" @click="handleclick('counterAdd')"> 
      <img  
      src="@/assets/images/icons/triangle.svg" 
      alt="icone para abrir lista de clientes"
      >
    </div>
    <div class="icon -remove" @click="handleclick('counterRemove')" > 
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

  props: { 
    activeVar: Boolean, 
    name: String, 
    type: String,
   handleclick: Function,

  },

  computed: {
      toggleList() {
        if(this.activeVar)
          return "@/assets/images/icons/icon_retrair.svg"
        else
          return "@/assets/images/icons/icon_expandir.svg"
      }
  },

  methods: {
  },

}
</script>

<style src="./style.scss" lang="scss" />
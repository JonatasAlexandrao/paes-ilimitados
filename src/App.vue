<template>
  <div id="app">
    <nav class="menu">

      <div class="tabs">
        <div class="tab" :class="active">Venda</div>
        <div class="tab">Mês</div>
        <div class="tab">Dia</div>
      </div>
      <div class="option">°°°</div>
    </nav>

    <div class="desktop">
     <Cliente />
    </div>

  </div>
  
</template>

<script>

import Cliente from '@/components/Cliente/Cliente.vue'

export default {
  name: 'App',
  components: { Cliente },
  data(){
    return {
      active: "",
    }
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>


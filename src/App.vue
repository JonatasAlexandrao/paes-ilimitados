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
      <Produto />
      <Cliente v-if="false"/>
    </div>

  </div>
  
</template>

<script>

import Cliente from '@/pages/Cliente/Cliente.vue'
import Produto from '@/pages/Produto/Produto'

export default {
  name: 'App',
  components: { Cliente, Produto },
  data(){
    return {
      active: "",
    }
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>


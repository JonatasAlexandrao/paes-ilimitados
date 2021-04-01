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
      <Pedido v-if="true"/>
      <Produto v-if="false"/>
      <Cliente v-if="true"/>
    </div>

  </div>
  
</template>

<script>

import Cliente from '@/pages/Cliente/Cliente.vue'
import Produto from '@/pages/Produto/Produto'
import Pedido from '@/pages/Pedido/Pedido'

export default {
  name: 'App',
  components: { Cliente, Produto, Pedido },
  data(){
    return {
      active: "",
    }
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>


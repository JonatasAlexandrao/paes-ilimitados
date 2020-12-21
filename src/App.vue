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
     <!-- <Cliente /> -->
     <Cliente11 />
    </div>

  </div>
  
</template>

<script>

//import Cliente from '@/components/Cliente/Cliente.vue'
import Cliente11 from '@/components/Cliente/Cliente11.vue'

export default {
  name: 'App',
  components: { /*Cliente,*/ Cliente11 },
  data(){
    return {
      active: "",
    }
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>


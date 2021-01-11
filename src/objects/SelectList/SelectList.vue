<template>
<div class="selectList" :class="active">
  <div class="optionList" v-for="(item, index) in lista" :key="index">
    <input type="radio" name="radioClientes" :id="index">
    <label :for="index">{{ item.nome }}</label>
  </div>     
</div>
  
</template>

<script>
export default {

  props: {
    itens: { type:Array, required: true},
    activeList: Boolean,
  },

  data() {
    return {
      lista: this.itens,
      //teste: '-active'
    }
  },
  computed: {
    active() {
      if(this.activeList)
        return '-active'
      else
        return ''
        //return '-active'

    }
  }

}
</script>

<style src="./style.scss" lang="scss"/>

<template>
<div class="selectList" :class="active">
  <div class="optionList" v-for="(item, index) in lista" :key="index">
    <input type="radio" name="radioClientes" :id="index">
    <label :for="index" :value="item.id" @click=' handleclick($event.target.attributes.value.value)'>{{ item.nome }}</label>
  </div>     
</div>
  
</template>

<script>
export default {

  props: {
    itens: { type: Array, required: true},
    //activeList: Boolean,
  },

  data() {
    return {
      lista: this.itens,
    }
  },
  computed: {
    activeList() {
      return this.$store.state.activeListClient
    },
    active() {
      if(this.activeList)
        return '-active'
      else  
        return ''
    }
  },
  methods: {
    handleclick(ev) {
      console.log(ev)
    }
    /*testandoVuex() {
      console.log(this.produtoVuex)
    }*/
  }

}
</script>

<style src="./style.scss" lang="scss"/>

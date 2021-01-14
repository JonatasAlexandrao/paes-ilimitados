<template>
<div class="selectList" :class="active">
  <div class="optionList" v-for="(item, index) in lista" :key="index">
    <input class="radio" type="radio" name="radioClientes" :id="index" :value="item.id">
    <!-- <label :for="index" :value="item.id" @click=' handleclick($event.target.attributes.value.value)'>{{ item.nome }}</label> -->
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
      //const teste = document.getElementsByClassName('optionList').parent('radio')
      //const teste2 = document.getElementsByTagName('input').type('radio')
      //const teste3 = document.querySelector("input[name=radioClientes]:checked")
      //console.log(teste3)
      this.$store.state.cliente.id = ev
    }
    /*testandoVuex() {
      console.log(this.produtoVuex)
    }*/
  }

}
</script>

<style src="./style.scss" lang="scss"/>

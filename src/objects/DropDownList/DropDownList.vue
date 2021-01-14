<template>
  <div class="selectList" :class="active">
    <div class="optionList" v-for="(item, index) in lista" :key="index" >
      <input type="radio" name="radioClientes" :id="index">
      <label :for="index" @click="handleclick($event.target.attributes.value.value)" :value="item.id">{{ item.nome }}</label>
    </div>     
  </div>
</template>

<script>
export default {

  props: {
    itens: { type: Array, required: true},
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
      //this.$store.state.cliente.id = ev
    }

  }

}
</script>

<style src="./style.scss" lang="scss"/>

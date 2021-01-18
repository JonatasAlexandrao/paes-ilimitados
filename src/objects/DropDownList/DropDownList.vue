<template>
  <div class="selectList" :class="active">
  <!-- <div class="selectList" v-if="activeList"> -->
    <ul class="optionList" v-for="(item, index) in lista" :key="index" >
      <!-- <input type="radio" name="radioClientes" :id="index"> -->
      <li :for="index" @click="handleclick($event.target.attributes.value.value)" :value="item.id">{{ item.nome }}</li>
    </ul>     
  </div>
</template>

<script>
export default {

  props: {
    itens: { type: Array, required: true},
    selectClient: { type: Function}
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
    handleclick(id) {

      /*this.$store.dispatch('selectedItemId', id)
      console.log(this.$store.state.idCliente)*/

      const client = this.lista.filter(l => l.id == id)
      this.selectClient(...client)
    }

  }

}
</script>

<style src="./style.scss" lang="scss"/>

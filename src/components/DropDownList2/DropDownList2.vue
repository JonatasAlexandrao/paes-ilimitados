<template>
  <div class="selectList" :class="{'-active' : activeVar}">
    <ul class="optionList" v-for="(item, index) in list" :key="index" >
      <li :for="index" @click="handleclick($event)" :value="item.id">{{ item.nome }}</li>
    </ul>     
  </div>
</template>

<script>
export default {

  props: {
    itens: { type: Array, required: true},
    select: { type: Function},
    activeVar: Boolean,
  },
  computed: {
    //activeList() { return this.$store.state.activeListClient },
    list() { return this.itens }
  },
  methods: {
    handleclick(event) { // pega o id do item clicado na lista, procura o cliente com esse id e envia para o evento selectClient do pai //
      const id = event.target.attributes.value.value
      const product = this.list.filter(l => l.id == id)
      this.select(event,...product)

      //this.$store.dispatch('activeListClient', 'toggle')
      //this.active = false

    }
  },
}
</script>

<style src="./style.scss" lang="scss"/>

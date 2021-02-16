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
    select: { type: Function },
    activeVar: { type: Boolean },
    name: { type: String },
  },
  computed: {
    //activeList() { return this.$store.state.activeListClient },
    list() { return this.itens }
  },
  methods: {
    handleclick(event) { // pega o id do item clicado na lista, procura o produto com esse id e envia para o evento select do pai //
      const id = event.target.attributes.value.value
      const iten = this.list.filter(l => l.id == id)
      this.select(event,...iten)

      this.$store.dispatch('activeList', this.name, 'disabled')
    }
  },
}
</script>

<style src="./style.scss" lang="scss"/>

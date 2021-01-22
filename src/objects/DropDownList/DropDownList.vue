<template>
  <div class="selectList" :class="active">
  <!-- <div class="selectList" v-if="activeList"> -->
    <ul class="optionList" v-for="(item, index) in list" :key="index" >
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
  computed: {
    activeList() {
      return this.$store.state.activeListClient
    },
    active() {
      if(this.activeList)
        return '-active'
      else  
        return ''
    },
    list() {
      return this.itens
    }
  },
  methods: {
    handleclick(id) {
      console.log('list ',this.list)
      console.log('itens ',this.itens)
      const client = this.list.filter(l => l.id == id)
      this.selectClient(...client)

      this.$store.dispatch('activeListClient', 'clickList')
    }

  }

}
</script>

<style src="./style.scss" lang="scss"/>

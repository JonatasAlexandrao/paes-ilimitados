<template>
  <InputFild classInput="-prod -search" name="produtoNome" label="Produto" v-model="produtoNome" type="search" :filterList="filterList" :activeVar="$store.state.activeList.produtoNome" mask="letter">

    <div slot="list" class="selectList -productName" :class="{'-active' : $store.state.activeList.produtoNome}">
      <ul class="optionList" v-for="(item, index) in filteredList" :key="index" >
        <li :for="index" @click="handleclick($event)" :value="item.id">{{ item.nome }}</li>
      </ul>     
    </div>
  </InputFild>

</template>

<script>
import InputFild from '@/components/InputFild/InputFild.vue'

import mask from '@/assets/mask/mask'
import data from '@/database/data'

export default {
  components: { InputFild },

  computed: {
    produtoNome: {
      get(){ return this.$store.getters.getProNome },
      set(value){ this.$store.commit('setProdutoNome', value) }
    },
  },

  props: {
    selectClient: Function,
  },

  created() { this.getList() },

  data() {
    return {
      list: [],
      filteredList: [],
    }
  },

  methods: {
    filterList(value) { // Filtra lista do input cliente //

      value = mask.maskFilter('letter', value)

       this.filteredList = this.list.filter(elem => {
        const nome = elem.nome.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')

        const rule = `${value}.*`
        const regex = new RegExp(rule, "gim")

        return nome.match(regex) 
       
      })       
      return value
    },

    sortList(list) { // ordena a lista em ordem alfabetica //
      list.sort(function (a, b) { 
        if(a.nome > b.nome)
          return 1
        if(a.nome < b.nome)
          return -1
        
        return 0
      })
      return list
    },

    async getList() { // pega a lista de clientes no banco e coloca na variavel list //
      try {
        const listData = await data.searchList('clientes/')
         this.list = this.sortList(listData)
         this.filteredList = this.list
 
      } catch(error) {
        console.error(error)
      }
      
    },

      handleclick(event) { // pega o id do item clicado na lista, procura o produto com esse id e envia para o evento select do pai //
      const id = event.target.attributes.value.value
      const iten = this.list.filter(l => l.id == id)

      this.selectClient(event,...iten)

      this.$store.dispatch('activeList', ['clienteNome', 'disabled'])

    }


  }

}
</script>

<style src="./style.scss" lang="scss" />
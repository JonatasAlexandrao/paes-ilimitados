<template>
<div>
  <tr v-for="item in list" :key="item.id" @click="handleclick($event, item)">
    <td class="tblId">{{ item.id }}</td>
    <td class="tblNome">{{ item.nome }}</td>
    <td class="tblCel">{{ item.celular }}</td>
    <td class="tblEndereco">{{ item.rua }}, {{ item.num }}, {{ item.bairro }}</td>
    <td class="tblValor">{{ item.valor }}</td>
  </tr>
</div>

  
</template>

<script>
export default {
  props: {
    classTables: String,
    list: Array,
    header: Array,
    selectClient: { type: Function}
  },
  methods: {
    handleclick(event, client) {
      this.selectClient(event, client)   
    }
  }
}
</script>

<style src="./style.scss" lang="scss"/>
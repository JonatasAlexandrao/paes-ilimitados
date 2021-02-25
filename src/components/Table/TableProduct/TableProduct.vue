<template>

<div class="tbl" :class="classTable">
    <table>
      <thead>
        <th class="column -id">Id</th>
        <th class="column -produto">Produto</th>
        <th class="column -peso">Peso</th>
        <th class="column -tipo">Tipo</th>
        <th class="column -valor">Valor</th>
        <th class="column -ingredientes">Ingredientes</th>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id" @click="handleclick($event, item)">
          <td class="column -id">{{ item.id }}</td>
          <td class="column -produto">{{ item.nome }}</td>
          <td class="column -peso">{{ item.peso }}</td>
          <td class="column -tipo">{{ item.tipo }}</td>
          <td class="column -valor">{{ item.valor }}</td>
          <td class="column -ingredientes">{{ item.ingredientes }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr><td colspan="4">tabela de produtos</td></tr>
      </tfoot>
    </table>
  </div>
  
</template>

<script>
export default {
  props: {
    classTable: String,
    list: Array,
    header: Array,
    select: Function,
  },

  methods: {
    handleclick(event, product) { // Pega o produto clicado na tabela e envia para o evento selectProduct do pai //
      this.select(event, product)
      console.log(this.list)
    }
  }


}
</script>

<style src="./style.scss" lang="scss"/>
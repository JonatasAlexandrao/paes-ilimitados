<template>

<div class="tbl" :class="classTables">
    <table>
      <thead>
        <th v-for="(item, index) in header" :key="index">{{ item }}</th>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id" @click="handleclick($event, item)">
          <td class="tblId">{{ item.id }}</td>
          <td class="tblNome">{{ item.nome }}</td>
          <td class="tblCel">{{ item.celular }}</td>
          <td class="tblEndereco">{{ item.rua }}, {{ item.num }}, {{ item.bairro }}</td>
          <td class="tblValor">{{ item.valor }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr><td colspan="4">tabela de clientes</td></tr>
      </tfoot>
    </table>
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
    handleclick(event, client) { // Pega o cliente clicado na tabela e envia para o evento selectClient do pai //
      this.selectClient(event, client)   
    }
  }


}
</script>

<style src="./style.scss" lang="scss"/>
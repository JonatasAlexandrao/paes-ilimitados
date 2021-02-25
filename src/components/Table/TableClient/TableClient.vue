<template>

<div class="tbl" :class="classTable">
    <table>
      <thead>
        <!-- <th v-for="(item, index) in header" :key="index">{{ item }}</th> -->
        <th class="column -id">Id</th>
        <th class="column -nome">Nome</th>
        <th class="column -celular">Celular</th>
        <th class="column -endereco">Endereço</th>
        <th class="column -valorEntrega">Valor</th>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id" @click="handleclick($event, item)">
          <td class="column -id">{{ item.id }}</td>
          <td class="column -nome">{{ item.nome }}</td>
          <td class="column -celular">{{ item.celular }}</td>
          <td class="column -endereco">{{ item.rua }}, {{ item.num }}, {{ item.bairro }}</td>
          <td class="column -valorEntrega">{{ item.valor }}</td>
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
    classTable: String,
    list: Array,
    header: Array,
    select: Function,
    //selectClient: { type: Function}
  },

  methods: {
    handleclick(event, client) { // Pega o cliente clicado na tabela e envia para o evento selectClient do pai //
      this.select(event, client)
    }
  }


}
</script>

<style src="./style.scss" lang="scss"/>
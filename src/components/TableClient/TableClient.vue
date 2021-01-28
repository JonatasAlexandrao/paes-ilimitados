<template>

<div class="tbl" :class="classTables">
    <table>
      <thead>
        <!-- <th>#</th> -->
        <th>Nome</th>
        <th>Celular</th>
        <th>Endereço</th>
        <th>Valor entrega</th>
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
    teste(id) {
      console.log(id)
    },
    handleclick(event, client) {
      this.selectClient(event, client)   
    }
  }


}
</script>

<style src="./style.scss" lang="scss"/>
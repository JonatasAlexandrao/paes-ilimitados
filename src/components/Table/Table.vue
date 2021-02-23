<template>

<div class="tbl" :class="classTable">
    <table>
      <thead>
        <th v-for="(item, index) in header" :key="index">{{ item }}</th>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id" @click="handleclick($event, item)">
          <td :class="'tbl'+index" v-for="(data, index) in item" :key="index">{{ data }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr><td colspan="4">tabela</td></tr>
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
    select: { type: Function}
  },

  methods: {
    handleclick(event, item) { // Pega o cliente clicado na 
      this.select(event, item)      
    }
  }


}
</script>

<style src="./style.scss" lang="scss"/>
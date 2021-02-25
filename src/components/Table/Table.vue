<template>

<div class="tbl" :class="classTable">
    <table>
      <thead>
        <th :class="'column' + index" 
          v-for="(item, index) in header" 
          :key="index">{{ item }}
        </th>
      </thead>
      <tbody>
        <tr :class="'colunm'+index" 
          v-for="(item, index) in list" 
          :key="index" 
          @click="handleclick($event, item)">
          <td :class="(item.id+'')" v-for="cell in item" :key="cell+item.id+''" >{{cell}}</td>
          <!-- <td v-for="(data, index) in item" 
          :key="index">{{ data }}
          </td> -->
        <!-- <tr :class="'colunm'+index" 
          v-for="(rowData, index) in list" 
          :key="index" 
          @click="handleclick($event, rowData)">
          <td v-for="(data, index) in rowData" 
          :key="index">{{ data }}
          </td> -->
          <!-- <td class="s" v-for="data in rowData" >{{ data }}</td> -->
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
  computed: {
    keyTeste() {
      var date = new Date()
      return date.getMilliseconds()
    }
  },

  methods: {
    handleclick(event, item) { // Pega o cliente clicado na 
      this.select(event, item)     
      console.log(this.key)
    }
  }


}
</script>

<style src="./style.scss" lang="scss"/>
<template>
<div class="combo">
  <InputFild classInput="-nome" name="nome" label="Nome Cliente" v-model="localValue" />

  <select class="list" v-model="localValue">
    
      <option value="Select">Select....</option>
      <option value="html">HTML 5</option>
      <option value="css">CSS 3</option>
      <option value="javascript">Javascript/Ajax</option>
      <option value="bootstrap">Bootstrap</option>
      <option value="react">React JS</option>
      <option value="vue">Vue JS</option>
      <option value="2">Angular 2</option>
      <option value="4">Angular 4</option>
      <option value="5">Angular 5</option>
      <option value="6">Angular 6</option>
      <option value="7">Angular 7</option>
      <option value="8">Angular 8</option>
      <option value="CSS fw">CSS framework</option>
      <option value="rw">Responsive Web Design</option>
      <option value="dom">DOM scripting</option>
      <option value="preprocessors">Saas, Less</option>
      <option value="api">HTML 5 API</option>
    </select>
</div>
</template>

<script>
import InputFild from '@/objects/InputFild/InputFild.vue'
export default {
  components: { InputFild },

  props: {
    value: { type: String, required: true },
  },
  data() {
    return {
      localValue: '',
    }
  },
  watch: {
    value() {
      this.localValue = this.value
    },
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>
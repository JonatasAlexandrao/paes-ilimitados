<template>
  <div class="messagerError" v-if="!validateInput"> 
    Erro: {{ errorMessage }}
  </div>
</template>

<script>
export default {

  props: {
    validateInput: Boolean,
    errorMessage: String,
  },

  data() {
    return {
      error: true
      
    }
  },

  methods: {
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>
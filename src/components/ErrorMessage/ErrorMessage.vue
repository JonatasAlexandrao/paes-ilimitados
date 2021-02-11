<template>
  <div class="messagerError" :class="classMessager" > 
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
  computed: {
    classMessager() {
      if(!this.validateInput)
        return '-active'
      else  
        return ''
    }
  },

  methods: {
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>
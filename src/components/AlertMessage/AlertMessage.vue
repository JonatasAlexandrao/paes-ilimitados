<template>
  <div class="message" :class="alertMessage.class" > 
    Messagem: {{ alertMessage.message }}
  </div>
</template>

<script>
export default {

  props: {
   // validateInput: Boolean,
    message: String,
    //classMessager: String,
    alertMessage: Object,
  },

  data() {
    return {
      error: true   
    }
  },
  computed: {
    /*classMessager() {
      if(!this.validateInput)
        return '-active'
      else  
        return ''
    }*/
  },

  /*created() {
    console.log(this.alertMessage.message)
    
  },*/

  methods: {
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>
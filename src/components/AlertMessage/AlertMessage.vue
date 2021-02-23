<template>
  <div class="message" :class="className" > 
    Messagem: {{ messageText }}
  </div>
</template>

<script>
export default {

  props: {
    messageActive: Boolean,
    messageText: String,
    messageClass: String,
  },

  data() {
    return {
      error: true   
    }
  },
  computed: {
    className() {
      if(this.messageActive)
        return '-active ' + this.messageClass
      else  
        return ''
    }
  },

  /*created() {
    console.log(this.alertMessage.message)
    
  },*/

  methods: {
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>
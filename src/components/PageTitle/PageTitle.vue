<template>
  <header class="pageTitle"> 
    <h1>{{ title }}</h1>  
  </header>
</template>

<script>
export default {

  props: {
    title: String,
  }

}
</script>

<style src="./style.scss" lang="scss"/>
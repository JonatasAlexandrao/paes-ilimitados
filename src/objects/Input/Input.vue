<template>
  <div class="divInput" :class="classInput">
    <input class="input" 
      :name="name"  
      :type="type" 
      :value="text" 
      :placeholder="placeholder"
    >
    <label :for="name">{{ text2 }}</label>
  </div>
</template>

<script>
export default {
  props: {
    classInput: String,
    name: String,
    type: String,
    placeholder: String,
    text: String,
    text2: String,
  }
}
</script>

<style src="./style.scss" lang="scss"/>

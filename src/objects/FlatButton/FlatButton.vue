<template>
  <button class="btn -t" :class="classButton" @click="handleclick"> {{ title }} </button>
</template>

<script>
export default {
  props: {
    classButton: String,
    handleclick: { type: Function, required: true },
    title: { type: String, required: true },
  },

}
</script>

<style src="./style.scss" lang="scss"/>
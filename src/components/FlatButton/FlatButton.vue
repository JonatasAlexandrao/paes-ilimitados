<template>
  <button class="flatButton" :class="classButton" @click="handleclick"> {{ title }} </button>
</template>

<script>
export default {
  props: {
    classButton: String,
    handleclick: { type: Function, required: true },
    title: { type: String, required: true },
  },
  methods: {
    /*click(event) {
      event.preventDefault();
      console.log(event)
    }*/
  }

}
</script>

<style src="./style.scss" lang="scss"/>
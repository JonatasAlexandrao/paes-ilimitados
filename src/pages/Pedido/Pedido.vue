<template>
  <div class="requestPage">
    <PageTitle title="Pedidos" />
    <div class="backgroundDiv">
      <form @submit="(event) => event.preventDefault()">
        
      </form>
    </div>

  </div>
</template>

<script>
  import PageTitle from '@/components/PageTitle/PageTitle'
export default {
  components: { PageTitle }

}
</script>

<style src="./style.scss" lang="scss" />
<template>
  <div class="backgroundDiv customerRegistration">

    <input class="input -id" type="text" value="Id Cliente" >
    <input class="input -name" type="text" placeholder="Nome Cliente">

    <Input classInput="-id" name="id" type="text" text="Id" />
    <Input classInput="-name" name="nome" type="text" text="Nome Cliente" />

    <div class="endereco">
      <p>Endereço</p>
      <input class="input -street" type="text" placeholder="Rua">
      <input class="input -num" type="number" placeholder="Nº">
      <input class="input -neighborhood" type="text" placeholder="Bairro">
      <input class="input -city" type="text" placeholder="Cidade">
      <input class="input -value" type="number" placeholder="Valor Entrega">

      <!-- <Input classInput=" -street" name="teste" type="text" placeholder="Rua" />
      <Input classInput=" -num" name="teste" type="number" placeholder="Nº" />
      <Input classInput=" -neighborhood" name="teste" type="text" placeholder="Bairro" />
      <Input classInput=" -city" name="teste" type="text" placeholder="Cidade" />
      <Input classInput=" -value" name="teste" type="number" placeholder="Valor Entrega" /> -->
      
    </div>

    <Input classInput=" -id" name="teste" type="text" text="testando" />

  </div>
</template>

<script>
import Input from '@/objects/Input/Input.vue'

export default {
  components: { Input },
}
</script>

<style src="./style.scss" lang="scss"/>
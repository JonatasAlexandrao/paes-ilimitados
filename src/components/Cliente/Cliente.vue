<template>
  <div class="backgroundDiv customerRegistration">

    <Input classInput="-id" name="id" type="id" text="Id" />
    <Input classInput="-nome" name="nome" type="nome" text="Nome Cliente" />

    <div class="endereco">
      <p>Endereço</p>

      <Input classInput=" -rua" name="rua" type="text" placeholder="Rua" />
      <Input classInput=" -num" name="num" type="number" placeholder="Nº" />
      <Input classInput=" -bairro" name="bairro" type="text" placeholder="Bairro" />
      <Input classInput=" -cidade" name="cidade" type="text" placeholder="Cidade" />
      <Input classInput=" -valor" name="valor" type="number" placeholder="Valor Entrega" />
      
    </div>


  </div>
</template>

<script>
import Input from '@/objects/Input/Input.vue'

export default {
  components: { Input },
}
</script>

<style src="./style.scss" lang="scss"/>
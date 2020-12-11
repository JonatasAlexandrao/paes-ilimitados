<template>
  <div class="backgroundDiv customerRegistration">

    <Input classInput="-id" name="id" type="id" text="Id" />
    <Input classInput="-nome" name="nome" type="nome" text="Nome Cliente" />

    <div class="endereco">
      <p>Endereço</p>

      <Input classInput="-rua" name="rua" type="text" text="Rua" />
      <Input classInput="-num" name="num" type="number" text="Nº" />
      <Input classInput="-bairro" name="bairro" type="text" text="Bairro" />
      <Input classInput="-cidade" name="cidade" type="text" text="Cidade" />
      <Input classInput="-valor" name="valor" type="number" text="Valor Entrega" />
      
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
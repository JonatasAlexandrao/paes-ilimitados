<template>
  <div id="app">
    <nav class="menu">

      <div class="tabs">
        <div class="tab" :class="active">Venda</div>
        <div class="tab">Mês</div>
        <div class="tab">Dia</div>
      </div>
      <div class="option">°°°</div>
    </nav>

    <div class="cadastroCliente">

      <input class="input" type="text" value="Id Cliente">
      <input class="input" type="text" placeholder="Nome Cliente">

      <div class="endereco">
        <input class="input" type="text" placeholder="Rua">
        <input class="input" type="number" placeholder="Nº">
        <input class="input" type="text" placeholder="Bairro">
        <input class="input" type="text" placeholder="Cidade">
        <input class="input" type="number" placeholder="Valor Entrega">
      </div>

    </div>

  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {  },
  data(){
    return {
      active: "",
    }
    
  }

}
</script>

<style src="./style.scss" lang="scss"/>
<style>

.input {
  width: 200px;
  height: 30px;
}

.cadastroCliente {
  background-color: cadetblue;
  width: 95%;
  padding: 10px;

  box-sizing: border-box;
}

.endereco {
  border: floralwhite 1px solid;
  padding: 10px;
  /*box-sizing: border-box;*/
}

</style>


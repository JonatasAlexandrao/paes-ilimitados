OPTIONS.CLASSLIST.TOGGLE("ACTIVE")
----------------------------------------
document.getElementById("meu-input").onkeypress = function(e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        mostrarValor();
        e.preventDefault();
    }
}
----------------------------------------
410x750



- criar componente botão

--> Tela cliente:
  - criar mascara para o input celular

  -->Imput com lista de nomes
  - quando usado o evento blur para sumir a lista no celular o click não está pegando os valores e adicionando nos inputs.

 --> Banco 
  - validar campos antes de gravar no BD
  - não permitir gravar completamente em branco
  - Exibir mensagem de confirmação de save
  

--> Button
  - escolher cores para os botões
  - quando todos os inputs estiverem com valores o gravar pode ficar colorido

- Seria o certo separar em um arquivo as functions que mexem com o banco e só chamalas no componente passando um obj...


- Pesquisar sobre scolp da tag style do vue 

# Pensamentos:
  

# Problemas:
    
(ok) povoar o campo ID automaticamente
(ok) como fazer para q no celular já passe direto para o proximo campo depois (tab)
(ok) quando digitando caracter invalido no input ele tá tirando a classe da label até ser digitado um numero valido
(OK) - quando troca o tipo de input muda o teclado no celular.
(OK)- quando uso type number no input o replace para de funcionar, então as mascaras não estão funcionando em campos não text
(OK) criar evento para limpar inputs
(ok) foi trocado a div por um form e agora o "enter" está enviando o formulario e recarregando a pagina
(ok) campo cliente como combo box

(OK) Probelmas com o input:
- quando busco as inf no banco e coloco elas nos inputs ao clicar elas somem.
  - solução: passando a variavel por prop e salvando a busca nela.
  - Problema 2: usando props o replace da mascara para de funcionar pq ele não pode alterar essa variavel.
  - solução 2: alterando o input do component, fazendo "manualmente" o dual bind do input e usando o v-model no pai...
  - Problema 3: a atualização do input muda quando o replace é aplicado, aparece o caracter digitado e some depois, diferente de antes q a letra nem era adicionada. 

  X - Event Bus ????
  --> vuex -> video: melhor gerenciamento de estado com vuex -> usando estado centralizado
  - SOLUÇÃO (não gostei): criar o input no pai usando slot, tudo funciona colocando os methods juntos ali.
  -------------- SOLUCIONADA ---------------------



 


  
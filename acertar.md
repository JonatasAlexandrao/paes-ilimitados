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

  
  
  
  - No celular quando digita a primeira letra não abre a lista de pesquisa só apartir da segunda letra
  - Pesquisar como separar palavras da string e de algum jeito fazer a pesquisa por palavra
  
  


--> Tela cliente:
  
  
  - deixar o botão ativo quando todos os campos estiverem preenchidos
  - colocar um icone de seta para baixo no input search para abrir a lista

  --> CSS
    
    - mudar layout para o versão nova
    - resolver problema de ficar tendo q importar os arquivos globais .scss


    * Mudar nome e cores das variaveis
    * em tableClient as cores não estão em variaveis
    * em dropDownlist as cores não estão em variaveis
     
  

  --> Lista do Input
    
  

 --> Banco 
  - ver forma de capturar erro do banco no arquivo data
  - validar campos antes de gravar no BD
  - não permitir gravar completamente em branco
  
  

--> Button
  - escolher cores para os botões
  - quando todos os inputs estiverem com valores o gravar pode ficar colorido






# Pensamentos:
  

# Problemas:

(ok) Customizar as barras de rolagem
(ok) Exibir mensagem de confirmação de save
(ok) acertar tb dos botoes
(ok) Passar o código para scss
(ok) remover tamanho dos botões, passar seu tamanho no pai do componente
(ok) corrigir tamanho de botao, removido do flatbutton
(ok) passar pra grid o cliente?
(ok) gerar novo id
(ok) criar um botão para deletar clientes
(ok) fazer validação do form
(ok) quando salva ou altera um cliente o dropBox tá abrindo
(ok) Pesquisar sobre scolp da tag style do vue 
(ok) Depois de salvo ou alterado um cliente não está atualizando a tabela e filtro
(ok) Mascara do input de pesquisa dá erro quando é digitado caracteres especiais, criar uma mascara para impedir o uso deles, talvez uma de somente letras
(ok) erro no dropDownList: quando é apagado os inputs com o botão de apagar a lista continua filtrada com a ultima pesquisa.
(ok) mudar botão gravar para alterar
(ok)> Criar a tabela dos clientes cadastrados
(ok) passar para click duplo para abrir lista do input search
(ok) passar a abrir a lista quando digitado no input search
(ok) erro na formula do regex, quando apaga tudo a lista fica só com os nomes que tem duas palavras
(ok) Campo não trocado para teclado de texto
(ok) acertar formula do regex
(ok) quando usado o evento blur para sumir a lista no celular o click não está pegando os valores e adicionando nos inputs.
(ok) criar mascara para o input celular
(ok) povoar o campo ID automaticamente
(ok) criar componente botão
(ok) como fazer para q no celular já passe direto para o proximo campo depois (tab)
(ok) quando digitando caracter invalido no input ele tá tirando a classe da label até ser digitado um numero valido
(OK) - quando troca o tipo de input muda o teclado no celular.
(OK)- quando uso type number no input o replace para de funcionar, então as mascaras não estão funcionando em campos não text
(OK) criar evento para limpar inputs
(ok) foi trocado a div por um form e agora o "enter" está enviando o formulario e recarregando a pagina
(ok) campo cliente como combo box
(ok) Seria o certo separar em um arquivo as functions que mexem com o banco e só chamalas no componente passando um obj...

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



 


  
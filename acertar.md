
410x750

OK - quando troca o tipo de input muda o teclado no celular.
OK - quando uso type number no input o replace para de funcionar, então as mascaras não estão funcionando em campos não text


- como fazer para q no celular já passe direto para o proximo campo depois (tab)

- Pesquisar sobre scolp da tag style do vue 

Pensamentos:
  - campo cliente como combo box ?



Probelmas com o input:
- quando busco as inf no banco e coloco elas nos inputs ao clicar elas somem.
  - solução: passando a variavel por prop e salvando a busca nela.
  - Problema 2: usando props o replace da mascara para de funcionar pq ele não pode alterar essa variavel.
  - solução 2: alterando o input do component, fazendo "manualmente" o dual bind do input e usando o v-model no pai...
  - Problema 3: a atualização do input muda quando o replace é aplicado, aparece o caracter digitado e some depois, diferente de antes q a letra nem era adicionada. 

  X - Event Bus ????
  --> vuex -> video: melhor gerenciamento de estado com vuex -> usando estado centralizado
  - SOLUÇÃO (não gostei): criar o input no pai usando slot, tudo funciona colocando os methods juntos ali.
  -------------- SOLUCIONADA ---------------------

  - (OK) criar evento para limpar inputs
  - criar componente botão

  Problemas:
    - quando digitando caracter invalido no input ele tá tirando a classe da label até ser digitado um numero valido


  
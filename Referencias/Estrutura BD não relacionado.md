

# Banco de Dados não Relacionado

  ## Produtos
    - id
    - produto
    - valor
    - cor (para identificação visual)

  ## Cliente
    - id
    - nome
    - endereço

  ## Vendas
    - id
    - valor
    - data
    - pago
    - produtos: 
      - id_produtp
      - quantidade
    - id_cliente
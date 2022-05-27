Feature: Criar usuário
Como uma pessoa qualquer
Desejo registrar no sistema
Para ter acesso as funcionalidades de lista de compras

    Background: Iniciei o sistema
        Given que iniciei o sistema Lembra Compra para criar usuario
        And cliquei em registre-se
    
    Scenario: Cadastro realizado com sucesso
        When Informo meus dados para cadastro
        Then visualizo mensagem de "Usuário criado com sucesso!"
    
    Scenario: Cadastro sem preencher campo nome
        When Informo email e senha e não informo o nome
        Then visualizo mensagem para preencher campo de nome "Informe seu nome"
    
    Scenario: Cadastro sem preencher campo email
        When Informo nome e senha e não informo o email
        Then visualizo mensagem para preencher campo de email "Informe seu e-mail"
    
    Scenario: Cadastro com formato inválido de email
        When Informo nome e senha e informo o email com formato inválido
        Then visualizo mensagem para corrigir campo de email "Formato de e-mail inválido."
    
    Scenario: Cadastro com email já cadastrado
        When Informo nome e senha e informo o email já existente
        Then visualizo mensagem que "Este e-mail já é utilizado por outro usuário."
        And visualizo a mensagem de "User already exists"
    
    Scenario: Cadastro sem preencher campo senha
        When Informo nome e email e não informo o senha
        Then visualizo mensagem para preencher campo de senha "Informe sua senha"
    
    Scenario: Cadastro sem preencher campo confirmação de senha
        When Informo nome, email e senha e não informo o confirmação de senha
        Then visualizo mensagem para preencher campo de senha "Informe sua senha"
    
    Scenario: Cadastro com nome maior que 100 caracteres
        When Informo nome com mais de 100 caracteres
        Then visualizo mensagem para corrigir campo de nome "Informe no máximo 100 letras no seu nome"
    
    Scenario: Cadastro com email maior que 100 caracteres
        When Informo email com mais de 100 caracteres
        Then visualizo mensagem para corrigir tamanho de email "Informe no máximo 100 caracteres."
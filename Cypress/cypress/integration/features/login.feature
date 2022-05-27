Feature: Login
Como um usuário com conta no sistema
Desejo realizar meu acesso na aplicação
Para conseguir utilizar os serviços do Lembra Compras.

    Background: Iniciei o sistema
        Given que iniciei o sistema Lembra Compra

    Scenario: login realizado com sucesso
        When Informo email e senha
        Then efetuo login no sistema com sucesso

    Scenario: login com senha incorreta
        When Informo email e senha incorreta
        Then visualizo mensagem de erro "E-mail ou senha incorretos."

    Scenario: login sem senha
        When Informo email e não informo o senha
        Then visualizo a mensagem "Informe sua senha"

    Scenario: login com email não cadastrado
        When Informo email não cadastrado
        Then visualizo mensagem de erro "E-mail ou senha incorretos."
    
    Scenario: login com email com formato inválido
        When Informo email com formato inválido
        Then visualizo mensagem para corrigir email "Formato de e-mail inválido."
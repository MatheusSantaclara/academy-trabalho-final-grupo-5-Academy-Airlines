@atualizarPerfil
Feature: Atualizar perfil
Como um usuário com conta no sistema
Desejo atualizar minhas informações básicas
Para manter meus dados atualizados no sistema.

    Background: Iniciei o sistema
        Given que iniciei o sistema Lembra Compra para atualizar dados
        And loguei com meus dados

    Scenario: atualizo dados com sucesso
        When altero nome e email
        Then visualizo a mensagem de "Informações atualizadas com sucesso!"

    Scenario: atualizo email para um já existente
        When altero nome e email já existente
        Then visualizo a mensagem de erro "Este e-mail já é utilizado por outro usuário."

    Scenario: atualizo email para um já existente no Response body
        When altero nome e email já existente
        Then visualizo a mensagem de erro no response body "'error':'E-mail already in use.'"

    Scenario: atualizo nome com mais de 100 caracteres
        When altero nome com mais de 100 caracteres
        Then visualizo a mensagem de erro no campo de nome "Informe no máximo 100 letras no seu nome"

    Scenario: atualizo nome com menos de 3 caracteres
        When altero nome com menos de 3 caracteres
        Then visualizo a mensagem para corrigir campo de nome "Informe seu nome completo"

    Scenario: atualizo email com formato inválido sem @
        When altero email com formato inválido - sem @
        Then visualizo a mensagem de formato inválido no campo de email "Formato de e-mail inválido."

    Scenario: atualizo email com formato inválido sem .com
        When altero email com formato inválido - sem .com
        Then visualizo a mensagem de formato inválido no campo de email "Formato de e-mail inválido."
    
    Scenario: atualizo email com formato inválido sem .
        When altero email com formato inválido - sem .
        Then visualizo a mensagem de formato inválido no campo de email "Formato de e-mail inválido."

    Scenario: atualizo email com mais de 60 caracteres
        When altero email com mais de 60 caracteres
        Then visualizo a mensagem de erro no campo de email "Informe no máximo 60 caracteres."

    Scenario: atualizo email com mais de 60 caracteres
        When altero email com mais de 100 caracteres
        Then visualizo a mensagem de erro no campo de email "Informe no máximo 60 caracteres."

    Scenario: somente acesso meu perfil se estiver logado no sistema
        When acesso a página de perfil sem ter logado
        Then retorno a página para efetuar login
        And faço login para atualizar meus dados

Feature: Atualizar perfil
Como um usuário com conta no sistema
Desejo atualizar minhas informações básicas
Para manter meus dados atualizados no sistema.

    Background: Iniciei o sistema
        Given Que iniciei o sistema Lembra Compra para atualizar dados
        And Informo email e senha para logar

    Scenario: atualizo dados com sucesso
        When altero nome e email
        Then aparece a mensagem de "Informações atualizadas com sucesso!"

    Scenario: atualizo email para um já existente
        When altero nome e email já existente
        Then aparece a mensagem de erro "'error':'E-mail already in use.'"

    Scenario: atualizo nome com mais de 100 caracteres
        When altero nome com mais de 100 caracteres
        Then aparece a mensagem de erro no campo de nome "Informe no máximo 100 letras no seu nome"

    Scenario: atualizo email com mais de 60 caracteres
        When altero email com mais de 60 caracteres
        Then aparece a mensagem de erro no campo de email "Informe no máximo 100 caracteres."
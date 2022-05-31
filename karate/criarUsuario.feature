Feature: Criar Usuario
    Como uma pessoa qualquer
    Desejo me registrar no sistema
    Para ter acesso as funcionalidades de lista de compras

    Background: Base UrL
        Given url baseUrl
        And path "/users"

    Scenario: Cadastro realizado com sucesso
        * def name = java.util.UUID.randomUUID() + "user"
        * def email = java.util.UUID.randomUUID() + "@academy-airlines.com"
        * def password = Date.now() + "academy"
        * def payload = read("payloadUsuario.json")

        And request { name: "#(payload.name)", email: "#(payload.email)", password: "#(payload.password)"}
        When method post
        Then status 201
        And match response == { id: "#string", name: "#(payload.name)", email: "#(payload.email)", is_admin: "#boolean" }

    Scenario: Cadastro com email já cadastrado
        * call read("hook.feature@criarUsuario")
        * def payload = read("payloadUsuario.json")

        And request { name: "#(payload.name)", email: "#(payload.email)", password: "#(payload.password)"}
        When method post
        Then status 422    
        And match response == { "error": "User already exists."}

    Scenario: Cadastro com nome maior que 100 caracteres
        * def name = java.util.UUID.randomUUID() + "07cf98a4-8070-4f74-bd40-43bb039e569b07cf98a4-8070-4f74-bd40-43bb0"
        * def email = java.util.UUID.randomUUID() + "@academy.com"
        * def payload = read("payloadUsuario.json")

        And request { name: "#(payload.name)", email: "#(payload.email)", password: "#(payload.password)"}
        When method post
        Then status 400
    
    Scenario: Cadastro com email maior que 60 caracteres
        * def name = java.util.UUID.randomUUID() + "07cf98a4-8070-4f74-bd40-43bb039e569b07cf98a4-8070-4f74-bd40-43bb0"
        * def email = java.util.UUID.randomUUID() + "094e3591c48bd@academy.com"
        * def payload = read("payloadUsuario.json")

        And request { name: "#(payload.name)", email: "#(payload.email)", password: "#(payload.password)"}
        When method post
        Then status 400

    Scenario: Cadastrar um usuario sem domínio no email
        * def name = java.util.UUID.randomUUID() + "user"
        * def email = java.util.UUID.randomUUID()
        * def password = Date.now() + "academy"
        * def payload = read("payloadUsuario.json")

        And request { name: "#(payload.name)", email: "#(payload.email)", password: "#(payload.password)"}
        When method post
        Then status 400
        And match response == { "error": "Bad request." }
    
    Scenario: Cadastrar um usuario somente com o domínio do email
        * def name = java.util.UUID.randomUUID() + "user"
        * def email = "@academy.com"
        * def password = Date.now() + "academy"
        * def payload = read("payloadUsuario.json")

        And request { name: "#(payload.name)", email: "#(payload.email)", password: "#(payload.password)"}
        When method post
        Then status 400
        And match response == { "error": "Bad request." }

    Scenario: Cadastro sem preencher o email
        * def name = java.util.UUID.randomUUID() + "user"
        * def password = Date.now() + "academy"
        * def payload = read("payloadUsuario.json")

        And request { name: "#(payload.name)", email: "", password: "#(payload.password)"}
        When method post
        Then status 400
        And match response == { "error":"Bad request." }

    Scenario: Cadastro sem preencher o nome
        * def email = java.util.UUID.randomUUID() + "@academy-airlines.com"
        * def password = Date.now() + "academy"
        * def payload = read("payloadUsuario.json")

        And request { name: "", email: "#(payload.email)", password: "#(payload.password)"}
        When method post
        Then status 400
        And match response == { "error":"Bad request." }

    Scenario: Cadastro sem preencher a senha
        * def name = java.util.UUID.randomUUID() + "user"
        * def email = java.util.UUID.randomUUID() + "@academy-airlines.com"
        * def payload = read("payloadUsuario.json")

        And request { name: "#(payload.name)", email: "#(payload.email)", password: ""}
        When method post
        Then status 400
        And match response == { "error":"Bad request." }
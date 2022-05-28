Feature: Login
    Como um usuário com conta no sistema
    Desejo realizar meu acesso na aplicação
    Para conseguir utilizar os serviços do Lembra Compras.

    Background: Base url
        * call read("hook.feature@criarUsuario")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "auth/login"

    Scenario: Deve ser possivel realizar o login
        And form field email = payload.email
        And form field password = payload.password
        When method post
        Then status 200
        And match response == { auth: true, session: { token: "#string", issued: "#number", expires: "#number" } }

    Scenario: Não deve ser possivel realizar o login sem senha
        And form field email = payload.email
        When method post
        Then status 400
        And match response == { "error": "Bad request." }
    
    Scenario: Não deve ser possivel realizar o login sem email
        And form field password = payload.password
        When method post
        Then status 400
        And match response == { "error": "Bad request." }
    
    Scenario: Não deve ser possivel realizar o login com senha invalida
        And form field email = payload.email
        And form field password = "senhaAcademyAirlines"
        When method post
        Then status 403
        And match response == { "error": "Invalid email or password." }
        
    
    Scenario: Não deve ser possivel realizar o login com email invalido
        And form field email = "emailDoUsuario@AcademyAirlines.com"
        And form field password = payload.password
        When method post
        Then status 403
        And match response == { "error": "Invalid email or password." }
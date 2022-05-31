Feature: Login
    Como um usuário com conta no sistema
    Desejo realizar meu acesso na aplicação
    Para conseguir utilizar os serviços do Lembra Compras.

    Background: Base url
        * call read("hook.feature@criarUsuario")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "auth/login"

    Scenario: Login realizado com sucesso
        And form field email = payload.email
        And form field password = payload.password
        When method post
        Then status 200
        And match response == { auth: true, session: { token: "#string", issued: "#number", expires: "#number" } }

    Scenario: Login sem senha
        And form field email = payload.email
        When method post
        Then status 400
        And match response == { "error": "Bad request." }
    
    Scenario: Login sem email
        And form field password = payload.password
        When method post
        Then status 400
        And match response == { "error": "Bad request." }
    
    Scenario: Login com senha incorreta
        And form field email = payload.email
        And form field password = "senhaAcademyAirlines"
        When method post
        Then status 403
        And match response == { "error": "Invalid email or password." }
    
    Scenario: Login com email inválido
        And form field email = "emailDoUsuario@AcademyAirlines.com"
        And form field password = payload.password
        When method post
        Then status 403
        And match response == { "error": "Invalid email or password." }
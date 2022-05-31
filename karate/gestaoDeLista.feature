Feature: Gestão Lista de Compras
Como um usuário com conta no sistema
Desejo gerenciar uma lista de compras
Para registrar os produtos que desejo comprar.

    Scenario: Criar lista de compras com sucesso
        * call read("hook.feature@login")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "list"
        And header X-JWT-Token = payload.token
        And request { description: "Supermarket", items: [{ name: "Avocado", amount: 1}]}
        When method post
        Then status 201
    
    Scenario: Criar lista de compras sem descrição
        * call read("hook.feature@login")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "list"
        And header X-JWT-Token = payload.token
        And request { description: "", items: [{ name: "Avocado", amount: 1}]}
        When method post
        Then status 201

    Scenario: Criar lista de compras com quantidade menor que 1 de um determinado item
        * call read("hook.feature@login")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "list"
        And header X-JWT-Token = payload.token
        And request { description: "Supermarket", items: [{ name: "Avocado", amount: -1}]}
        When method post
        Then status 400

    Scenario: Criar lista de compras com quantidade maior que 1000 de um determinado item
        * call read("hook.feature@login")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "list"
        And header X-JWT-Token = payload.token
        And request { description: "Supermarket", items: [{ name: "Avocado", amount: 1001}]}
        When method post
        Then status 400
    
    Scenario: Criar lista de compras com itens duplicados
        * call read("hook.feature@login")
        * def payload = read("payloadUsuario.json")
        * def nomeLista = "Supermarket"
        * def nomeDoProduto = "Avocado"
        * def quantidade = 10
        * def resultado = quantidade + quantidade
        * def payloadLista = read("payloadLista.json")

        Given url baseUrl
        Given path "list"
        And header X-JWT-Token = payload.token
        And request { description: "#(payloadLista.description)", items: [{ name: "#(payloadLista.items[0].name)", amount: "#(payloadLista.items[0].amount)"}, { name: "#(payloadLista.items[0].name)", amount: "#(payloadLista.items[0].amount)"}]}
        When method post
        Then status 201

        Given url baseUrl
        Given path "list"
        And header X-JWT-Token = payload.token
        When method get
        Then status 200
        And match response == { description: "#(payloadLista.description)", items: [{id:"#string", listId: "#string", name: "#(payloadLista.items[0].name)", amount: "#(resultado)", createdAt: "#string", updatedAt: "#string"}]}
        

    Scenario: Atualizar lista de compras
        * call read("hook.feature@criarLista")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "list/item"
        And header X-JWT-Token = payload.token
        And request { name: "Avocado", amount: 1 }
        When method post
        Then status 201
    
    Scenario: O valor atualizado não pode ser superior a 1000
        * call read("hook.feature@criarLista")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "list/item"
        And header X-JWT-Token = payload.token
        And request { name: "Avocado", amount: 1000 }
        When method post
        Then status 422

    Scenario: Desativar lista
        * call read("hook.feature@criarLista")
        * def payload = read("payloadUsuario.json")

        Given url baseUrl
        Given path "list"
        And header X-JWT-Token = payload.token
        When method patch
        Then status 204



    

        
    
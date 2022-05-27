@gestaoLista
Feature: Gestão Lista de Compras
Como um usuário com conta no sistema
Desejo gerenciar uma lista de compras
Para registrar os produtos que desejo comprar.

    Background: Iniciei o sistema
        Given Que iniciei o sistema Lembra Compra para gerenciar lista
        And Informo email e senha para logar

    Scenario: criar lista de compras com sucesso
        When nomeio a lista
        And informo nome e quantidade dos itens
        Then visualizo mensagem de "Lista de compras criada com sucesso!"
        And consigo ter apenas 1 lista ativa

    Scenario: criar lista de compras sem descrição
        When não informo um nome para a lista
        And informo nome e quantidade dos itens
        Then a mensagem de sucesso é exibida "Lista de compras criada com sucesso!"

    Scenario: criar lista de compras com quantidade menor que 1 de um determinado item
        When nomeio a lista
        And informo quantidade menor que 1 de um determinado item
        Then visualizo a mensagem de erro "Informe pelo menos 1 unidade"

    Scenario: criar lista de compras com quantidade maior que 1000 de um determinado item
        When nomeio a lista
        And informo quantidade maior que 1000 de um determinado item
        Then visualizo a mensagem de erro de quantidade "Informe uma quantidade menor ou igual a 1000"

    Scenario: criar lista de compras com itens duplicados
        When nomeio a lista
        And informo um item já adicionado
        Then a quantidade de itens devem ser acrescentada
        And não pode ultrapassar 1000 unidades e mensagem deve ser exibida "Não é permitido incluir mais de 1000 unidades do produto."

    Scenario: atualizar lista de compras
        When abro uma lista ativa
        And informo um item novo
        Then a quantidade os itens devem ser adicionados

    Scenario: atualizar lista de compras com itens duplicados
        When abro uma lista ativa
        And informo um item já adicionado anteriormente
        Then a quantidade de itens atualizados devem ser acrescentada
        And não pode ultrapassar 1000 unidades "Não é permitido incluir mais de 1000 unidades do produto."

    Scenario: concluo item da lista de compras
        When abro uma lista ativa
        And concluo um item
        Then item é marcado como concluído na lista

    Scenario: finalizo lista de compras
        When finalizo uma lista ativa
        Then a mensagem de lista finalizada é exibida "Lista concluída com sucesso!"
        And status não pode ser alterado
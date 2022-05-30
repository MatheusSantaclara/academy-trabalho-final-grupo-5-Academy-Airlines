@gestaoLista
Feature: Gestão Lista de Compras
Como um usuário com conta no sistema
Desejo gerenciar uma lista de compras
Para registrar os produtos que desejo comprar.

    Background: Iniciei o sistema Lembra Compra
        Given que iniciei o sistema Lembra Compra para gerenciar lista
        And entrei com meus dados

    Scenario: criar lista de compras com sucesso
        When nomeio a lista
        And informo nome e quantidade dos itens
        Then visualizo mensagem de sucesso "Lista de compras criada com sucesso!"
        And tenho apenas 1 lista ativa

    Scenario: criar lista de compras sem descrição
        When não informo um nome para a lista
        And informo nome e quantidade dos itens
        Then visualizo mensagem de sucesso "Lista de compras criada com sucesso!"

    Scenario: criar lista de compras sem descrição
        When não informo um nome para a lista
        And não informo nome e nem quantidade dos itens
        Then visualizo mensagem de falha ao criar lista "Adicione pelo menos um item na sua lista de compras"

    Scenario: criar lista de compras com quantidade menor que 1 de um determinado item
        When nomeio a lista
        And informo quantidade menor que 1 de um determinado item
        Then visualizo a mensagem para informar 1 item pelo menos "Informe pelo menos 1 unidade"

    Scenario: criar lista de compras com quantidade maior que 1000 de um determinado item
        When nomeio a lista
        And informo quantidade maior que 1000 de um determinado item
        Then visualizo a mensagem de erro de quantidade "Informe uma quantidade menor ou igual a 1000"

    Scenario: criar lista de compras com itens duplicados
        When nomeio a lista
        And informo um item já adicionado
        Then visualizo que a quantidade de itens é adicionada
        And não ultrapassa 1000 unidades e visualizo mensagem "Não é permitido incluir mais de 1000 unidades do produto."

    Scenario: atualizar lista de compras
        When abro uma lista ativa
        And informo um item novo
        Then visualizo que a quantidade de itens é acrescentado

    Scenario: atualizar lista de compras com itens duplicados
        When abro uma lista ativa
        And informo um item já adicionado anteriormente
        Then visualizo que a quantidade atualizada de itens é acrescentado
        And não ultrapassa 1000 unidades "Não é permitido incluir mais de 1000 unidades do produto."

    Scenario: concluo item da lista de compras
        When abro uma lista ativa
        And concluo um item
        Then visualizo que o item é marcado como concluído na lista

    Scenario: finalizo lista de compras
        When finalizo uma lista ativa
        Then visualizo a mensagem de lista finalizada "Lista concluída com sucesso!"
        And seu status não pode ser alterado

    Scenario: somente acesso minha lista se estiver logado no sistema
        When acesso a página de lista sem ter logado
        Then retorno a página para efetuar login
        And faço login para criar minha lista

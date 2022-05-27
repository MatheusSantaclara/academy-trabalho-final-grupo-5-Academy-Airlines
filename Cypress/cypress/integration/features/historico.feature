Feature: Histórico Lista de Compras
Como um usuário com conta no sistema
Desejo consultar minhas últimas listas de compra
Para visualizar minhas últimas compras.

    Background: Iniciei o sistema
        Given Que iniciei o sistema Lembra Compra para visualizar historico
        And Informo email e senha para logar
        
    Scenario: visualizar histórico de compras com sucesso
        When acesso histórico de lista
        Then consigo visualizar minha lista de compra
        And somente visualizo as 10 ultimas listas
    
    Scenario: visualizar lista de compras com sucesso
        When acesso meu histórico de lista
        And consulto uma lista
        Then consigo visualizar nome e itens
Funcionalidade: Gestão Lista de Compras
Como um usuário com conta no sistema
Desejo consultar minhas últimas listas de compra
Para visualizar minhas últimas compras.

    Contexto: Iniciei o sistema
        Dado Que iniciei o sistema Lembra Compra
        E Informo email e senha validos para logar

    Cenario: visualizar histórico de compras com sucesso
        Quando Acesso histórico de lista
        Entao Consigo visualizar minha lista de compra
        E Somente visualizo as 10 ultimas listas

    Cenario: visualizar lista de compras com sucesso
        Quando Acesso histórico de lista
        E Consulto uma lista
        Entao Consigo visualizar nome e itens
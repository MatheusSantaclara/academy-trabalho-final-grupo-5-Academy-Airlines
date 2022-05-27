Funcionalidade: Gestão Lista de Compras
Como um usuário com conta no sistema
Desejo gerenciar uma lista de compras
Para registrar os produtos que desejo comprar.

    Contexto: Iniciei o sistema
        Dado Que iniciei o sistema Lembra Compra
        E Informo email e senha validos para logar

    Cenario: criar lista de compras com sucesso
        Quando Informo um nome para a lista
        E Informo nome e quantidade dos itens
        Entao Salvo minha lista com sucesso
    
    Cenario: criar lista de compras sem descrição
        Quando Não informo um nome para a lista
        E Informo nome e quantidade dos itens
        Entao Salvo minha lista com sucesso

    Cenario: criar lista de compras com quantidade menor que 1 de um determinado item
        Quando informo ou não um nome para a lista
        E informo quantidade menor que 1 de um determinado item
        Entao não é possível adicionar o item a lista

    Cenario: criar lista de compras com quantidade maior que 1000 de um determinado item
        Quando informo ou não um nome para a lista
        E informo quantidade maior que 1000 de um determinado item
        Entao não é possível adicionar o item a lista
    
    Cenario: criar lista de compras com itens duplicados
        Quando informo ou não um nome para a lista
        E informo um item já existente
        E clico em salva
        Entao a quantidade de itens devem ser acrescentada
        E não pode ultrapassar 1000 unidades

    Cenario: atualizar lista de compras
        Quando abro uma lista ativa
        E informo um item já existente
        Entao a quantidade os itens devem ser acrescentada

    Cenario: atualizar lista de compras com itens duplicados
        Quando abro uma lista ativa
        E informo um item já existente
        Entao a quantidade de itens é atualizada

    Cenario: concluo item da lista de compras
        Quando abro uma lista ativa
        E concluo um item
        Entao item é marcado como concluído na lista

    Cenario: finalizo lista de compras
        Quando abro uma lista ativa
        E clico em finalizar
        E em confirma
        Entao a lista é finalizada com sucesso
        E status não pode ser alterado
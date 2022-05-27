Funcionalidade: Atualizar perfil
Como um usuário com conta no sistema
Desejo atualizar minhas informações básicas
Para manter meus dados atualizados no sistema.

    Contexto: Iniciei o sistema
        Dado Que estou logado no sistema Lembra Compra
        E Clico em perfil no menu para acessar as minhas informações

    Cenario: atualizo dados com sucesso
        Quando altero nome ou email
        E Clico em confirma alterações
        Entao Os dados são atualizados com sucesso

    Cenario: atualizo email para um já existente
        Quando altero o email para um já existente
        E Clico em confirma alterações
        E Em confirma
        Entao Os dados não são atualizados
    
    Cenario: atualizo nome com mais de 100 caracteres
        Quando altero nome com mais de 100 caracteres
        E Clico em confirma alterações
        Entao os dados não são atualizados

    Cenario: atualizo email com mais de 60 caracteres
        Quando altero email com mais de 60 caracteres
        E Clico em confirma alterações
        Entao os dados não são atualizados
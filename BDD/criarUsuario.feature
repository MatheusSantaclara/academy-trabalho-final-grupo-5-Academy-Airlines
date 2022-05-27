Funcionalidade: Criar usuário
Como uma pessoa qualquer
Desejo registrar no sistema
Para ter acesso as funcionalidades de lista de compras.

    Contexto: Iniciei o sistema
        Dado Que iniciei o sistema Lembra Compra
        E Clico em registre-se

    Cenario: Cadastro realizado com sucesso
        Quando Informo os dados necessárias para cadastrar um usuário
        E Clico em registrar
        Entao Efetuo cadastro com sucesso
    
    Cenario: Cadastro sem nome
        Quando Informo email, senha e confirmação de senha
        E Não informo o nome
        Entao Não é possível efetuar cadastro com sucesso

    Cenario: Cadastro sem email
        Quando Informo nome a senha e confirmação de senha
        E Não informo o email
        Entao Não é possível efetuar cadastro com sucesso

    Cenario: Cadastro com formato inválido de email
        Quando Informo nome a senha e confirmação de senha
        E informo um email com formato inválido
        Entao não é possível efetuar cadastro com sucesso
    
    Cenario: Cadastro com email já utilizado
        Quando Informo nome a senha e confirmação de senha
        E informo o email já existente
        Entao não é possível efetuar cadastro com sucesso
        E mensagem de User already exists deve ser exibida

    Cenario: Cadastro sem senha
        Quando Informo nome e email 
        E não informo a senha
        Entao não é possível efetuar cadastro com sucesso
    
    Cenario: Cadastro sem confirmação de senha
        Quando Informo nome, email e senha 
        E não informo a confirmação de senha
        Entao não é possível efetuar cadastro com sucesso

    Cenario: Cadastro com nome maior que 100 caracteres
        Quando Informo nome com mais de 100 caracteres
        Entao não consigo efetuar cadastro com sucesso

    Cenario: Cadastro com email maior que 60 caracteres
        Quando Informo email com mais de 60 caracteres
        Entao não consigo efetuar cadastro com sucesso
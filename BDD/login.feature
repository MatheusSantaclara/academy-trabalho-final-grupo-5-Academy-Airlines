Funcionalidade: Login
Como um usuário com conta no sistema
Desejo realizar meu acesso na aplicação
Para conseguir utilizar os serviços do Lembra Compras.

    Contexto: Iniciei o sistema
        Dado Que iniciei o sistema Lembra Compra

    Cenario: login realizado com sucesso
        Quando Informo um email e senha valido
        E Clico em Entrar 
        Entao O login ao sistema é efetuado com sucesso
    
    Cenario: login com senha incorreta
        Quando Informo email e senha incorreta
        E Clico em Entrar
        Entao Não consigo efetuar login

    Cenario: login sem senha
        Quando Informo email e não informo a senha
        E Clico em Entrar
        Entao Não consigo efetuar login

    Cenario: login com email não cadastrado
        Quando Informo email e senha não cadastrado
        E Clico em Entrar
        Entao não consigo efetuar login
    
    Cenario: login com email com formato inválido
        Quando Informo email com formato inválido
        Entao não consigo efetuar login
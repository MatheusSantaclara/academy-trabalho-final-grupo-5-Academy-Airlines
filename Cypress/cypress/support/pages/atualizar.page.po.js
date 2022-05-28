class AtualizarPage {

    inputName = ".sc-kDDrLX.fENjNr";
    inputEmail = ".sc-kDDrLX.fENjNr";
    inputSenha = ".sc-cOFTSb.crpeOB";
    inputConfirmaSenha = ".sc-cOFTSb.crpeOB";

    loginEmail = ".sc-kDDrLX.fENjNr";
    loginSenha = ".sc-kDDrLX.fENjNr";

    menu = ".sc-bjUoiL.bgBaRw";
    perfil = ".sc-hHLeRK.QpzJB";
    sairLogout = "[href='/logout']";

    campoId = ".sc-gSAPjG.hdZAyq";
    campoNome = ".sc-gSAPjG.hdZAyq";
    campoEmail = ".sc-gSAPjG.hdZAyq";
    campoTipoConta = ".sc-gSAPjG.hdZAyq";

    registre = ".sc-ftvSup.jmKUXo"

    cadastroELogin () {
        var currentTimeInMilliseconds = Date.now();
        var nameFixoCriar = "Chad Kroeger";
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";
        var senha = 1234
        var confirmaSenha = 1234
        //cy.contains("Registre-se").click({force: true});
        cy.get(this.inputName).eq(0).type(nameFixoCriar);
        cy.get(this.inputEmail).eq(1).type(emailAleatorio);
        cy.get(this.inputSenha).eq(0).type(senha);
        cy.get(this.inputConfirmaSenha).eq(1).type(confirmaSenha);
        //cy.get(this.registre).click();
        cy.contains("Registrar").click();
        cy.wait(2000);

        cy.get(this.loginEmail).eq(0).type(emailAleatorio);
        cy.get(this.loginSenha).eq(1).type(senha);
        cy.contains("button", "Entrar").click();

    }

    login (emailAleatorio, senha) {
        cy.get(this.loginEmail).eq(0).type(emailAleatorio);
        cy.get(this.loginSenha).eq(1).type(senha);
        cy.contains("button", "Entrar").click();
    }

    loginComIntercept() {
        cy.interceptarAtualizar();
        cy.interceptarLogin();
        cy.wait(2000);

        cy.visit("");
        cy.get(this.loginEmail).eq(0).type("teerere@t.com", {force: true});
        cy.get(this.loginSenha).eq(1).type(12, {force: true});
        cy.contains("button", "Entrar").click({force: true});
    }

    acessoPerfil() {
        cy.get(this.menu).click();
        cy.get(this.perfil).eq(2).click({force: true});
    }

    logout() {
        cy.get(this.menu).click({force: true});
        cy.wait(1000);
        cy.get(this.sairLogout).click({force: true});
    }

    limparSession() {
        cy.fixture("vazio.json").then((informacoesUsuario) => {
            window.sessionStorage.setItem(
                "sessionData",
                JSON.stringfy(informacoesUsuario)
            );
        });

        cy.get(this.menu).click();
        cy.get(this.sair).eq(3).click({force: true});

    }

    alteraNome() {
        var currentTimeInMilliseconds = Date.now();
        var nameFixoCriar = "Nick Chad Kroeger";
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";

        cy.get(this.campoNome).eq(1).clear({force: true});
        cy.get(this.campoNome).eq(1).type(nameFixoCriar);
        cy.get(this.campoEmail).eq(2).clear({force: true});
        cy.get(this.campoEmail).eq(2).type(emailAleatorio);
        cy.wait(1000);
        cy.contains("button", "Confirmar alterações").click({force: true});
        cy.get(".sc-jdAMXn.iMjKmA").click();
    }

    alteraNomeDuplicado(nameFixoCriar, emailAleatorio) {
        cy.get(this.campoNome).eq(1).clear({force: true});
        cy.wait(1000);
        cy.get(this.campoNome).eq(1).type(nameFixoCriar);
        cy.get(this.campoEmail).eq(2).clear({force: true});
        cy.wait(1000);
        cy.get(this.campoEmail).eq(2).type(emailAleatorio);
        cy.contains("button", "Confirmar alterações").click({force: true});
        cy.get(".sc-jdAMXn.iMjKmA").click();
    }

    alteraNomeErro(nameFixoCriar, emailAleatorio) {
        cy.get(this.campoNome).eq(1).clear({force: true});
        cy.get(this.campoNome).eq(1).type(nameFixoCriar);
        cy.get(this.campoEmail).eq(2).clear({force: true});
        cy.get(this.campoEmail).eq(2).type(emailAleatorio);
    }

    alteraEmailErro(nameFixoCriar, emailAleatorio) {
        cy.get(this.campoEmail).eq(2).clear({force: true});
        cy.wait(1000);
        cy.get(this.campoEmail).eq(2).type(emailAleatorio);
        cy.get(this.campoNome).eq(1).clear({force: true});
        cy.wait(1000);
        cy.get(this.campoNome).eq(1).type(nameFixoCriar);
    }

    cadDuplicado(nome, email, senha, confirmaSenha) {
        cy.contains("Registre-se").click({force: true});
        cy.get(this.inputName).eq(0).type(nome, { force: true });
        cy.get(this.inputEmail).eq(1).type(email, {force: true});
        cy.get(this.inputSenha).eq(0).type(senha, {force: true});
        cy.get(this.inputConfirmaSenha).eq(1).type(confirmaSenha, {force: true});
        cy.contains("button", "Registrar").click();
    }


}

export var atualizarPage = new AtualizarPage();
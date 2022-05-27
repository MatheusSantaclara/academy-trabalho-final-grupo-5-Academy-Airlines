class CriarUsuarioPage {

    inputName = ".sc-kDDrLX.fENjNr";
    inputEmail = ".sc-kDDrLX.fENjNr";
    inputSenha = ".sc-cOFTSb.crpeOB";
    inputConfirmaSenha = ".sc-cOFTSb.crpeOB";


    clickRegistro () {
        cy.contains("Registre-se").click({force: true});
    }

    botaoRegistrar () {
        cy.contains("button", "Registrar").click();
    }

    cadNome (nameFixoCriar = "Avril Lavigne") {
        cy.get(this.inputName).eq(0).type(nameFixoCriar, { force: true });
    }

    cadNomeVazio (nome) {
        cy.get(this.inputName).eq(0).type(nome, { force: true });
    }

    cadEmail (emailAleatorio) {
        var currentTimeInMilliseconds = Date.now();
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";
        cy.get(this.inputEmail).eq(1).type(emailAleatorio, {force: true});
    }

    cadEmailVazio (email) {
        cy.get(this.inputEmail).eq(1).type(email, {force: true});
    }

    cadSenha(senha = 1234) {
        cy.get(this.inputSenha).eq(0).type(senha, {force: true});
    }

    cadConfirmaSenha (confirmaSenha = 1234) {
        cy.get(this.inputConfirmaSenha).eq(1).type(confirmaSenha, {force: true});
    }

    cadComSucesso (nameFixoCriar, emailAleatorio, senha, confirmaSenha) {
        var currentTimeInMilliseconds = Date.now();
        var nameFixoCriar = "Avril Lavigne";
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";
        var senha = 1234
        var confirmaSenha = 1234

        cy.get(this.inputName).eq(0).type(nameFixoCriar, { force: true });
        cy.get(this.inputEmail).eq(1).type(emailAleatorio, {force: true});
        cy.get(this.inputSenha).eq(0).type(senha, {force: true});
        cy.get(this.inputConfirmaSenha).eq(1).type(confirmaSenha, {force: true});
        cy.contains("button", "Registrar").click({force: true});
    }

    cadDuplicado (nome, email, senha, confirmaSenha) {
        cy.get(this.inputName).eq(0).type(nome, { force: true });
        cy.get(this.inputEmail).eq(1).type(email, {force: true});
        cy.get(this.inputSenha).eq(0).type(senha, {force: true});
        cy.get(this.inputConfirmaSenha).eq(1).type(confirmaSenha, {force: true});
        cy.contains("button", "Registrar").click({force: true});
    }

}

export var criarUsuarioPage = new CriarUsuarioPage();
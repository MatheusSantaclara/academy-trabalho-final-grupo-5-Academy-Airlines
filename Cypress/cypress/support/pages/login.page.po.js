class LoginPage {

    inputName = ".sc-kDDrLX.fENjNr";
    inputEmail = ".sc-kDDrLX.fENjNr";
    inputSenha = ".sc-cOFTSb.crpeOB";
    inputConfirmaSenha = ".sc-cOFTSb.crpeOB";

    loginEmail = ".sc-kDDrLX.fENjNr";
    loginSenha = ".sc-kDDrLX.fENjNr";

    menu = ".sc-bjUoiL.bgBaRw";
    perfil = ".sc-hHLeRK.QpzJB";
    sairLogout = "[href='/logout']";

    cadastroELogin () {
        var currentTimeInMilliseconds = Date.now();
        var nameFixoCriar = "Miley Cyrus";
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";
        var senha = 1234
        var confirmaSenha = 1234
        cy.contains("Registre-se").click({force: true});
        cy.get(this.inputName).eq(0).type(nameFixoCriar, { force: true });
        cy.get(this.inputEmail).eq(1).type(emailAleatorio, {force: true});
        cy.get(this.inputSenha).eq(0).type(senha, {force: true});
        cy.get(this.inputConfirmaSenha).eq(1).type(confirmaSenha, {force: true});
        cy.contains("button", "Registrar", should("be.visible")).click({force: true});

        cy.wait(2000);

        cy.get(this.loginEmail).eq(0).type(emailAleatorio);
        cy.get(this.loginSenha).eq(1).type(senha);
        cy.contains("button", "Entrar").click({force: true});

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

    logout() {
        cy.wait(1000);
        cy.get(this.menu).click({force: true});
        cy.wait(1000);
        cy.get(this.sairLogout).click({force: true});
    }

    loginSenhaIncorreta() {
        var currentTimeInMilliseconds = Date.now();
        var nameFixoCriar = "Miley Cyrus";
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";
        var senha = 1234
        var confirmaSenha = 1234
        cy.contains("Registre-se").click({force: true});
        cy.get(this.inputName).eq(0).type(nameFixoCriar, { force: true });
        cy.get(this.inputEmail).eq(1).type(emailAleatorio, {force: true});
        cy.get(this.inputSenha).eq(0).type(senha, {force: true});
        cy.get(this.inputConfirmaSenha).eq(1).type(confirmaSenha, {force: true});
        cy.contains("button", "Registrar").click();

        cy.wait(2000);

        cy.get(this.loginEmail).eq(0).type(emailAleatorio);
        cy.get(this.loginSenha).eq(1).type(4321);
        cy.contains("button", "Entrar").click();
    }

    loginSemSenha() {
        var currentTimeInMilliseconds = Date.now();
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";

        cy.get(this.loginEmail).eq(0).type(emailAleatorio);
        cy.contains("button", "Entrar").click();
    }

    loginEmailNaoCad() {
        var currentTimeInMilliseconds = Date.now();
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";

        cy.get(this.loginEmail).eq(0).type(emailAleatorio);
        cy.get(this.loginSenha).eq(1).type(4321);
        cy.contains("button", "Entrar").click();
    }

    loginEmailInvalido() {
        var currentTimeInMilliseconds = Date.now();
        var emailAleatorio = currentTimeInMilliseconds + "gmail.com";

        cy.get(this.loginEmail).eq(0).type(emailAleatorio);
        cy.get(this.loginSenha).eq(1).type(4321);
        cy.contains("button", "Entrar").click();
    }

}

export var loginPage = new LoginPage();
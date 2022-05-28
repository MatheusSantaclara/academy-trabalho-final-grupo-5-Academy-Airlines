/// <reference types="cypress" />
import { atualizarPage } from "../pages/atualizar.page.po";

const {
    After,
} = require("cypress-cucumber-preprocessor/steps");

After({ tags: "@atualizarPerfil" }, () => {
    atualizarPage.logout();
});

Given("que iniciei o sistema Lembra Compra para atualizar dados", () => {
    cy.visit("");
    cy.contains("button", "Entrar").should("be.visible");

});

And("loguei com meus dados", () => {
    cy.visit("https://academy-lembra-compras.herokuapp.com/register");
    atualizarPage.cadastroELogin();
});

When("altero nome e email", () => {
    atualizarPage.acessoPerfil();
    atualizarPage.alteraNome();

});

Then("visualizo a mensagem de {string}", (mensagemAtualizada) => {
    cy.contains(mensagemAtualizada).should("be.visible");

});

When("altero nome e email já existente", () => {
    var currentTimeInMilliseconds = Date.now();
    var emailDuplicado = currentTimeInMilliseconds + "@gmail.com"
    var emailDuplicado2 = currentTimeInMilliseconds + "greenday@gmail.com"
    cy.wait(1000);
    atualizarPage.logout();
    cy.wait(2000);
    atualizarPage.cadDuplicado("Billie Joe", emailDuplicado, 1234, 1234);
    cy.wait(2000);
    atualizarPage.cadDuplicado("Green Day", emailDuplicado2, 1234, 1234);
    cy.wait(2000);
    atualizarPage.login(emailDuplicado, 1234);
    atualizarPage.acessoPerfil();
    atualizarPage.alteraNomeDuplicado("Nickelback", emailDuplicado2);

});

Then("visualizo a mensagem de erro {string}", (EmailDuplicadoFront) => {
    cy.contains(EmailDuplicadoFront).should("be.visible");

});

Then("visualizo a mensagem de erro no response body {string}", () => {
    cy.intercept("https://academy-lembra-compras.herokuapp.com/register",
{
response: "'error':'E-mail already in use.'"
});

});

When("altero nome com mais de 100 caracteres", () => {
    atualizarPage.acessoPerfil();
    atualizarPage.alteraNomeErro("Chad Kroegerggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg","teste@teste.com");

});

Then("visualizo a mensagem de erro no campo de nome {string}", (mensagemErroNome) => {
    cy.contains(mensagemErroNome).should("be.visible");

});

When("altero nome com menos de 3 caracteres", () => {
    atualizarPage.acessoPerfil();
    cy.wait(1000);
    atualizarPage.alteraNomeErro("Cha","teste@teste.com");

});

Then("visualizo a mensagem para corrigir campo de nome {string}", (mensagemNomeCompleto) => {
    cy.contains(mensagemNomeCompleto).should("be.visible");

});


When("altero email com mais de 60 caracteres", () => {
    atualizarPage.acessoPerfil();
    cy.wait(1000);
    atualizarPage.alteraEmailErro("Chad Kroeger","t@gmail.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
    
});

When("altero email com mais de 100 caracteres", () => {
    atualizarPage.acessoPerfil();
    cy.wait(1000);
    atualizarPage.alteraEmailErro("Chad Kroeger","t@t.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
    
});

Then("visualizo a mensagem de erro no campo de email {string}", (mensagemErroEmail) => {
    cy.contains(mensagemErroEmail).should("be.visible");

}); 

When("altero email com formato inválido - sem @", () => {
    atualizarPage.acessoPerfil();
    cy.wait(1000);
    atualizarPage.alteraEmailErro("Chad","testeteste.com");

});

Then("visualizo a mensagem de formato inválido no campo de email {string}", (emailFormatoInvalido) => {
    cy.contains(emailFormatoInvalido).should("be.visible");

});

When("altero email com formato inválido - sem .com", () => {
    atualizarPage.acessoPerfil();
    cy.wait(1000);
    atualizarPage.alteraEmailErro("Chad","teste@teste");

});

Then("visualizo a mensagem de formato inválido no campo de email {string}", (emailFormatoInvalido) => {
    cy.contains(emailFormatoInvalido).should("be.visible");

});

When("altero email com formato inválido - sem .", () => {
    atualizarPage.acessoPerfil();
    cy.wait(1000);
    atualizarPage.alteraEmailErro("Chad","teste@testecom");

});

Then("visualizo a mensagem de formato inválido no campo de email {string}", (emailFormatoInvalido) => {
    cy.contains(emailFormatoInvalido).should("be.visible");

});

When("acesso a página de perfil sem ter logado",() => {
    atualizarPage.logout();
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/perfil");

})

Then("retorno a página para efetuar login", () => {
    cy.contains("Entrar").should("be.visible");
});

And("faço login para atualizar meus dados", () => {
    cy.visit("https://academy-lembra-compras.herokuapp.com/register");
    atualizarPage.cadastroELogin();
    atualizarPage.acessoPerfil();

    cy.contains("Minhas informações").should("be.visible");
});
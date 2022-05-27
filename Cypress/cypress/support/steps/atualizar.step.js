/// <reference types="cypress" />
import { atualizarPage } from "../pages/atualizar.page.po";

Given("que iniciei o sistema Lembra Compra para atualizar dados", () => {
    cy.visit("");
    cy.contains("button", "Entrar").should("be.visible");

});

And("Informo email e senha para logar", () => {
    cy.visit("https://academy-lembra-compras.herokuapp.com/register");
    atualizarPage.cadastroELogin();
});

When("altero nome e email", () => {
    atualizarPage.acessoPerfil();
    atualizarPage.alteraNome();

});

Then("aparece a mensagem de {string}", (mensagemAtualizada) => {
    cy.contains(mensagemAtualizada).should("be.visible");

    atualizarPage.logout();
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

Then("aparece a mensagem de erro {string}", () => {
    cy.intercept("https://academy-lembra-compras.herokuapp.com/register",
{
response: "'error':'E-mail already in use.'"
});

    atualizarPage.logout();
});

When("altero nome com mais de 100 caracteres", () => {
    atualizarPage.acessoPerfil();
    atualizarPage.alteraNomeErro("Chad Kroegerggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg","teste@teste.com");

});

Then("aparece a mensagem de erro no campo de nome {string}", (mensagemErroNome) => {
    cy.contains(mensagemErroNome).should("be.visible");

    atualizarPage.logout();
});

When("altero email com mais de 60 caracteres", () => {
    atualizarPage.acessoPerfil();
    atualizarPage.alteraEmailErro("Chad Kroeger","t@t.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
    cy.wait(1000);
});

Then("aparece a mensagem de erro no campo de email {string}", (mensagemErroEmail) => {
    cy.contains(mensagemErroEmail).should("be.visible");

    atualizarPage.logout();
}); 
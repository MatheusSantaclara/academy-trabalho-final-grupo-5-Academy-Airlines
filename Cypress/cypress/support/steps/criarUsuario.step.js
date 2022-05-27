/// <reference types="cypress" />
import { criarUsuarioPage } from "../pages/criarUsuario.page.po";

Given("iniciei o sistema Lembra Compra para criar usuario", () => {
    cy.visit("");
});

And("Cliquei em registre-se", () => {
    criarUsuarioPage.clickRegistro();
});

When("Informo meus dados para cadastro",  () => {
    criarUsuarioPage.cadComSucesso();
});

Then("visualizo mensagem de {string}", (mensagemSucesso) => {
    cy.contains(mensagemSucesso).should("be.visible");
});

When("Informo email e senha e não informo o nome", () => {
    criarUsuarioPage.cadEmail();
    criarUsuarioPage.cadSenha();
    criarUsuarioPage.cadConfirmaSenha();
    criarUsuarioPage.botaoRegistrar();
});

Then("visualizo mensagem para preencher campo de nome {string}", (mensagemNome) => {
    cy.contains(mensagemNome).should("be.visible");
});

When("Informo nome e senha e não informo o email", () => {
    criarUsuarioPage.cadNome();
    criarUsuarioPage.cadSenha();
    criarUsuarioPage.cadConfirmaSenha();
    criarUsuarioPage.botaoRegistrar();
});

Then("visualizo mensagem para preencher campo de email {string}", (mensagemEmail) => {
    cy.contains(mensagemEmail).should("be.visible");
});

When("Informo nome e senha e informo o email com formato inválido", () => {
    criarUsuarioPage.cadNome();
    criarUsuarioPage.cadEmailVazio("avrillavigne.com.br");
    criarUsuarioPage.cadSenha();
    criarUsuarioPage.cadConfirmaSenha();
    criarUsuarioPage.botaoRegistrar();
});

Then("visualizo mensagem para corrigir campo de email {string}", (mensagemEmailIncorreto) => {
    cy.contains(mensagemEmailIncorreto).should("be.visible");
});

When("Informo nome e senha e informo o email já existente", () => {
    var currentTimeInMilliseconds = Date.now();
    var emailDuplicado = currentTimeInMilliseconds + "billiejoe@gmail.com"
    criarUsuarioPage.cadDuplicado("Billie Joe", emailDuplicado, 1234, 1234);
    cy.wait(2000);

    criarUsuarioPage.clickRegistro();
    criarUsuarioPage.cadDuplicado("Avril Lavigne", emailDuplicado, 1234, 1234);
});

Then("visualizo mensagem que {string}", (mensagemDuplicidade) => {
    cy.contains(mensagemDuplicidade).should("be.visible");
});

And("deve ser exibida a mensagem de {string}", () => {     
cy.intercept("https://academy-lembra-compras.herokuapp.com/register",
{
response: "User already exists."
});

});

When("Informo nome e email e não informo o senha", () => {
    criarUsuarioPage.cadNome();
    criarUsuarioPage.cadEmail();
    criarUsuarioPage.cadConfirmaSenha();
    criarUsuarioPage.botaoRegistrar();
});

Then("visualizo mensagem para preencher campo de senha {string}", (mensagemSenha) => {
    cy.contains(mensagemSenha).should("be.visible");
});

When("Informo nome, email e senha e não informo o confirmação de senha", () => {
    criarUsuarioPage.cadNome();
    criarUsuarioPage.cadEmail();
    criarUsuarioPage.cadSenha();
    criarUsuarioPage.botaoRegistrar();
});

When("Informo nome com mais de 100 caracteres", () => {
    criarUsuarioPage.cadNomeVazio("Billie Joe Armstrongggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg");
    criarUsuarioPage.cadEmail();
});

Then("visualizo mensagem para corrigir campo de nome {string}", (mensagemNomeIncorreto) => {
    cy.contains(mensagemNomeIncorreto).should("be.visible");
});

When("Informo email com mais de 100 caracteres", () => {
    criarUsuarioPage.cadNome();
    criarUsuarioPage.cadEmailVazio("billiejoearmstrongggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg@gmail.com");
    criarUsuarioPage.cadSenha();
});

Then("visualizo mensagem para corrigir tamanho de email {string}", (mensagemEmailIncorreto) => {
    cy.contains(mensagemEmailIncorreto).should("be.visible");
});
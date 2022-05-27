/// <reference types="cypress" />
import { loginPage } from "../pages/login.page.po";

Given("Que iniciei o sistema Lembra Compra", () => {
    cy.visit("");
});

When("Informo email e senha", () => {
    loginPage.cadastroELogin();

});

Then("efetuo login no sistema com sucesso", () => {
    cy.contains("Dê um nome para sua lista").should("be.visible");
    loginPage.logout();
});

When("Informo email e senha incorreta", () => {
    loginPage.loginSenhaIncorreta();

});

Then("visualizo mensagem de erro {string}", (mensagemErro) => {
    cy.contains(mensagemErro).should("be.visible");
});

When("Informo email e não informo o senha", () => {
    loginPage.loginSemSenha();

});

Then("visualizo a mensagem {string}", (informeSenha) => {
    cy.contains(informeSenha).should("be.visible");
});

When("Informo email não cadastrado", () => {
    loginPage.loginEmailNaoCad();

});

When("Informo email com formato inválido", () => {
    loginPage.loginEmailInvalido();

});

Then("visualizo mensagem para corrigir email {string}", (emailErrado) => {
    cy.contains(emailErrado).should("be.visible");
});
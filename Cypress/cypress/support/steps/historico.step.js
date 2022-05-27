/// <reference types="cypress" />
import { historicoPage } from "../pages/historico.page.po";

Given("que iniciei o sistema Lembra Compra para visualizar historico", () => {
    cy.visit("");
});

And("informei email e senha para logar", () => {
    historicoPage.cadastroHistorico();
    cy.wait(1000);
});

When("acesso histórico de lista", () => {
    historicoPage.criarListaEFinaliza("Lista a", "Arroz", 1);
    historicoPage.criarListaEFinaliza("Lista b", "Feijão", 1);
    historicoPage.criarListaEFinaliza("Lista c", "Chocolate", 1);
    historicoPage.criarListaEFinaliza("Lista d", "Pipoca", 1);
    historicoPage.criarListaEFinaliza("Lista e", "Sabonete", 1);
    historicoPage.criarListaEFinaliza("Lista f", "Morango", 1);
    historicoPage.criarListaEFinaliza("Lista g", "Alface", 1);
    historicoPage.criarListaEFinaliza("Lista h", "Pão", 1);
    historicoPage.criarListaEFinaliza("Lista i", "Macarrão", 1);
    historicoPage.criarListaEFinaliza("Lista j", "Molho", 1);
    historicoPage.criarListaEFinaliza("Lista k", "Shampoo", 1);

    historicoPage.acessarHistorico();
});

Then("visualizo minha lista de compra", () => {
    cy.contains("Lista k").should("be.visible");
});

And("somente as 10 ultimas listas", () => {
    cy.contains("Lista a").should("not.exist");

    historicoPage.logout();
});

When("acesso meu histórico de lista", () => {
    historicoPage.criarListaEFinaliza("Lista a", "Arroz", 1);
});

And("consulto uma lista", () => {
    historicoPage.acessarHistorico();
    historicoPage.clicarListaEmHistorico();
});

Then("visualizo nome e itens", () => {
    cy.contains("Arroz").should("be.visible");
    cy.contains("Lista a").should("be.visible");

    historicoPage.logout();
});
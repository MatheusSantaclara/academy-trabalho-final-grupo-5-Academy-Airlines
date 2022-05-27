/// <reference types="cypress" />
import { gestaoListaPage } from "../pages/gestaoLista.page.po";

const {
    After,
} = require("cypress-cucumber-preprocessor/steps");

After({ tags: "@gestaoLista" }, () => {
   gestaoListaPage.logout();
});


Given("que iniciei o sistema Lembra Compra para gerenciar lista", () => {
    cy.visit("");
});

And("informo email e senha para logar", () => {
    gestaoListaPage.cadastroELoginGestao();
    cy.wait(1000);
});

When("nomeio a lista", () => {
    gestaoListaPage.preencheNomeLista("Jantar Aniversário");

});

And("informo nome e quantidade dos itens", () => {
    gestaoListaPage.preencheItens("Arroz", 1);
    gestaoListaPage.clicaSalvar();
});

Then("visualizo mensagem de {string}", (mensagemSucesso) => {
    cy.contains(mensagemSucesso).should("be.visible");
});

And("consigo ter apenas 1 lista ativa", () => {
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");
    cy.contains("Jantar Aniversário").should("be.visible");
    
});

When("não informo um nome para a lista", () => {
    //gestaoListaPage.preencheNomeLista();

});

Then("a mensagem de sucesso é exibida {string}", (mensagemDeSucesso) => {
    cy.contains(mensagemDeSucesso).should("be.visible");

});

And("informo quantidade menor que 1 de um determinado item", () => {
    gestaoListaPage.preencheItens("Arroz", 0);
    gestaoListaPage.clicaSalvar();
});

Then("visualizo a mensagem de erro {string}", (mensagemErro) => {
    cy.contains(mensagemErro).should("be.visible");

});

And("informo quantidade maior que 1000 de um determinado item", () => {
    gestaoListaPage.preencheItens("Arroz", 10001);
    gestaoListaPage.clicaSalvar();
});

Then("visualizo a mensagem de erro de quantidade {string}", (mensagemErroQt) => {
    cy.contains(mensagemErroQt).should("be.visible");

});

And("informo um item já adicionado", () => {
    gestaoListaPage.preencheItens("Arroz", 2);
    gestaoListaPage.preencheItens("Arroz", 2);
    gestaoListaPage.clicaSalvar();
});

Then("a quantidade de itens devem ser acrescentada", () => {
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");
    
    cy.contains(22).should("be.visible");

});

And("não pode ultrapassar 1000 unidades e mensagem deve ser exibida {string}", (mensagem1000) => {
    cy.wait(1000);
    gestaoListaPage.adicionarItens("Arroz", 999);

    cy.contains(mensagem1000).should("be.visible");

});

When("abro uma lista ativa", () => {
    gestaoListaPage.preencheNomeLista("Jantar Aniversário");
    gestaoListaPage.preencheItens("Arroz", 13);
    gestaoListaPage.clicaSalvar();
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");

});

And("informo um item novo", () => {
    cy.wait(1000);
    gestaoListaPage.adicionarItens("Feijão", 15);

});

Then("a quantidade os itens devem ser adicionados", () => {
    cy.contains("Feijão").should("be.visible");

});

And("informo um item já adicionado anteriormente", () => {
    cy.wait(1000);
    gestaoListaPage.adicionarItens("Arroz", 15);
});

Then("a quantidade de itens atualizados devem ser acrescentada", () => {
    cy.wait(1000);
    cy.contains(28).should("be.visible");

});

And("não pode ultrapassar 1000 unidades {string}", (mensagemProdutos) => {
    cy.wait(1000);
    gestaoListaPage.adicionarItens("Arroz", 979);
    
    cy.contains(mensagemProdutos).should("be.visible");

});

And("concluo um item", () => {
    cy.wait(1000);
    gestaoListaPage.concluirItem()
});

Then("item é marcado como concluído na lista", () => {
    gestaoListaPage.itemFinalizado();

});

When("finalizo uma lista ativa", () => {
    gestaoListaPage.preencheNomeLista("Jantar Aniversário");
    gestaoListaPage.preencheItens("Arroz", 13);
    gestaoListaPage.clicaSalvar();
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");

    gestaoListaPage.finalizarLista();
});

Then("a mensagem de lista finalizada é exibida {string}", (mensagemConcluida) => {
    cy.contains(mensagemConcluida).should("be.visible");

});

And("status não pode ser alterado", () => {
    gestaoListaPage.acessarHistorico();
    cy.contains("Editar").should("not.exist");

});
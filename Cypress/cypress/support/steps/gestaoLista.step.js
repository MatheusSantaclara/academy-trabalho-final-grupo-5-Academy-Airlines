/// <reference types="cypress" />
import { gestaoPage } from "../pages/gestao.page.po";

const {
    After,
} = require("cypress-cucumber-preprocessor/steps");

After({ tags: "@gestaoLista" }, () => {
    gestaoPage.logout();
});

Given("que iniciei o sistema Lembra Compra para gerenciar lista", () => {
    cy.visit("https://academy-lembra-compras.herokuapp.com/login");
});

And("entrei com meus dados", () => {
    gestaoPage.cadGestao();
    cy.wait(1000);
});

When("nomeio a lista", () => {
    gestaoPage.preencheNomeLista("Jantar Aniversário");

});

And("informo nome e quantidade dos itens", () => {
    gestaoPage.preencheItens("Arroz", 1);
    gestaoPage.clicaSalvar();
});

Then("visualizo mensagem de sucesso {string}", (mensagemDeSucesso) => {
    cy.contains(mensagemDeSucesso).should("be.visible");

});

And("tenho apenas 1 lista ativa", () => {
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");
    cy.contains("Jantar Aniversário").should("be.visible");
    
});

When("não informo um nome para a lista", () => {
    //gestaoListaPage.preencheNomeLista();

});

And("não informo nome e nem quantidade dos itens", () => {
    gestaoPage.clicaSalvar();
});

Then("visualizo mensagem de falha ao criar lista {string}", (mensagemFalha) => {
    cy.contains(mensagemFalha).should("be.visible");

});

And("informo quantidade menor que 1 de um determinado item", () => {
    gestaoPage.preencheItens("Arroz", 0);

});

Then("visualizo a mensagem para informar 1 item pelo menos {string}", (mensagemErro) => {
    cy.contains(mensagemErro).should("be.visible");

});

And("informo quantidade maior que 1000 de um determinado item", () => {
    gestaoPage.preencheItens("Arroz", 1001);
    gestaoPage.clicaSalvar();
});

Then("visualizo a mensagem de erro de quantidade {string}", (mensagemErroQt) => {
    cy.contains(mensagemErroQt).should("be.visible");

});

And("informo um item já adicionado", () => {
    gestaoPage.preencheItens("Arroz", 2);
    gestaoPage.preencheItens("Arroz", 2);
    gestaoPage.clicaSalvar();
});

Then("visualizo que a quantidade de itens é adicionada", () => {
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");
    
    cy.contains(4).should("be.visible");

});

And("não ultrapassa 1000 unidades e visualizo mensagem {string}", (mensagem1000) => {
    cy.wait(1000);
    gestaoPage.adicionarItens("Arroz", 999);

    cy.contains(mensagem1000).should("be.visible");

});

When("abro uma lista ativa", () => {
    gestaoPage.preencheNomeLista("Jantar Aniversário");
    gestaoPage.preencheItens("Arroz", 13);
    gestaoPage.clicaSalvar();
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");

});

And("informo um item novo", () => {
    cy.wait(1000);
    gestaoPage.adicionarItens("Feijão", 15);

});

Then("visualizo que a quantidade de itens é acrescentado", () => {
    cy.contains("Feijão").should("be.visible");

});

And("informo um item já adicionado anteriormente", () => {
    cy.wait(1000);
    gestaoPage.adicionarItens("Arroz", 15);
});

Then("visualizo que a quantidade atualizada de itens é acrescentado", () => {
    cy.wait(1000);
    cy.contains(28).should("be.visible");

});

And("não ultrapassa 1000 unidades {string}", (mensagemProdutos) => {
    cy.wait(1000);
    gestaoPage.adicionarItens("Arroz", 979);
    
    cy.contains(mensagemProdutos).should("be.visible");

});

And("concluo um item", () => {
    cy.wait(1000);
    gestaoPage.concluirItem();
});

Then("visualizo que o item é marcado como concluído na lista", () => {
    gestaoPage.itemFinalizado();

});

When("finalizo uma lista ativa", () => {
    gestaoPage.preencheNomeLista("Jantar Aniversário");
    gestaoPage.preencheItens("Arroz", 13);
    gestaoPage.clicaSalvar();
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");

    gestaoPage.finalizarLista();
});

Then("visualizo a mensagem de lista finalizada {string}", (mensagemConcluida) => {
    cy.contains(mensagemConcluida).should("be.visible");

});

And("seu status não pode ser alterado", () => {
    gestaoPage.acessarHistorico();
    cy.contains("Editar").should("not.exist");

});

When("acesso a página de lista sem ter logado", () => {
    gestaoPage.logout();
    cy.wait(1000);
    cy.visit("https://academy-lembra-compras.herokuapp.com/lista");
});

Then("retorno a página para efetuar login", () => {
    cy.contains("Entrar").should("be.visible");
});

And("faço login para criar minha lista", () => {
    gestaoPage.cadGestao();
    gestaoPage.preencheItens("Arroz", 2);
    gestaoPage.clicaSalvar();
    cy.contains("Lista de compras criada com sucesso!").should("be.visible");
    cy.wait(2000);
});
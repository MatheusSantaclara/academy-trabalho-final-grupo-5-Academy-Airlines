class GestaoListaPage {

    inputName = ".sc-kDDrLX.fENjNr";
    inputEmail = ".sc-kDDrLX.fENjNr";
    inputSenha = ".sc-cOFTSb.crpeOB";
    inputConfirmaSenha = ".sc-cOFTSb.crpeOB";

    loginEmail = ".sc-kDDrLX.fENjNr";
    loginSenha = ".sc-kDDrLX.fENjNr";

    menu = ".sc-bjUoiL.bgBaRw";
    perfil = ".sc-hHLeRK.QpzJB";
    sairLogout = "[href='/logout']";
    linkLista = "[href='/lista']"

    nomeLista = ".sc-hAZoDl .sc-ksZaOG";
    nomeItem = ".sc-ksZaOG.iOgYyu";
    quantidadeItem = ".sc-ksZaOG.iOgYyu";

    campoItem = ".sc-gXmSlM.ExnMO";

    itemConcluido = ".sc-gXmSlM.Xhkyc";

    cadastroELoginGestao () {
        var currentTimeInMilliseconds = Date.now();
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";
        cy.contains("Registre-se").click({force: true});
        cy.get(this.inputName).eq(0).type("Bon Jovi", { force: true });
        cy.get(this.inputEmail).eq(1).type(emailAleatorio, {force: true});
        cy.get(this.inputSenha).eq(0).type(1234, {force: true});
        cy.get(this.inputConfirmaSenha).eq(1).type(1234, {force: true});
        cy.contains("button", "Registrar").click({force: true});

        cy.wait(2000);

        cy.get(this.loginEmail).eq(0).type(emailAleatorio);
        cy.get(this.loginSenha).eq(1).type(senha);
        cy.contains("button", "Entrar").click({force: true});

    }

    preencheNomeLista(descricao) {
        cy.get(this.nomeLista).eq(0).type(descricao, { force: true });
    }
    
    preencheItens(descricaoItem, quantItem) {
        cy.get(this.nomeItem).eq(1).type(descricaoItem, { force: true });
        cy.get(this.quantidadeItem).eq(2).clear({ force: true });        
        cy.get(this.quantidadeItem).eq(2).type(quantItem, { force: true });
        cy.contains("button", "+").click({force: true});
        cy.wait(1000);
    }

    clicaSalvar() {
        cy.contains("button", "Salvar").click({force: true});
    }

    finalizarLista() {
        cy.wait(2000);
        cy.contains("button", "Finalizar a lista").click({force: true});
        cy.contains("button", "Confirma").click({force: true});
    }

    logout() {
        cy.wait(1000);
        cy.get(this.menu).click({force: true});
        cy.get(this.sairLogout).click({force: true});
    }

    adicionarItens(descricaoItem, quantItem) {
        cy.get(".sc-ksZaOG.iOgYyu").eq(0).type(descricaoItem, { force: true });
        cy.get(".sc-ksZaOG.iOgYyu").eq(1).clear({ force: true });        
        cy.get(".sc-ksZaOG.iOgYyu").eq(1).type(quantItem, { force: true });
        cy.contains("button", "+").click({force: true});
    }

    concluirItem() {
        cy.get(".sc-himrzO.dHzcbv").click({force: true});
    }

    itemFinalizado() {
        cy.get(this.itemConcluido).should("be.visible");
    }

    acessarHistorico() {
        cy.visit("https://academy-lembra-compras.herokuapp.com/historico");
        cy.get(".sc-lbOyJj.kUIcKA").click({force: true});
        cy.wait(1000);
    }

}

export var gestaoListaPage = new GestaoListaPage();
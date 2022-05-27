class HistoricoPage {

    inputNameH = ".sc-kDDrLX.fENjNr";
    inputEmailH = ".sc-kDDrLX.fENjNr";
    inputSenhaH = ".sc-cOFTSb.crpeOB";
    inputConfirmaSenhaH = ".sc-cOFTSb.crpeOB";

    loginEmailH = ".sc-kDDrLX.fENjNr";
    loginSenhaH = ".sc-kDDrLX.fENjNr";

    menu = ".sc-bjUoiL.bgBaRw";
    perfil = ".sc-hHLeRK.QpzJB";
    sairLogout = "[href='/logout']";
    linkLista = "[href='/lista']"

    nomeLista = ".sc-hAZoDl .sc-ksZaOG";
    nomeItem = ".sc-ksZaOG.iOgYyu";
    quantidadeItem = ".sc-ksZaOG.iOgYyu";

    campoItem = ".sc-gXmSlM.ExnMO";

    itemConcluido = ".sc-gXmSlM.Xhkyc";

    cadastroHistorico (nameFixo, emailAleatorio, senhaFixa, confirmaSenhaFixa) {
        var currentTimeInMilliseconds = Date.now();
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";
        var nameFixo = "Van Halen"
        var senhaFixa = 1234
        var confirmaSenhaFixa = 1234

        cy.contains("Registre-se").click({force: true});
        cy.get(this.inputNameH).eq(0).type(nameFixo, { force: true });
        cy.get(this.inputEmailH).eq(1).type(emailAleatorio, {force: true});
        cy.get(this.inputSenhaH).eq(0).type(senhaFixa, {force: true});
        cy.get(this.inputConfirmaSenhaH).eq(1).type(confirmaSenhaFixa, {force: true});
        cy.contains("button", "Registrar").click({force: true});

        cy.wait(2000);

        cy.get(this.loginEmailH).eq(0).type(emailAleatorio);
        cy.get(this.loginSenhaH).eq(1).type(senhaFixa);
        cy.contains("button", "Entrar").click({force: true});

    }

    criarListaEFinaliza(descricao, descricaoItem, quantItem) {
        cy.get(this.nomeLista).eq(0).type(descricao, { force: true });
        cy.get(this.nomeItem).eq(1).type(descricaoItem, { force: true });
        cy.get(this.quantidadeItem).eq(2).clear({ force: true });        
        cy.get(this.quantidadeItem).eq(2).type(quantItem, { force: true });
        cy.contains("button", "+").click({force: true});
        cy.contains("button", "Salvar").click({force: true});
        cy.wait(2000);
        cy.contains("button", "Finalizar a lista").click({force: true});
        cy.contains("button", "Confirma").click({force: true});
        cy.wait(2000);
    }

    preencheNomeLista(descricao) {
        cy.get(this.nomeLista).eq(0).type(descricao, { force: true });
    }
    
    preencheItens(descricaoItem, quantItem) {
        cy.get(this.nomeItem).eq(1).type(descricaoItem, { force: true });
        cy.get(this.quantidadeItem).eq(2).clear({ force: true });        
        cy.get(this.quantidadeItem).eq(2).type(quantItem, { force: true });
        cy.contains("button", "+").click({force: true});
        cy.contains("button", "Salvar").click({force: true});
        cy.wait(1000);
    }

    clicaSalvar() {
        cy.contains("button", "Salvar").click({force: true});
    }

    finalizarLista() {
        cy.wait(2000);
        cy.contains("button", "Finalizar a lista").click({force: true});
        cy.contains("button", "Confirma").click({force: true});
        cy.wait(2000);
    }

    adicionarItens(descricaoItem, quantItem) {
        cy.get(".sc-ksZaOG.iOgYyu").eq(0).type(descricaoItem, { force: true });
        cy.get(".sc-ksZaOG.iOgYyu").eq(1).clear({ force: true });        
        cy.get(".sc-ksZaOG.iOgYyu").eq(1).type(quantItem, { force: true });
        cy.contains("button", "+").click({force: true});
    }

    acessarHistorico() {
        cy.visit("https://academy-lembra-compras.herokuapp.com/historico");

    }

    clicarListaEmHistorico() {
        cy.get(".sc-lbOyJj.kUIcKA").click({force: true});
        cy.wait(1000);
    }

    logout() {
        cy.wait(1000);
        cy.get(this.menu).click({force: true});
        cy.get(this.sairLogout).click({force: true});
    }

}

export var historicoPage = new HistoricoPage();
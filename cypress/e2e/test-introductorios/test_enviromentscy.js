describe("environmentVars", () => {
    it("testCase02: Prueba de variables de ambiente", () => {
        // cy.visit('https://example.cypress.io')
        cy.visit(Cypress.env("ejemplo_url"));
        cy.contains("type").click();
        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should("include", "/commands/actions");
        cy.writeFile(
            "c:/backup/cypress/log01.txt",
            Cypress.env("ejemplo_url") + "\n"
        ); //graba la var de ambiente
        cy.writeFile("c:/backup/cypress/log01.txt", " ** Fin de file **", {
            flag: "a+",
        }); //append
    });
});

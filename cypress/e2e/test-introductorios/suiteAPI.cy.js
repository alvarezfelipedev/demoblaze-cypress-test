describe("SuiteApi", () => {
  it("GET API testing Using Cypress API Plugin", () => {
    cy.request("GET", "https://digidates.de/api/v1/leapyear?year=2024").then(
      (response) => {
        expect(response.status).to.eq(200); //chequea el status ok

        expect(response.body.leapyear).to.eq(true); // chequea que 2024 NO es bisisesto. Da error pq es bisisesto

        cy.log(response); // solo aparece cuando se ejecuta con npx open

        cy.writeFile("c:/backup/cypress/log01.txt", response); //graba el response en un file si no hay error hasta aqui
      }
    );
  });
});

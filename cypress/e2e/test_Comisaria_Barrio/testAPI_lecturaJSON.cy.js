describe("API Buenos Aires", () => {
  it("Saber si es la comisaria y barrio esperada", () => {
    cy.fixture("api_bsas04.json").then((data) => {
      expect(data.comisaria).to.eq(19);
      expect(data.barrio).to.eq("Colegiales");
    });

    /* MANERA 2
        cy.readFile("c:/backup/cypress/api_bsas02.json").then((content) => {
            expect(content.comisaria).to.eq(19);
            expect(content.barrio).to.eq("Colegiales")
        }) FUNCIONA 
    */
  });
});

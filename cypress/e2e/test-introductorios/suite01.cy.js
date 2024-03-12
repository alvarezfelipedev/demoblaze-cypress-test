describe("Suite01", () => {
  it("testCase01: chequeo email", () => {
    cy.visit("/"); // se posiciona en la página
    cy.contains("type").click(); // chequea que contenga el texto “type” y lo cklickea

    // Aparece una nueva url, chequea que contenga el texto
    // '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Busca el campo con id=email y rellena con lo que esta en type
    cy.get('[id="email1" ]').type("fake@email.com");

    //  Verifica que el valor haya sigo cargado en el campo
    //ok cy.get('.action-email').should('have.value', 'fake@email.com')   // get por clase
    //ok cy.get('[id="email1" ]').should('have.value', 'fake@email.com')  //get por id
    cy.get("#email1").should("have.value", "fake@email.com"); //get por selector

    // para ubicar elementos por selector. En este caso es un campo vacío
    // 1.ir al inspector 2.ir al elemento  3.boton derecho--> copiar-->selector 4.pegar dentro de cy.get()
    //cy.get('#actions > div > div:nth-child(2) > div > form > div:nth-child(2) > textarea').should('have.value', '')
  });
});

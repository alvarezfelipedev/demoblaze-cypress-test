describe("testApi1", () => {
  it("GET API testing Using Cypress API Plugin", () => {
    let param01 = "2023";
    let url01 = "https://digidates.de/api/v1/leapyear?year=" + param01;
    let fileOutput = "c:/backup/cypress/log01.txt";

    cy.request("GET", url01).then((response) => {
      expect(response.status).to.eq(200); //chequea el status ok
      expect(response.body).to.have.property("leapyear", false);

      let respuesta = response.body;

      cy.log(respuesta); // solo aparece cuando se ejecuta con npx open
      cy.writeFile(fileOutput, respuesta); //graba el response body en un file
    });
  });
});

// Ejercicio 0: ver api https://digidates.de/en/checkdate y generar un js que guarde en un archivo la fecha ingresada como parámetro y si es valida o no(pista: las variables se concatenan con +)

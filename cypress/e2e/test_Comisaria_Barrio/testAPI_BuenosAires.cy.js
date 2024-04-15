describe("API Buenos Aires", () => {
  it("Obtener datos de la Direccion", () => {
    let calle = "Paraguay";
    let altura = 1000;
    let API = `https://datosabiertos-usig-apis.buenosaires.gob.ar/datos_utiles?calle=${calle}&altura=${altura}`
    let fileOutput = "cypress/fixtures/api_bsas04.json";

    /* MANERA 2 
      let FileOutput1 = "c:/backup/cypress/api_bsas02.json" FUNCIONA
    */

    cy.request("GET", API).then((response) => {
      expect(response.status).to.eq(200);
      let respuesta = response.body;

      // cy.log(respuesta); // solo aparece cuando se ejecuta con npx open

      cy.writeFile(fileOutput, respuesta); //graba el response body en un file
    });
  });
});
describe("API Datos Geográficos", () => {
  it("Guardar provincias que contengan la letra S", () => {
    /* let API =
      "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"; */
    let fileOutput = "cypress/fixtures/get_provincias_letra_s.json";

    cy.request({
      method: "GET",
      url: "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre",
      timeout: 10000,
    }).then((response) => {
      expect(response.status).to.eq(200);
      let data = response.body.provincias;
      let firstLetterS = [];

      for (let i = 0; i < data.length; i++) {
        if (data[i].nombre.startsWith("S")) {
          firstLetterS.push(data[i].nombre);
        }
      }

      /* GUARDA LOS DATOS EN TXT
        cy.writeFile(fileOutput, firstLetterS.join("\n"));
      */

      /* GUARDA LOS DATOS EN JSON */
      let jsonData = JSON.stringify(firstLetterS);

      cy.writeFile(fileOutput, jsonData);
    });
  });
});

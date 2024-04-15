// Ejercicio 0: ver api https://digidates.de/en/checkdate y generar un js que guarde en un archivo la fecha ingresada como parámetro y si es valida o no(pista: las variables se concatenan con +)

describe("validate_API", () => {
    it("Validar la fecha ingresada", () => {
        // console.log("Formato de fecha: AAAA-MM-DD")
        let fecha = "2023-01-30"
        let urlAPI = `https://digidates.de/api/v1/checkdate?date=${fecha}`
        let fileOutput = "c:/backup/cypress/log02.txt";

        cy.request("GET", urlAPI).then((response) => {
            expect(response.status).to.eq(200); //chequea el status ok
            expect(response.body).to.have.property("checkdate", true);
      
            let respuesta = response.body;
      
            cy.log(respuesta); // solo aparece cuando se ejecuta con npx open
            cy.writeFile(fileOutput, respuesta); //graba el response body en un file
          });
    })
})
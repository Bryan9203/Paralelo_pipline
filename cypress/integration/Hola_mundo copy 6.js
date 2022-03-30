
describe("Bienvenido al curso de Cypress seccion 1", () =>{

        it("Mi primer test -> Hola Mundo", () =>{
            cy.log("Hola Mundo")
            cy.wait(4000) //equivale a 1 segundo 1000
        })

        it("Segundo test -> campo name", () =>{
            cy.visit("https://demoqa.com/text-box")

            cy.get("#userName").type("Bryan") //elementos id con #, elementos class con .
            cy.wait(4000)
        })

})//Cierre de describe


describe('test01', () => {
    it('Test case 01: con error ', () => {
        
        let b = 23
        if (b == 50) {
            cy.log('vale ', b)
        }
        expect(b).to.equal(50)

    })

    it('Test case 02: sin error', () => {
        expect(true).to.equal(true)
        let a = 23
        if (a == 23) {
            cy.log('vale ', a)
        }
        expect(a).to.equal(23)
         
    })
    
})
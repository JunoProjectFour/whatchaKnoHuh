describe('practicing', ()=> {
    beforeEach(()=>{
        cy.visit('https://whatdouno.netlify.app/')
    })

it('check if game loads', ()=> {
    cy.contains('How to Play')
})

})
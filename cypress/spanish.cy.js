describe('QA assessment for matching engine', () => {
    it('verify and assert', () => {
        cy.viewport(1280, 800);
        cy.visit('https://www.matchingengine.com');



        cy.contains('a.navbar-link', 'Modules').trigger('mouseover');
        cy.contains('a.navbar-item', 'Repertoire Management Module').click({ force: true });




        cy.contains('Additional Features').scrollIntoView();
        cy.contains('Products Supported').click();

        cy.contains('h3', 'There are several types of Product Supported:').should('be.visible');
    });
});
  
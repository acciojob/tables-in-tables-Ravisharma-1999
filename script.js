describe('Testing nested tables', () => {
  it('Verifies the structure and content of nested tables', () => {
    cy.visit('http://localhost:3000'); // Adjust URL as per your application

    // Check that there are exactly 5 tables
    cy.get('table').should('have.length', 5);

    // Check the headers of the second nested table
    cy.get('table').eq(1).within(() => {
      cy.get('th').eq(0).should('contain', 'Nested Table 2');
      cy.get('th').eq(1).should('contain', 'Column 1');
      cy.get('th').eq(2).should('contain', 'Column 2');
    });
  });
});

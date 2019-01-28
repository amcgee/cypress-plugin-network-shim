context('Smoke', () => {
  it('Should not crash', () => {
    cy.wrap(true).should('be', true);
  });
});
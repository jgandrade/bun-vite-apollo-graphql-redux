describe('Home Component', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('renders page header correctly', () => {
    cy.get('[data-testid="page-header"]').should('contain', 'Hello Home');
  });

  it('disables the load greeting button', () => {
    cy.get('button[type="button"]').should('be.disabled');
  });
});
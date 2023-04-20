describe('Donate page', () => {
  it('Test texts in donate page', () => {
    cy.visit('/doe')
    cy.contains('Brasil Simulador Detran')
    cy.contains('Simulador Detran Ⓒriar.art')
  })
  it('Test email pix', () => {
    cy.get('[aria-label="2lembre@gmail.com"]')
      .should('to.exist')
      .should('have.value', '2lembre@gmail.com')

    cy.get('[aria-label="lucasferreiralimax@gmail.com"]')
      .should('to.exist')
      .should('have.value', 'lucasferreiralimax@gmail.com')

    cy.get('[aria-label="contato@criar.art"]')
      .should('to.exist')
      .should('have.value', 'contato@criar.art')
  })
})

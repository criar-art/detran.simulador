describe('About page', () => {
  it('Test texts in about page', () => {
    cy.visit('/info')
    cy.contains('Brasil Simulador Detran')
    cy.contains('Simulador Detran - Ⓒriar.art')
  })
  it('Test email and link in about page', () => {
    cy.contains('lucasferreiralimax@gmail.com')
    cy.contains('criar-curriculo.web.app')
  })
})

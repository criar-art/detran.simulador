import pkg from 'package.json';

describe('Home page', () => {
  it('Test texts in initial page', () => {
    cy.visit('/')
    cy.contains('Brasil Simulador Detran')
    cy.contains('Seja bem-vindo!')
    cy.contains('Acreditamos que você é capaz de conquistar todos seus objetivos')
    cy.contains('Tenha calma e mantenha foco em seus estudos')
    cy.contains('Teste Simples')
    cy.contains('Teste Médio')
    cy.contains('Informações')
    cy.contains('Simulador Detran Ⓒriar.art')

    cy.get('[aria-label="Botão para abrir o menu de navegação"]').click()
    cy.get('.version').contains(`Versão: ${pkg.version}`)
  })
})

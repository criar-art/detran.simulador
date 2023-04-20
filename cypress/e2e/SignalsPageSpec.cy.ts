import signalsList from 'src/app/core/signals';

describe('Signals page', () => {
  it('Test texts in signals page', () => {
    cy.visit('/placas')
    cy.contains('Brasil Simulador Detran')
    cy.contains('Simulador Detran Ⓒriar.art')
  })

  for(let [i, item] of signalsList.entries()) {
    it(`Test signals content ${item.title}`, () => {
      cy.contains(signalsList[i].title).click()
      cy.wait(500)

      cy.get('.card').each(($els, index) => {
        cy.contains(signalsList[i].list[index].subtitle)
        cy.get(`[alt="${signalsList[i].list[index].subtitle} ${signalsList[i].list[index].title}"]`).should('be.visible')
        expect($els.find('.description').text()).to.eq(signalsList[i].list[index].description)
      })
    })
  }
})

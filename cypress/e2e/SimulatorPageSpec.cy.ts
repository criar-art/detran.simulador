import { questionsOne, questionsTwo, questionsThree } from 'src/app/core/questions'

describe('Simulator page', () => {
  it('Test texts in simulator page', () => {
    cy.visit('/teste/1')
    cy.contains('Brasil Simulador Detran')
    cy.contains('Simulador Detran Ⓒriar.art')
  })

  it('Test simulator simple', () => {
    cy.get('input').type('Lucas')
    cy.get('[aria-label="Botão para iniciar o teste"]').click()
    cy.get('[ng-reflect-dialog-result="true"]').click()

    for(var i = 0; i < questionsOne.length; i++) {
      cy.get('.mat-card-title').then(($el) => {
        validationQuestion($el.get(0).innerText, questionsOne);
      })
      cy.get('[aria-label="Botão para seguir"]').click();
    }

    cy.contains('Você acertou um total de 5');
  })

  it('Test simulator medium', () => {
    cy.visit('/teste/2')
    cy.get('input').type('Lucas')
    cy.get('[aria-label="Botão para iniciar o teste"]').click()
    cy.get('[ng-reflect-dialog-result="true"]').click()

    for(var i = 0; i < questionsTwo.length; i++) {
      cy.get('.mat-card-title').then(($el) => {
        validationQuestion($el.get(0).innerText, questionsTwo);
      })
      cy.get('[aria-label="Botão para seguir"]').click();
    }

    cy.contains('Você acertou um total de 12');
  })

  it('Test simulator advanced', () => {
    cy.visit('/teste/3')
    cy.get('input').type('Lucas')
    cy.get('[aria-label="Botão para iniciar o teste"]').click()
    cy.get('[ng-reflect-dialog-result="true"]').click()

    for(var i = 0; i < questionsThree.length; i++) {
      cy.get('.mat-card-title').then(($el) => {
        validationQuestion($el.get(0).innerText, questionsThree);
      })
      cy.get('[aria-label="Botão para seguir"]').click();
    }

    cy.contains('Você acertou um total de 20');
  })
})

function validationQuestion(question: string, questions: any) {
  const test = questions.find(({ ask } : any) => ask == question);
  const reactResult = test.reacts.find(({ value } : any) => value == 'lucas');

  cy.contains(reactResult.choice).click();
}

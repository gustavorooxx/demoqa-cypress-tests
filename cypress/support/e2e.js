// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// cypress/support/e2e.js ou cypress/support/commands.js

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para que o Cypress não falhe o teste
  // quando encontrar uma exceção não capturada.
  // Você pode adicionar lógica aqui para ignorar apenas certos erros
  // if (err.message.includes('something about a cross origin script')) {
  //   return false
  // }
  // Ou para ignorar todos eles:
  return false
})

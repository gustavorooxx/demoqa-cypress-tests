# Documentação Prática: `demoqa-cypress-tests`

Este repositório contém testes automatizados end-to-end desenvolvidos com Cypress para a plataforma [DemoQA](https://demoqa.com/). O objetivo é demonstrar a automação de diferentes funcionalidades do site, garantindo a qualidade e o correto funcionamento das aplicações.

## Sumário

1.  [Pré-requisitos](https://www.google.com/search?q=%23pr%C3%A9-requisitos)
2.  [Instalação](https://www.google.com/search?q=%23instala%C3%A7%C3%A3o)
3.  [Estrutura do Projeto](https://www.google.com/search?q=%23estrutura-do-projeto)
4.  [Executando os Testes](https://www.google.com/search?q=%23executando-os-testes)
5.  [Exemplos de Testes](https://www.google.com/search?q=%23exemplos-de-testes)
6.  [Melhores Práticas (Recomendado)](https://www.google.com/search?q=%23melhores-pr%C3%A1ticas-recomendado)
7.  [Recursos Adicionais](https://www.google.com/search?q=%23recursos-adicionais)

## Pré-requisitos

Para executar os testes neste repositório, você precisará ter o seguinte software instalado em sua máquina:

  * **Node.js**: Certifique-se de ter a versão LTS mais recente do Node.js instalada. Você pode baixá-la em [nodejs.org](https://nodejs.org/).
  * **npm** (Node Package Manager): Geralmente, vem junto com o Node.js.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/gustavorooxx/demoqa-cypress-tests.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd demoqa-cypress-tests
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

    Este comando instalará todas as dependências do Cypress e outras bibliotecas necessárias, conforme listado no arquivo `package.json`.

## Estrutura do Projeto

A estrutura de diretórios deste projeto Cypress segue as convenções padrão, facilitando a navegação e manutenção:

```
├── cypress/
│   ├── e2e/             # Contém os arquivos de especificação dos testes end-to-end (.cy.js)
│   ├── fixtures/        # Dados estáticos utilizados nos testes (e.g., arquivos JSON)
│   ├── support/         # Comandos customizados e configurações de suporte
│   │   ├── commands.js  # Comandos Cypress personalizados e reutilizáveis
│   │   └── e2e.js       # Arquivo executado antes de cada arquivo de especificação
│   └── videos/          # Vídeos das execuções dos testes (gerados automaticamente)
├── node_modules/        # Dependências do projeto
├── package.json         # Define metadados do projeto e scripts
├── cypress.config.js    # Configurações globais do Cypress
└── README.md            # Este arquivo de documentação
```

  * **`cypress/e2e`**: É onde você encontrará os arquivos de teste `.cy.js`. Recomenda-se organizar os testes em subpastas por funcionalidade ou página (ex: `cypress/e2e/forms`, `cypress/e2e/elements`).
  * **`cypress/fixtures`**: Use esta pasta para armazenar dados de teste que não devem ser codificados diretamente nos testes.
  * **`cypress/support`**: Ideal para adicionar comandos personalizados, como funções de login (`cy.login()`), que podem ser reutilizadas em vários testes.

## Executando os Testes

Existem duas maneiras principais de executar os testes Cypress:

### 1\. Execução Interativa (Cypress Test Runner)

Esta é a forma recomendada para desenvolver e depurar testes, pois abre a interface gráfica do Cypress.

```bash
npx cypress open
```

Ao executar este comando:

  * O Cypress Test Runner será aberto em uma nova janela.
  * Você poderá selecionar entre "E2E Testing" (testes end-to-end) e "Component Testing" (se configurado).
  * Clique em "E2E Testing" e, em seguida, escolha um navegador.
  * A lista de arquivos de teste em `cypress/e2e` será exibida. Clique em qualquer arquivo para executá-lo no navegador.

### 2\. Execução em Modo Headless (Linha de Comando)

Para executar os testes em um ambiente de CI/CD ou em segundo plano, sem abrir a interface gráfica do navegador:

```bash
npx cypress run
```

Este comando executará todos os testes encontrados na pasta `cypress/e2e` em um navegador padrão (geralmente Electron ou Chrome, dependendo da sua configuração), gerando relatórios no terminal e, opcionalmente, vídeos e screenshots em `cypress/videos` e `cypress/screenshots`.

**Para executar testes específicos:**

```bash
npx cypress run --spec "cypress/e2e/nome-do-seu-teste.cy.js"
```

**Para executar em um navegador específico (ex: Chrome):**

```bash
npx cypress run --browser chrome
```

## Exemplos de Testes

Considere incluir exemplos de como os testes são escritos, focando em diferentes funcionalidades do DemoQA. Por exemplo:

  * **Teste de formulário:**
    ```javascript
    // cypress/e2e/forms/practiceForm.cy.js
    describe('Student Registration Form', () => {
      it('should submit the form successfully', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#userEmail').type('john.doe@example.com');
        cy.get('input[name="gender"][value="Male"]').check({ force: true });
        cy.get('#userNumber').type('1234567890');
        // Preencher outros campos...
        cy.get('#submit').click();
        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
      });
    });
    ```

## Melhores Práticas (Recomendado)

Para manter seu conjunto de testes robusto e fácil de manter:

  * **Convenções de Nomenclatura:** Use nomes descritivos para arquivos de teste (`.cy.js`), blocos `describe` e `it` que indiquem claramente o que está sendo testado (ex: `login.cy.js`, `describe('Login Functionality')`, `it('should allow a valid user to log in')`).
  * **Comandos Personalizados:** Crie comandos Cypress personalizados em `cypress/support/commands.js` para ações reutilizáveis (e.g., login, navegação comum).
  * **Seletores Robustos:** Evite seletores CSS que dependam de atributos voláteis como `id` (se for gerado dinamicamente) ou `class`. Prefira atributos `data-*` (ex: `data-testid`, `data-cy`) para maior resiliência a mudanças na UI.
  * **Organização:** Organize os testes por recurso, página ou módulo em subpastas dentro de `cypress/e2e`.
  * **Fixtures:** Utilize fixtures para dados de teste, separando-os da lógica dos testes.

## Recursos Adicionais

  * **Documentação Oficial do Cypress:** [https://docs.cypress.io/](https://docs.cypress.io/)
  * **Site DemoQA:** [https://demoqa.com/](https://demoqa.com/)

-----

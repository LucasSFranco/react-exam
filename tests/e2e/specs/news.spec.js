import requests from '../../fixtures/requests.json'

describe('News', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/science.json**', requests.science.data)
      .as('scienceArticlesRequest')
    cy.intercept('GET', '**/technology.json**', requests.technology.data)
      .as('technologyArticlesRequest')

    cy.visit('/')

    cy.wait('@scienceArticlesRequest')
    cy.wait('@technologyArticlesRequest')
  })

  context('News Header', () => {
    it('properly renders NYT logo', () => {
      cy.getBy('nyt-logo')
        .should('have.attr', 'href', 'https://www.nytimes.com/')
        .should('have.attr', 'target', '_blank')
        .find('img')
        .should('have.attr', 'alt', 'The New York Times')
    })
  })

  context('Topic Navbar', () => {
    it('properly renders on root path', () => {
      cy.getBy('topic-navbar-title')
        .should('contain', 'all news')

      cy.getBy('topic-navbar-item')
        .should('have.length', 3)
        .first()
        .should('contain', 'all news')

      cy.getBy('topic-navbar-item')
        .get('.selected')
        .should('have.length', 1)
        .should('contain', 'all news')
    })

    it('properly renders on topic path', () => {
      cy.visit('/topic/science')

      cy.getBy('topic-navbar-title')
        .should('contain', 'science')

      cy.getBy('topic-navbar-item')
        .should('have.length', 3)
        .first()
        .should('contain', 'all news')

      cy.getBy('topic-navbar-item')
        .get('.selected')
        .should('have.length', 1)
        .should('contain', 'science')
    })

    it('changes path on navbar item click', () => {
      cy.getBy('topic-navbar-item')
        .contains('technology')
        .click()

      cy.location('pathname')
        .should('be.equal', '/topic/technology')

      cy.getBy('topic-navbar-item')
        .get('.selected')
        .should('have.length', 1)
        .should('contain', 'technology')
    })
  })

  context('News Button Return To Top', () => {
    it('returns scrollbox to top on click', () => {
      cy.getBy('news-scrollbox')
        .invoke('attr', 'style', 'scroll-behavior: auto')
        .then(([scrollbox]) => {
          cy.getBy('news-list-container')
            .invoke('attr', 'style', `min-height: ${2 * scrollbox.offsetHeight}px`)
        })

      cy.getBy('news-scrollbox')
        .scrollTo('bottom')
        .then(([scrollbox]) => {
          expect(scrollbox.scrollTop).not.to.be.equal(0)
        })

      cy.get('.button.return-to-top')
        .click()

      cy.getBy('news-scrollbox')
        .then(([scrollbox]) => {
          expect(scrollbox.scrollTop).to.be.equal(0)
        })
    })
  })

  context('Article Modal', () => {
    it('opens on article list item click', () => {
      cy.get('.modal')
        .should('not.exist')

      cy.get('.article.list__item')
        .first()
        .click()

      cy.get('.modal')
        .should('be.visible')
        .find('.article.modal__card')
    })

    context('when open', () => {
      beforeEach(() => {
        cy.get('.article.list__item')
          .first()
          .click()
      })

      it('closes on click outside', () => {
        cy.get('.modal')
          .trigger('mouseup')
          .should('be.visible')

        cy.get('.modal__content')
          .click()

        cy.get('.modal')
          .should('be.visible')

        cy.get('.modal')
          .click({ force: true })
          .should('not.exist')
      })

      it('closes on close button click', () => {
        cy.get('.modal__closer')
          .click()

        cy.get('.modal')
          .should('not.exist')
      })
    })

    context('Article List', () => {
      it('renders skeleton loader while not loaded all the list articles', () => {
        cy.get('.article.list__item--skeleton')
          .should('have.length', 10)

        cy.getBy('news-scrollbox')
          .scrollTo('bottom')

        cy.get('.article.list__item--skeleton')
          .should('not.exist')
      })

      it('loads more articles on scroll bottom', () => {
        cy.get('.article.list__item')
          .should('have.length', 10)

        cy.getBy('news-scrollbox')
          .scrollTo('bottom')

        cy.get('.article.list__item')
          .should('have.length', 20)

        cy.getBy('topic-navbar-item')
          .contains('science')
          .click()

        cy.get('.article.list__item')
          .should('have.length', 10)

        cy.getBy('news-scrollbox')
          .scrollTo('bottom')

        cy.get('.article.list__item')
          .should('have.length', 11)
      })
    })
  })
})

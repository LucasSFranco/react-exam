import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import ArticleList from './ArticleList'
import Articles from '../../services/Articles'
import store from '../../store'
import { changeActiveTab } from "../../store/slices/newsSlice"
import articles from '../../../tests/fixtures/articles.json'

jest.mock('../../services/Articles')

describe('Article List', () => {

  beforeEach(async () => {
    const mockIntersectionObserver = jest.fn()

    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      disconnect: () => null,
    })

    window.IntersectionObserver = mockIntersectionObserver
  })

  it('properly renders all articles', async () => {
    Articles.getAll.mockResolvedValue(articles)
    Articles.getAllCount.mockResolvedValue(articles.length)

    const { container } = render(
      <Provider store={store}>
        <ArticleList />
      </Provider>
    )

    expect(await screen.findAllByTestId('article-list-item'))
      .toHaveLength(articles.length)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('properly renders topic articles', async () => {
    const technologyArticles = articles
      .filter(article => article.topic === 'technology')

    Articles.getTopic.mockResolvedValue(technologyArticles)
    Articles.getTopicCount.mockResolvedValue(technologyArticles.length)

    store.dispatch(changeActiveTab('technology'))

    const { container } = render(
      <Provider store={store}>
        <ArticleList />
      </Provider>
    )

    expect(await screen.findAllByTestId('article-list-item'))
      .toHaveLength(technologyArticles.length)

    expect(container.firstChild).toMatchSnapshot()
  })

  // it('properly renders topic articles', async () => {
  //   const technologyArticles = articles
  //     .filter(article => article.topic === 'technology')

  //   Articles.getTopic.mockResolvedValue(technologyArticles)
  //   Articles.getTopicCount.mockResolvedValue(technologyArticles.length)

  //   store.dispatch(changeActiveTab('technology'))

  //   const { container } = render(
  //     <Provider store={store}>
  //       <ArticleList />
  //     </Provider>
  //   )

  //   expect(await screen.findAllByTestId('article-list-item'))
  //     .toHaveLength(technologyArticles.length)

  //   expect(container.firstChild).toMatchSnapshot()
  // })
})

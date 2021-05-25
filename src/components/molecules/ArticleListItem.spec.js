import React from 'react'
import { render } from '@testing-library/react'

import ArticleListItem from './ArticleListItem'
import articles from '../../../tests/fixtures/articles.json'

describe('Article List Item', () => {

  it('matches snapshot', async () => {

    const { container } = render(
      <ArticleListItem article={articles[0]} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})

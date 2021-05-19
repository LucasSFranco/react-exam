import React from 'react'
import { render } from '@testing-library/react'

import ArticleListItem from './ArticleListItem'
import articles from '../../../tests/fixtures/articles.json'

describe('Article List Item', () => {

  it('properly renders article data', async () => {

    const { container } = render(
      <ArticleListItem article={articles[0]} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})

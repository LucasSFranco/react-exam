import React from 'react'
import { render, screen } from '@testing-library/react'

import ArticleListItemSkeleton from './ArticleListItemSkeleton'

describe('Article List Item Skeleton', () => {

  it('properly renders the skeleton', async () => {

    render(
      <ArticleListItemSkeleton />
    )

    expect(await screen.findByTestId('publishedDate')).toBeDefined()
    expect(await screen.findByTestId('image')).toBeDefined()
    expect(await screen.findAllByTestId('title')).toBeDefined()
    expect(await screen.findAllByTestId('abstract')).toBeDefined()
    expect(await screen.findAllByTestId('byLine')).toBeDefined()

  })

})

import React from 'react'
import { render } from '@testing-library/react'

import ArticleModal from './ArticleModal'
import articles from '../../../tests/fixtures/articles.json'

jest.mock("../atoms/Modal", () => {
  return {
    Modal: ({ content }) => {
      return <>{content}</>;
    },
  };
});

describe('Article Modal', () => {

  it('properly renders article data', async () => {

    const { container } = render(
      <ArticleModal article={articles[0]}>
        <button />
      </ArticleModal>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})

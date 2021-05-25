import React from 'react'
import { render } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {

  it('matches snapshot', async () => {

    const { container } = render(
      <Header />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})

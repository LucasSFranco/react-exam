import React from 'react'
import { render } from '@testing-library/react'

import Breadcrumb from './Breadcrumb'

describe('Breadcrumb', () => {

  it('matches snapshot', async () => {

    const { container } = render(
      <Breadcrumb items={['item 1', 'item 2', '']} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})
